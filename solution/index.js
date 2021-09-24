const sections = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const uls = document.querySelectorAll('ul')
const searchBar = document.querySelector('#search')

if (!localStorage.tasks) {
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}') // makes sure there is always a tasks key in local storage
}

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

// add better explenation here later
function paintDomFromLocalStorage() {
  const neaterUlNames = []
  uls.forEach((ul) => neaterUlNames.push(ul.className.split('-tasks')[0]))
  // this leaves nicer names to work with
  for (let key in parsedTasks) {
    for (let i = 0; i < neaterUlNames.length; i++) {
      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {
        // find the matching ul to the mathching key (todo & to-do)
        for (let j = 0; j < parsedTasks[key].length; j++) {
          // iterate over the property in the parsed version of the local storage and put it on the DOM
          uls[i].append(createLiElement(parsedTasks[key][j], ['task']))
        }
      }
    }
  }
}
paintDomFromLocalStorage()

const liS = document.querySelectorAll('li')
liS.forEach((li) => {
  li.addEventListener('mouseenter', altHandlerFunction)
})

function altHandlerFunction(e) {
  // make sure this only runs while cursor is on <li>
  const liElements = document.querySelectorAll('li') // a different var than above var (for the initial use of the app, the app doesn't know liS until the first refresh)
  liElements.forEach((li) =>
    li.addEventListener('mouseleave', () => {
      document.removeEventListener('keydown', addToObject)
    })
  )
  const numberOptions = ['1', '2', '3']

  function addToObject(altClickEvent) {
    const keyPressedObject = {}
    keyPressedObject[altClickEvent.key] = true
    document.addEventListener('keydown', function second(secondClickEvent) {
      // document.removeEventListener('keydown', second)
      // works with and without the above line but with it
      // you can't leave your finger on Alt and keep moving it around. Haven't decided which I like better yet.
      if (
        keyPressedObject['Alt'] &&
        numberOptions.includes(secondClickEvent.key)
      ) {
        let category = getCategory(e)
        if (category === 'to-do') category = 'todo'
        parsedTasks[category].splice(
          parsedTasks[category].indexOf(e.target.textContent),
          1 // deletes the appropriate li from it's place in parsed version of local storage.
        )
        switch (secondClickEvent.key) {
          case '1':
            uls[0].prepend(e.target)
            parsedTasks.todo.unshift(e.target.textContent)
            break
          case '2':
            uls[1].prepend(e.target)
            parsedTasks['in-progress'].unshift(e.target.textContent)
            break
          case '3':
            uls[2].prepend(e.target)
            parsedTasks.done.unshift(e.target.textContent)
            break
        }
        localStorage.setItem('tasks', JSON.stringify(parsedTasks))
      }
    })
    document.addEventListener('keyup', (e) => {
      keyPressedObject[e.key] = false
    }) // makes sure BOTH keys are simultaneously pressed.
  }

  if (e.type === 'mouseenter') {
    document.addEventListener('keydown', addToObject)
  }
}

buttons.forEach((button) => button.addEventListener('click', inputListener))

function getCategory(e) {
  const section = e.target.closest('section')
  // find out what category we're in:
  return section.id.split('-section')[0]
}

function updateLocalStorage(category, input, methodOfExtraction) {
  for (let key in parsedTasks) {
    if (key.split('-').join('') === category.split('-').join('')) {
      parsedTasks[key].unshift(input[methodOfExtraction])
      localStorage.setItem('tasks', JSON.stringify(parsedTasks))
    }
  }
}

function inputListener(e) {
  const category = getCategory(e)
  const input = document.querySelector(`#add-${category}-task`)
  // check to see if box contains real text:
  if (input.value.replace(/\s/g, '').length < 1) {
    console.log('empty string') // this will later sub with alert()
    return
  }
  const newLiElement = createLiElement(input.value, ['task'])
  if (!input.value.includes(searchBar.value)) {
    newLiElement.className = 'hidden'
  } else {
    newLiElement.className = 'list-item task'
  }
  newLiElement.addEventListener('mouseenter', altHandlerFunction) // makes sure you don't have to refresh
  document.querySelector(`.${category}-tasks`).prepend(newLiElement)
  updateLocalStorage(category, input, 'value')
}

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  return element
}

liS.forEach((li) => li.addEventListener('dblclick', makeEditable))
function makeEditable(e) {
  e.target.addEventListener('blur', setEditedText)
  e.target.setAttribute('contenteditable', 'true')
  e.target.focus() // otherwise you have to reclick
  const originalTextContent = e.target.textContent

  function setEditedText(blurEvent) {
    let category = getCategory(blurEvent)
    if (category === 'to-do') category = 'todo'
    parsedTasks[category].splice(
      parsedTasks[category].indexOf(originalTextContent),
      1,
      blurEvent.target.textContent
    )
    localStorage.setItem('tasks', JSON.stringify(parsedTasks))
  }
}

document.querySelector('#search').addEventListener('input', globalSearch)
function globalSearch(e) {
  const liList = document.querySelectorAll('li')
  liList.forEach((li) => {
    if (
      !li.textContent
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    ) {
      li.className = 'hidden'
    } else {
      li.className = 'task list-item'
    }
  })
}

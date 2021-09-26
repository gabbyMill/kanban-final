const sections = document.querySelectorAll('.section')
const buttons = document.querySelectorAll('button')
const uls = document.querySelectorAll('ul')
const searchBar = document.querySelector('#search')

if (!localStorage.tasks) {
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}') // makes sure there is always a tasks key in local storage
}

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

function paintDomFromLocalStorage(dataObject) {
  const neaterUlNames = []
  uls.forEach((ul) => neaterUlNames.push(ul.className.split('-tasks')[0]))
  // this leaves nicer names to work with
  for (let key in dataObject) {
    for (let i = 0; i < neaterUlNames.length; i++) {
      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {
        // find the matching ul to the mathching key (todo & to-do)
        for (let j = 0; j < dataObject[key].length; j++) {
          // iterate over the property in the parsed version of the local storage and put it on the DOM
          const newLi = createLiElement(dataObject[key][j], ['task'])
          uls[i].append(newLi)
        }
      }
    }
  }
}
paintDomFromLocalStorage(parsedTasks)

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
        switch (secondClickEvent.key) {
          case '1':
            uls[0].prepend(e.target)
            break
          case '2':
            uls[1].prepend(e.target)
            break
          case '3':
            uls[2].prepend(e.target)
            break
        }
        updateParsedTasksAndSetLocalStorage()
      }
    })
    document.addEventListener('keyup', (keyboardEvent) => {
      keyPressedObject[keyboardEvent.key] = false
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

function inputListener(e) {
  const clsLst = [...e.target.classList]
  if (
    e.type !== 'keydown' &&
    !clsLst.includes('bold') &&
    !clsLst.includes('underline')
  ) {
    if (!e.target.closest('button').id.includes('submit')) return
  }
  const category = getCategory(e)
  const input = document.querySelector(`#add-${category}-task`)
  // check to see if box contains real text:
  if (input.value.replace(/\s/g, '').length < 1) {
    alert('You forgot to fill out the box')
    return
  }
  const newLiElement = createLiElement(input.value, ['task'])
  if (!input.value.includes(searchBar.value)) {
    newLiElement.className = 'hidden'
  } else {
    newLiElement.className = 'list-item task'
  }
  newLiElement.addEventListener('mouseenter', altHandlerFunction) // makes sure you don't have to refresh
  newLiElement.addEventListener('dblclick', makeEditable)
  newLiElement.addEventListener('dragstart', addDragging)
  newLiElement.addEventListener('dragend', removeDragging)
  if ([...e.target.classList].includes('bold')) {
    newLiElement.classList.add('bold-font') // make bold
  }
  if ([...e.target.classList].includes('underline')) {
    newLiElement.classList.add('underlined') // make bold
  }
  document.querySelector(`.${category}-tasks`).prepend(newLiElement)
  updateParsedTasksAndSetLocalStorage()
  input.value = ''
}

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  element.setAttribute('draggable', 'true')
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
    e.target.setAttribute('contenteditable', 'false')
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

function createLoader() {
  const container = document.querySelector('#container')
  const loader = document.createElement('img')
  loader.className = 'loader'
  loader.src = '../gifs/loader.gif'
  loader.alt = 'image of loader'
  document.body.insertBefore(loader, container)
  return loader
}

document.querySelector('#load-btn').addEventListener('click', loadFromApi)
document.querySelector('#save-btn').addEventListener('click', saveToApi)

async function loadFromApi() {
  try {
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    // handle errors:
    if (!response.ok) {
      alert(response.status)
      throw `HTTP Error ${response.status}`
    }
    const data = await response.json()
    if (localStorage.tasks === data.tasks) {
      return loader.remove()
    } else {
      const newString = makeNormalString(JSON.stringify(data.tasks)) // stringifies without `\\`
      localStorage.setItem('tasks', newString)
    }
    loader.remove()
    location.reload()
  } catch (e) {
    console.log(e)
  }
}

async function saveToApi() {
  try {
    const { tasks } = localStorage
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tasks }),
    })
    if (!response.ok) {
      alert(response.status)
      throw `HTTP ERROR ${response.status}`
    }
    loader.remove()
  } catch (e) {
    console.log(e)
  }
}

function makeNormalString(tasks) {
  tasks = tasks.replace('"{', '{')
  tasks = tasks.replace('}"', '}')
  return tasks.replaceAll('\\', '')
}

liS.forEach((li) => {
  li.addEventListener('dragstart', () => {
    li.classList.add('dragging')
  })
})

liS.forEach((li) => {
  li.addEventListener('dragend', () => {
    li.classList.remove('dragging')
  })
})

uls.forEach((ul) => {
  ul.addEventListener('dragover', function dragOver(e) {
    e.preventDefault()
    const immediatelyBelowElement = getDragAfterElement(ul, e.clientY) // Gets the element you're immediately above
    const draggable = document.querySelector('.dragging') // only one el with class 'dragging' at a time
    if (immediatelyBelowElement == 'null') {
      ul.append(immediatelyBelowElement)
    } else if (ul.className === 'trash-container') {
      if (draggable) draggable.remove()
    } else {
      ul.insertBefore(draggable, immediatelyBelowElement)
    }
    updateParsedTasksAndSetLocalStorage()
  })
})

function getDragAfterElement(ul, yCoordinate) {
  // Y axis of where your mouse is
  const draggableElements = [...ul.querySelectorAll('.task:not(.dragging)')] // get every draggable but the one your'e currently dragging
  return draggableElements.reduce(
    (closestElement, task) => {
      const box = task.getBoundingClientRect() // rectangle of <li>
      const offset = yCoordinate - box.top - box.height / 2 // positive if above the half line of box, negative otherwise
      if (offset < 0 && offset > closestElement.offset) {
        // takes the element with the losest POSITIVE offset
        return { offset: offset, element: task }
      } else {
        return closestElement
      }
    },
    { offset: -Infinity } // start at -Infinty so any elements offset will be above
  ).element // returning the element itself
}

function addDragging(e) {
  e.target.classList.add('dragging')
}

function removeDragging(e) {
  e.target.classList.remove('dragging')
}

function updateParsedTasksAndSetLocalStorage() {
  const arrayOfUls = [...uls]
  for (let i = 0; i < arrayOfUls.length; i++) {
    let category = arrayOfUls[i].classList[0].split('-tasks')[0]
    for (let key in parsedTasks) {
      if (key.split('-').join('') === category.split('-').join('')) {
        const arrayOfLis = [...arrayOfUls[i].querySelectorAll('li')]
        parsedTasks[key] = []
        arrayOfLis.forEach((li) => {
          parsedTasks[key].push(li.textContent)
        })
      }
    }
    localStorage.setItem('tasks', JSON.stringify(parsedTasks))
  }
}

let sectionToPaint
const colorPalettes = document.querySelectorAll('.color')
colorPalettes.forEach((cp) => {
  cp.addEventListener('click', (e) => {
    const colorPicker = document.querySelector('#picker')
    colorPicker.style = 'display: flex;'
    const closestSection = e.target.closest('section')
    sectionToPaint = closestSection
    setTimeout(() => {
      colorPicker.style = 'display: none;'
    }, 5000)
  })
})

const colorPicker = new iro.ColorPicker('#picker', {
  width: 90,
})
colorPicker.on('color:change', (color) => {
  sectionToPaint.style = `background-color: ${color.hexString}`
})

const inputs = document.querySelectorAll('input')
inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    if (e.target === searchBar) return
    input.addEventListener('keydown', makeEnterSubmit)
  })
})

function makeEnterSubmit(keydownEvent) {
  if (keydownEvent.key === 'Enter') {
    inputListener(keydownEvent)
  }
}

const boldIcons = document.querySelectorAll('.bold')
boldIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})

const underlinedIcons = document.querySelectorAll('.underline')
underlinedIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})

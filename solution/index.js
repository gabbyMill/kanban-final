//  --- -> Local Storage <- --- \\ Start // Father/Folder

const uls = document.querySelectorAll('ul')

if (!localStorage.tasks) {
  // for first opening of app
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}') // makes sure there is always a tasks key in local storage
}

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

function paintDomFromLocalStorage(dataObject) {
  const neaterUlNames = [...uls].map((ul) => ul.className.split('-tasks')[0])
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

//  --- -> Local Storage <- --- \\ End // Father/Folder

// --------------- -><- --------------- \\ // --------------- -><- --------------- \\

//  --- -> DOM Manipulation & Event Handling <- --- \\ Start // Father/Folder

function addListenersToLi(element) {
  element.addEventListener('mouseenter', altHandlerFunction) // makes sure you don't have to refresh
  element.addEventListener('dblclick', makeEditable)
  element.addEventListener('dragstart', addDragging)
  element.addEventListener('dragend', removeDragging)
}

const liS = document.querySelectorAll('li')
liS.forEach((li) => {
  addListenersToLi(li) // adds all sort of events
})

//  --- -> Alt functionality <- --- \\ Start // Child

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

//  --- -> Alt functionality <- --- \\ End // Child

//  --- -> Add Task <- --- \\ Start // Child

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => button.addEventListener('click', inputListener))

function getCategory(e) {
  const section = e.target.closest('section')
  // find out what category we're in:
  return section.id.split('-section')[0]
}

function inputListener(e) {
  const searchBar = document.querySelector('#search')
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
  addListenersToLi(newLiElement)
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

//  --- -> Add Task <- --- \\ End ? // Child

//  --- -> Make Editable <- --- \\ Start // Child

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  element.setAttribute('draggable', 'true')
  return element
}

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

//  --- -> Make Editable <- --- \\ End // Child

//  --- -> Search <- --- \\ Start

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

//  --- -> Search <- --- \\ End // Child

//  --- -> D&D <- --- \\ Start

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
  // notice that you need 'uls' here. get it if it's not in the module with it defined
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

//  --- -> D&D <- --- \\ End

//  --- -> Color Pallete <- --- \\ Start // Child

let sectionToPaint
const colorPalettes = document.querySelectorAll('.color')
colorPalettes.forEach((cp) => {
  cp.addEventListener('click', (e) => {
    const colorPicker = document.querySelector('#picker')
    colorPicker.style = 'display: flex;'
    sectionToPaint = e.target.closest('section')
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

//  --- -> Color Pallete <- --- \\ End // Child

//  --- -> Enter Functionality <- --- \\ Start // Child

const inputs = document.querySelectorAll('input')
inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    if (e.target === document.querySelector('#search')) return
    input.addEventListener('keydown', makeEnterSubmit)
  })
})

function makeEnterSubmit(keydownEvent) {
  if (keydownEvent.key === 'Enter') {
    inputListener(keydownEvent)
  }
}

//  --- -> Enter Functionality <- --- \\ End // Child

//  --- -> Bold & Underline <- --- \\ Start // Child

const boldIcons = document.querySelectorAll('.bold')
boldIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})

const underlinedIcons = document.querySelectorAll('.underline')
underlinedIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})

//  --- -> Bold & Underline <- --- \\ End // Child

//  --- -> DOM Manipulation & Event Handling <- --- \\ End // Father/Folder

// --------------- -><- --------------- \\ // --------------- -><- --------------- \\

//  --- -> Network <- --- \\ Start // Father/Folder

//  --- -> createLoader <- --- \\ Start // Child

function createLoader() {
  const container = document.querySelector('#container')
  const loader = document.createElement('img')
  loader.className = 'loader'
  loader.src = '../gifs/loader.gif'
  loader.alt = 'image of loader'
  document.body.insertBefore(loader, container)
  return loader
}

//  --- -> Create Loader <- --- \\ End // Child

document.querySelector('#load-btn').addEventListener('click', loadFromApi)
document.querySelector('#save-btn').addEventListener('click', saveToApi)

//  --- -> Load From Api <- --- \\ Start // Child

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
      console.log(localStorage)
      localStorage.setItem('tasks', JSON.stringify(data.tasks))
    }
    loader.remove()
    location.reload()
  } catch (e) {
    console.log(e)
  }
}

//  --- -> Load From Api <- --- \\ End // Child

//  --- -> Save To Api <- --- \\ Start // Child

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
      body: JSON.stringify({ tasks: JSON.parse(tasks) }),
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

//  --- -> Save To Api <- --- \\ End // Child

//  --- -> Network <- --- \\ End // Father/Folder

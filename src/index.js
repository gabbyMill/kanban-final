/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable dot-notation */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-throw-literal */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable no-else-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
/* eslint-disable import/first */
/* eslint-disable max-len */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import './Scss/styles.scss' // makes errors in orig but not in dist
const uls = document.querySelectorAll('ul')
const parsedTasks = JSON.parse(localStorage.getItem('tasks'))
//  --- -> Local Storage <- --- \\ Start
import paintDomFromLocalStorage from './localStorage/paintDom.js'
paintDomFromLocalStorage(parsedTasks)
//  --- -> DOM Manipulation & Event Handling <- --- \\ Start
import addListenersToLi from './domAndEvents/addListeners'
const liS = document.querySelectorAll('li')
liS.forEach((li) => {
  addListenersToLi(li) // adds all sort of events
})
import inputListener from './domAndEvents/inputListener.js'
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => button.addEventListener('click', inputListener))
//  --- -> Search <- --- \\ Start
import globalSearch from './domAndEvents/globalSearch.js'
document.querySelector('#search').addEventListener('input', globalSearch)
//  --- -> D&D <- --- \\ Start
liS.forEach((li) => {
  li.addEventListener('dragstart', () => {
    li.classList.add('dragging')
  })
})
// I can use dragging here instead
liS.forEach((li) => {
  li.addEventListener('dragend', () => {
    li.classList.remove('dragging')
  })
})
import dndFunction from './domAndEvents/dndFunction1'
dndFunction()
//  --- -> Color Pallete <- --- \\ Start
import colorPicker from './domAndEvents/colorPicker'
colorPicker()
//  --- -> Enter Functionality <- --- \\ Start
import utilizeEnter from './domAndEvents/utilizeEnter'
utilizeEnter()
//  --- -> Bold & Underline <- --- \\ Start // Child
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE
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

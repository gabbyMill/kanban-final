import addListenersToLi from './addListeners.js'

import createLiElement from '../generalFunctions/createLi.js'

import updateParsedTasksAndSetLocalStorage from '../localStorage/setLocalStorage.js'

import getCategory from '../generalFunctions/getCategory.js'

export default function inputListener(e) {
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

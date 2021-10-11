/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
const parsedTasks = JSON.parse(localStorage.tasks)
import getCategory from '../generalFunctions/getCategory.js'

export default function makeEditable(e) {
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

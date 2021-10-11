/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable prefer-arrow-callback */
import getDragAfterElement from './dndFunction2.js'
import updateParsedTasksAndSetLocalStorage from '../localStorage/setLocalStorage.js'
const uls = document.querySelectorAll('ul')

export default function dndFunction() {
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
}

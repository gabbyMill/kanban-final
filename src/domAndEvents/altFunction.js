/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable dot-notation */
/* eslint-disable default-case */
const uls = document.querySelectorAll('ul') // later get rid of this line

import updateParsedTasksAndSetLocalStorage from '../localStorage/setLocalStorage'

export default function altHandlerFunction(e) {
  // make sure this only runs while cursor is on <li>
  const liElements = document.querySelectorAll('li') // a different var than above var (for the initial use of the app, the app doesn't know liS until the first refresh)
  liElements.forEach(
    (li) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      li.addEventListener('mouseleave', () => {
        document.removeEventListener('keydown', addToObject)
      })
    // eslint-disable-next-line function-paren-newline
  )
  const numberOptions = ['1', '2', '3']

  function addToObject(altClickEvent) {
    const keyPressedObject = {}
    keyPressedObject[altClickEvent.key] = true
    // eslint-disable-next-line prefer-arrow-callback
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

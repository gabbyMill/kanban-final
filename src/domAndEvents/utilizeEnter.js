/* eslint-disable no-undef */
import inputListener from './inputListener'

function makeEnterSubmit(keydownEvent) {
  if (keydownEvent.key === 'Enter') {
    inputListener(keydownEvent)
  }
}
export default function utilizeEnter() {
  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.addEventListener('focus', (e) => {
      if (e.target === document.querySelector('#search')) return
      input.addEventListener('keydown', makeEnterSubmit)
    })
  })
}

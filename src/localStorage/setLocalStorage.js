/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */

const uls = document.querySelectorAll('ul') // later get rid of this line

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

export default function updateParsedTasksAndSetLocalStorage() {
  const arrayOfUls = [...uls]
  for (let i = 0; i < arrayOfUls.length; i++) {
    const category = arrayOfUls[i].classList[0].split('-tasks')[0]
    for (const key in parsedTasks) {
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

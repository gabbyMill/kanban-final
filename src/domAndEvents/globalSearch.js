/* eslint-disable no-param-reassign */
export default function globalSearch(e) {
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

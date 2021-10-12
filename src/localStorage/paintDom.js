/* eslint-disable eol-last */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import createLiElement from '../generalFunctions/createLi'

if (!localStorage.tasks) {
  // for first opening of app
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}') // makes sure there is always a tasks key in local storage
}

const uls = document.querySelectorAll('ul')

export default function paintDomFromLocalStorage(dataObject) {
  const neaterUlNames = [...uls].map((ul) => ul.className.split('-tasks')[0])
  // this leaves nicer names to work with
  for (const key in dataObject) {
    for (let i = 0; i < neaterUlNames.length; i++) {
      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {
        // find the matching ul to the mathching key (todo & to-do)
        for (let j = 0; j < dataObject[key].length; j++) {
          // iterate over the property in
          // the parsed version of the local storage and put it on the DOM
          const newLi = createLiElement(dataObject[key][j], ['task'])
          uls[i].append(newLi)
        }
      }
    }
  }
}

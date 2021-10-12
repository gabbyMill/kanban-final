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

import colorPicker from './domAndEvents/colorPicker'
colorPicker()

import utilizeEnter from './domAndEvents/utilizeEnter'
utilizeEnter()
//  --- -> Bold & Underline <- --- \\ Start // Child
const boldIcons = document.querySelectorAll('.bold')
boldIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})
const underlinedIcons = document.querySelectorAll('.underline')
underlinedIcons.forEach((icon) => {
  icon.addEventListener('click', inputListener)
})
//  --- -> Network <- --- \\ Start
document.querySelector('#load-btn').addEventListener('click', loadFromApi)
document.querySelector('#save-btn').addEventListener('click', saveToApi)

import loadFromApi from './network/load.js'

import saveToApi from './network/save'

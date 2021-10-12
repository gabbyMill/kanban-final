/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import altHandlerFunction from './altFunction.js'

import makeEditable from './makeEditable.js'

import { addDragging } from './dragging.js'

import { removeDragging } from './dragging.js'

export default function addListenersToLi(element) {
  element.addEventListener('mouseenter', altHandlerFunction)
  element.addEventListener('dblclick', makeEditable)
  element.addEventListener('dragstart', addDragging)
  element.addEventListener('dragend', removeDragging)
}

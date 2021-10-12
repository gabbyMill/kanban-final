/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scss/styles.scss":
/*!******************************!*\
  !*** ./src/Scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final/./src/Scss/styles.scss?");

/***/ }),

/***/ "./src/domAndEvents/addListeners.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/addListeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addListenersToLi)\n/* harmony export */ });\n/* harmony import */ var _altFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altFunction.js */ \"./src/domAndEvents/altFunction.js\");\n/* harmony import */ var _makeEditable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeEditable.js */ \"./src/domAndEvents/makeEditable.js\");\n/* harmony import */ var _dragging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragging.js */ \"./src/domAndEvents/dragging.js\");\n/* eslint-disable import/no-duplicates */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable no-undef */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addListenersToLi(element) {\r\n  element.addEventListener('mouseenter', _altFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n  element.addEventListener('dblclick', _makeEditable_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n  element.addEventListener('dragstart', _dragging_js__WEBPACK_IMPORTED_MODULE_2__.addDragging)\r\n  element.addEventListener('dragend', _dragging_js__WEBPACK_IMPORTED_MODULE_2__.removeDragging)\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/addListeners.js?");

/***/ }),

/***/ "./src/domAndEvents/altFunction.js":
/*!*****************************************!*\
  !*** ./src/domAndEvents/altFunction.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ altHandlerFunction)\n/* harmony export */ });\n/* harmony import */ var _localStorage_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage/setLocalStorage */ \"./src/localStorage/setLocalStorage.js\");\n/* eslint-disable import/first */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable dot-notation */\r\n/* eslint-disable default-case */\r\nconst uls = document.querySelectorAll('ul') // later get rid of this line\r\n\r\n;\r\n\r\nfunction altHandlerFunction(e) {\r\n  // make sure this only runs while cursor is on <li>\r\n  const liElements = document.querySelectorAll('li') // a different var than above var (for the initial use of the app, the app doesn't know liS until the first refresh)\r\n  liElements.forEach(\r\n    (li) =>\r\n      // eslint-disable-next-line implicit-arrow-linebreak\r\n      li.addEventListener('mouseleave', () => {\r\n        document.removeEventListener('keydown', addToObject)\r\n      })\r\n    // eslint-disable-next-line function-paren-newline\r\n  )\r\n  const numberOptions = ['1', '2', '3']\r\n\r\n  function addToObject(altClickEvent) {\r\n    const keyPressedObject = {}\r\n    keyPressedObject[altClickEvent.key] = true\r\n    // eslint-disable-next-line prefer-arrow-callback\r\n    document.addEventListener('keydown', function second(secondClickEvent) {\r\n      if (\r\n        keyPressedObject['Alt'] &&\r\n        numberOptions.includes(secondClickEvent.key)\r\n      ) {\r\n        switch (secondClickEvent.key) {\r\n          case '1':\r\n            uls[0].prepend(e.target)\r\n            break\r\n          case '2':\r\n            uls[1].prepend(e.target)\r\n            break\r\n          case '3':\r\n            uls[2].prepend(e.target)\r\n            break\r\n        }\r\n        (0,_localStorage_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n      }\r\n    })\r\n    document.addEventListener('keyup', (keyboardEvent) => {\r\n      keyPressedObject[keyboardEvent.key] = false\r\n    }) // makes sure BOTH keys are simultaneously pressed.\r\n  }\r\n\r\n  if (e.type === 'mouseenter') {\r\n    document.addEventListener('keydown', addToObject)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/altFunction.js?");

/***/ }),

/***/ "./src/domAndEvents/colorPicker.js":
/*!*****************************************!*\
  !*** ./src/domAndEvents/colorPicker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ colorPicker)\n/* harmony export */ });\nfunction colorPicker() {\r\n  let sectionToPaint\r\n  const colorPalettes = document.querySelectorAll('.color')\r\n  colorPalettes.forEach((cp) => {\r\n    cp.addEventListener('click', (e) => {\r\n      const colorPicker = document.querySelector('#picker')\r\n      colorPicker.style = 'display: flex;'\r\n      sectionToPaint = e.target.closest('section')\r\n      setTimeout(() => {\r\n        colorPicker.style = 'display: none;'\r\n      }, 5000)\r\n    })\r\n  })\r\n\r\n  const colorPicker = new iro.ColorPicker('#picker', {\r\n    width: 90,\r\n  })\r\n  colorPicker.on('color:change', (color) => {\r\n    sectionToPaint.style = `background-color: ${color.hexString}`\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/colorPicker.js?");

/***/ }),

/***/ "./src/domAndEvents/dndFunction1.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/dndFunction1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dndFunction)\n/* harmony export */ });\n/* harmony import */ var _dndFunction2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dndFunction2.js */ \"./src/domAndEvents/dndFunction2.js\");\n/* harmony import */ var _localStorage_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localStorage/setLocalStorage.js */ \"./src/localStorage/setLocalStorage.js\");\n/* eslint-disable no-undef */\r\n/* eslint-disable eqeqeq */\r\n/* eslint-disable max-len */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable prefer-arrow-callback */\r\n\r\n\r\nconst uls = document.querySelectorAll('ul')\r\n\r\nfunction dndFunction() {\r\n  uls.forEach((ul) => {\r\n    // notice that you need 'uls' here. get it if it's not in the module with it defined\r\n    ul.addEventListener('dragover', function dragOver(e) {\r\n      e.preventDefault()\r\n      const immediatelyBelowElement = (0,_dndFunction2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ul, e.clientY) // Gets the element you're immediately above\r\n      const draggable = document.querySelector('.dragging') // only one el with class 'dragging' at a time\r\n      if (immediatelyBelowElement == 'null') {\r\n        ul.append(immediatelyBelowElement)\r\n      } else if (ul.className === 'trash-container') {\r\n        if (draggable) draggable.remove()\r\n      } else {\r\n        ul.insertBefore(draggable, immediatelyBelowElement)\r\n      }\r\n      (0,_localStorage_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/dndFunction1.js?");

/***/ }),

/***/ "./src/domAndEvents/dndFunction2.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/dndFunction2.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDragAfterElement)\n/* harmony export */ });\n/* eslint-disable max-len */\r\n/* eslint-disable object-shorthand */\r\n/* eslint-disable no-else-return */\r\nfunction getDragAfterElement(ul, yCoordinate) {\r\n  // Y axis of where your mouse is\r\n  const draggableElements = [...ul.querySelectorAll('.task:not(.dragging)')] // get every draggable but the one your'e currently dragging\r\n  return draggableElements.reduce(\r\n    (closestElement, task) => {\r\n      const box = task.getBoundingClientRect() // rectangle of <li>\r\n      const offset = yCoordinate - box.top - box.height / 2 // positive if above the half line of box, negative otherwise\r\n      if (offset < 0 && offset > closestElement.offset) {\r\n        // takes the element with the losest POSITIVE offset\r\n        return { offset: offset, element: task }\r\n      } else {\r\n        return closestElement\r\n      }\r\n    },\r\n    { offset: -Infinity } // start at -Infinty so any elements offset will be above\r\n  ).element // returning the element itself\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/dndFunction2.js?");

/***/ }),

/***/ "./src/domAndEvents/dragging.js":
/*!**************************************!*\
  !*** ./src/domAndEvents/dragging.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDragging\": () => (/* binding */ addDragging),\n/* harmony export */   \"removeDragging\": () => (/* binding */ removeDragging)\n/* harmony export */ });\nfunction addDragging(e) {\r\n  e.target.classList.add('dragging')\r\n}\r\n\r\nfunction removeDragging(e) {\r\n  e.target.classList.remove('dragging')\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/dragging.js?");

/***/ }),

/***/ "./src/domAndEvents/globalSearch.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/globalSearch.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ globalSearch)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\r\nfunction globalSearch(e) {\r\n  const liList = document.querySelectorAll('li')\r\n  liList.forEach((li) => {\r\n    if (\r\n      !li.textContent\r\n        .toLocaleLowerCase()\r\n        .includes(e.target.value.toLocaleLowerCase())\r\n    ) {\r\n      li.className = 'hidden'\r\n    } else {\r\n      li.className = 'task list-item'\r\n    }\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/globalSearch.js?");

/***/ }),

/***/ "./src/domAndEvents/inputListener.js":
/*!*******************************************!*\
  !*** ./src/domAndEvents/inputListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputListener)\n/* harmony export */ });\n/* harmony import */ var _addListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addListeners.js */ \"./src/domAndEvents/addListeners.js\");\n/* harmony import */ var _generalFunctions_createLi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalFunctions/createLi.js */ \"./src/generalFunctions/createLi.js\");\n/* harmony import */ var _localStorage_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage/setLocalStorage.js */ \"./src/localStorage/setLocalStorage.js\");\n/* harmony import */ var _generalFunctions_getCategory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalFunctions/getCategory.js */ \"./src/generalFunctions/getCategory.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction inputListener(e) {\r\n  const searchBar = document.querySelector('#search')\r\n  const clsLst = [...e.target.classList]\r\n  if (\r\n    e.type !== 'keydown' &&\r\n    !clsLst.includes('bold') &&\r\n    !clsLst.includes('underline')\r\n  ) {\r\n    if (!e.target.closest('button').id.includes('submit')) return\r\n  }\r\n  const category = (0,_generalFunctions_getCategory_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e)\r\n  const input = document.querySelector(`#add-${category}-task`)\r\n  // check to see if box contains real text:\r\n  if (input.value.replace(/\\s/g, '').length < 1) {\r\n    alert('You forgot to fill out the box')\r\n    return\r\n  }\r\n  const newLiElement = (0,_generalFunctions_createLi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input.value, ['task'])\r\n  if (!input.value.includes(searchBar.value)) {\r\n    newLiElement.className = 'hidden'\r\n  } else {\r\n    newLiElement.className = 'list-item task'\r\n  }\r\n  (0,_addListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newLiElement)\r\n  if ([...e.target.classList].includes('bold')) {\r\n    newLiElement.classList.add('bold-font') // make bold\r\n  }\r\n  if ([...e.target.classList].includes('underline')) {\r\n    newLiElement.classList.add('underlined') // make bold\r\n  }\r\n  document.querySelector(`.${category}-tasks`).prepend(newLiElement)\r\n  ;(0,_localStorage_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n  input.value = ''\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/inputListener.js?");

/***/ }),

/***/ "./src/domAndEvents/makeEditable.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/makeEditable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeEditable)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions_getCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalFunctions/getCategory.js */ \"./src/generalFunctions/getCategory.js\");\n/* eslint-disable import/first */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable no-unused-vars */\r\nconst parsedTasks = JSON.parse(localStorage.tasks)\r\n;\r\n\r\nfunction makeEditable(e) {\r\n  e.target.addEventListener('blur', setEditedText)\r\n  e.target.setAttribute('contenteditable', 'true')\r\n  e.target.focus() // otherwise you have to reclick\r\n  const originalTextContent = e.target.textContent\r\n\r\n  function setEditedText(blurEvent) {\r\n    let category = (0,_generalFunctions_getCategory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blurEvent)\r\n    if (category === 'to-do') category = 'todo'\r\n    parsedTasks[category].splice(\r\n      parsedTasks[category].indexOf(originalTextContent),\r\n      1,\r\n      blurEvent.target.textContent\r\n    )\r\n    localStorage.setItem('tasks', JSON.stringify(parsedTasks))\r\n    e.target.setAttribute('contenteditable', 'false')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/makeEditable.js?");

/***/ }),

/***/ "./src/domAndEvents/utilizeEnter.js":
/*!******************************************!*\
  !*** ./src/domAndEvents/utilizeEnter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ utilizeEnter)\n/* harmony export */ });\n/* harmony import */ var _inputListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputListener */ \"./src/domAndEvents/inputListener.js\");\n/* eslint-disable no-undef */\r\n\r\n\r\nfunction makeEnterSubmit(keydownEvent) {\r\n  if (keydownEvent.key === 'Enter') {\r\n    (0,_inputListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keydownEvent)\r\n  }\r\n}\r\nfunction utilizeEnter() {\r\n  const inputs = document.querySelectorAll('input')\r\n  inputs.forEach((input) => {\r\n    input.addEventListener('focus', (e) => {\r\n      if (e.target === document.querySelector('#search')) return\r\n      input.addEventListener('keydown', makeEnterSubmit)\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/domAndEvents/utilizeEnter.js?");

/***/ }),

/***/ "./src/generalFunctions/createLi.js":
/*!******************************************!*\
  !*** ./src/generalFunctions/createLi.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLiElement)\n/* harmony export */ });\nfunction createLiElement(text, classes = []) {\r\n  const element = document.createElement('li')\r\n  element.append(text)\r\n  element.classList = classes.join(' ')\r\n  element.setAttribute('draggable', 'true')\r\n  return element\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/generalFunctions/createLi.js?");

/***/ }),

/***/ "./src/generalFunctions/getCategory.js":
/*!*********************************************!*\
  !*** ./src/generalFunctions/getCategory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCategory)\n/* harmony export */ });\nfunction getCategory(e) {\r\n  const section = e.target.closest('section')\r\n  // find out what category we're in:\r\n  return section.id.split('-section')[0]\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/generalFunctions/getCategory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scss/styles.scss */ \"./src/Scss/styles.scss\");\n/* harmony import */ var _localStorage_paintDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage/paintDom.js */ \"./src/localStorage/paintDom.js\");\n/* harmony import */ var _domAndEvents_addListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domAndEvents/addListeners */ \"./src/domAndEvents/addListeners.js\");\n/* harmony import */ var _domAndEvents_inputListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domAndEvents/inputListener.js */ \"./src/domAndEvents/inputListener.js\");\n/* harmony import */ var _domAndEvents_globalSearch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domAndEvents/globalSearch.js */ \"./src/domAndEvents/globalSearch.js\");\n/* harmony import */ var _domAndEvents_dndFunction1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domAndEvents/dndFunction1 */ \"./src/domAndEvents/dndFunction1.js\");\n/* harmony import */ var _domAndEvents_colorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domAndEvents/colorPicker */ \"./src/domAndEvents/colorPicker.js\");\n/* harmony import */ var _domAndEvents_utilizeEnter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domAndEvents/utilizeEnter */ \"./src/domAndEvents/utilizeEnter.js\");\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable no-console */\r\n/* eslint-disable no-alert */\r\n/* eslint-disable dot-notation */\r\n/* eslint-disable eqeqeq */\r\n/* eslint-disable consistent-return */\r\n/* eslint-disable no-restricted-globals */\r\n/* eslint-disable no-throw-literal */\r\n/* eslint-disable comma-dangle */\r\n/* eslint-disable object-shorthand */\r\n/* eslint-disable no-else-return */\r\n/* eslint-disable prefer-arrow-callback */\r\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable default-case */\r\n/* eslint-disable import/first */\r\n/* eslint-disable max-len */\r\n/* eslint-disable import/newline-after-import */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable function-paren-newline */\r\n/* eslint-disable implicit-arrow-linebreak */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable guard-for-in */\r\n/* eslint-disable no-undef */\r\n // makes errors in orig but not in dist\r\nconst uls = document.querySelectorAll('ul')\r\nconst parsedTasks = JSON.parse(localStorage.getItem('tasks'))\r\n//  --- -> Local Storage <- --- \\\\ Start\r\n;\r\n(0,_localStorage_paintDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parsedTasks)\r\n//  --- -> DOM Manipulation & Event Handling <- --- \\\\ Start\r\n;\r\nconst liS = document.querySelectorAll('li')\r\nliS.forEach((li) => {\r\n  ;(0,_domAndEvents_addListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(li) // adds all sort of events\r\n})\r\n;\r\nconst buttons = document.querySelectorAll('button')\r\nbuttons.forEach((button) => button.addEventListener('click', _domAndEvents_inputListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))\r\n//  --- -> Search <- --- \\\\ Start\r\n;\r\ndocument.querySelector('#search').addEventListener('input', _domAndEvents_globalSearch_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n//  --- -> D&D <- --- \\\\ Start\r\nliS.forEach((li) => {\r\n  li.addEventListener('dragstart', () => {\r\n    li.classList.add('dragging')\r\n  })\r\n})\r\n// I can use dragging here instead\r\nliS.forEach((li) => {\r\n  li.addEventListener('dragend', () => {\r\n    li.classList.remove('dragging')\r\n  })\r\n})\r\n;\r\n(0,_domAndEvents_dndFunction1__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n//  --- -> Color Pallete <- --- \\\\ Start\r\n;\r\n(0,_domAndEvents_colorPicker__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n//  --- -> Enter Functionality <- --- \\\\ Start\r\n;\r\n(0,_domAndEvents_utilizeEnter__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n//  --- -> Bold & Underline <- --- \\\\ Start // Child\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\n// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE// CONTINUE HERE\r\nconst boldIcons = document.querySelectorAll('.bold')\r\nboldIcons.forEach((icon) => {\r\n  icon.addEventListener('click', _domAndEvents_inputListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n})\r\n\r\nconst underlinedIcons = document.querySelectorAll('.underline')\r\nunderlinedIcons.forEach((icon) => {\r\n  icon.addEventListener('click', _domAndEvents_inputListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n})\r\n\r\n//  --- -> Bold & Underline <- --- \\\\ End // Child\r\n\r\n//  --- -> DOM Manipulation & Event Handling <- --- \\\\ End // Father/Folder\r\n\r\n// --------------- -><- --------------- \\\\ // --------------- -><- --------------- \\\\\r\n\r\n//  --- -> Network <- --- \\\\ Start // Father/Folder\r\n\r\n//  --- -> createLoader <- --- \\\\ Start // Child\r\n\r\nfunction createLoader() {\r\n  const container = document.querySelector('#container')\r\n  const loader = document.createElement('img')\r\n  loader.className = 'loader'\r\n  loader.src = '../gifs/loader.gif'\r\n  loader.alt = 'image of loader'\r\n  document.body.insertBefore(loader, container)\r\n  return loader\r\n}\r\n\r\n//  --- -> Create Loader <- --- \\\\ End // Child\r\n\r\ndocument.querySelector('#load-btn').addEventListener('click', loadFromApi)\r\ndocument.querySelector('#save-btn').addEventListener('click', saveToApi)\r\n\r\n//  --- -> Load From Api <- --- \\\\ Start // Child\r\n\r\nasync function loadFromApi() {\r\n  try {\r\n    const loader = createLoader()\r\n    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'\r\n    const response = await fetch(url, {\r\n      method: 'Get',\r\n      headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    })\r\n    // handle errors:\r\n    if (!response.ok) {\r\n      alert(response.status)\r\n      throw `HTTP Error ${response.status}`\r\n    }\r\n    const data = await response.json()\r\n    if (localStorage.tasks === data.tasks) {\r\n      return loader.remove()\r\n    } else {\r\n      console.log(localStorage)\r\n      localStorage.setItem('tasks', JSON.stringify(data.tasks))\r\n    }\r\n    loader.remove()\r\n    location.reload()\r\n  } catch (e) {\r\n    console.log(e)\r\n  }\r\n}\r\n\r\n//  --- -> Load From Api <- --- \\\\ End // Child\r\n\r\n//  --- -> Save To Api <- --- \\\\ Start // Child\r\n\r\nasync function saveToApi() {\r\n  try {\r\n    const { tasks } = localStorage\r\n    const loader = createLoader()\r\n    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'\r\n    const response = await fetch(url, {\r\n      method: 'PUT',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ tasks: JSON.parse(tasks) }),\r\n    })\r\n    if (!response.ok) {\r\n      alert(response.status)\r\n      throw `HTTP ERROR ${response.status}`\r\n    }\r\n    loader.remove()\r\n  } catch (e) {\r\n    console.log(e)\r\n  }\r\n}\r\n\r\n//  --- -> Save To Api <- --- \\\\ End // Child\r\n\r\n//  --- -> Network <- --- \\\\ End // Father/Folder\r\n\n\n//# sourceURL=webpack://final/./src/index.js?");

/***/ }),

/***/ "./src/localStorage/paintDom.js":
/*!**************************************!*\
  !*** ./src/localStorage/paintDom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ paintDomFromLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions_createLi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalFunctions/createLi */ \"./src/generalFunctions/createLi.js\");\n/* eslint-disable eol-last */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable guard-for-in */\r\n\r\n\r\nif (!localStorage.tasks) {\r\n  // for first opening of app\r\n  localStorage.setItem('tasks', '{\"todo\": [],\"in-progress\": [],\"done\": []}') // makes sure there is always a tasks key in local storage\r\n}\r\n\r\nconst uls = document.querySelectorAll('ul')\r\n\r\nfunction paintDomFromLocalStorage(dataObject) {\r\n  const neaterUlNames = [...uls].map((ul) => ul.className.split('-tasks')[0])\r\n  // this leaves nicer names to work with\r\n  for (const key in dataObject) {\r\n    for (let i = 0; i < neaterUlNames.length; i++) {\r\n      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {\r\n        // find the matching ul to the mathching key (todo & to-do)\r\n        for (let j = 0; j < dataObject[key].length; j++) {\r\n          // iterate over the property in\r\n          // the parsed version of the local storage and put it on the DOM\r\n          const newLi = (0,_generalFunctions_createLi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataObject[key][j], ['task'])\r\n          uls[i].append(newLi)\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/localStorage/paintDom.js?");

/***/ }),

/***/ "./src/localStorage/setLocalStorage.js":
/*!*********************************************!*\
  !*** ./src/localStorage/setLocalStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateParsedTasksAndSetLocalStorage)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-loop-func */\r\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable no-undef */\r\n\r\nconst uls = document.querySelectorAll('ul') // later get rid of this line\r\n\r\nconst parsedTasks = JSON.parse(localStorage.getItem('tasks'))\r\n\r\nfunction updateParsedTasksAndSetLocalStorage() {\r\n  const arrayOfUls = [...uls]\r\n  for (let i = 0; i < arrayOfUls.length; i++) {\r\n    const category = arrayOfUls[i].classList[0].split('-tasks')[0]\r\n    for (const key in parsedTasks) {\r\n      if (key.split('-').join('') === category.split('-').join('')) {\r\n        const arrayOfLis = [...arrayOfUls[i].querySelectorAll('li')]\r\n        parsedTasks[key] = []\r\n        arrayOfLis.forEach((li) => {\r\n          parsedTasks[key].push(li.textContent)\r\n        })\r\n      }\r\n    }\r\n    localStorage.setItem('tasks', JSON.stringify(parsedTasks))\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final/./src/localStorage/setLocalStorage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scss/styles.scss":
/*!******************************!*\
  !*** ./src/Scss/styles.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  display: flex;\\n  flex-direction: column;\\n  background: linear-gradient(#89f1ff, #45a4cf); }\\n\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n#container {\\n  margin: 5px;\\n  display: flex; }\\n\\n.hidden {\\n  display: none; }\\n\\n.list-item {\\n  display: list-item; }\\n\\n#footer {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-direction: column; }\\n\\n.api-button {\\n  border-top: 3px;\\n  border-style: groove;\\n  border-radius: 10px;\\n  background-color: darkseagreen;\\n  color: blueviolet; }\\n\\n.loader {\\n  margin: 0 auto;\\n  width: 60%; }\\n\\nsection {\\n  margin: 0 auto;\\n  border-style: solid;\\n  border: #030101;\\n  border: 20px;\\n  border-radius: 25px;\\n  height: 100%;\\n  width: 33%; }\\n\\n.ul-tasks {\\n  border-style: solid;\\n  border-color: #060f14;\\n  overflow: auto;\\n  min-height: 10vh;\\n  max-height: 33vh;\\n  padding: 0;\\n  list-style-type: none; }\\n\\nh2 {\\n  display: flex;\\n  justify-content: center;\\n  text-decoration: underline; }\\n\\n.task {\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n  list-style: none;\\n  font-size: 130%;\\n  border-style: solid;\\n  border-color: #609bbd;\\n  margin-right: 0px;\\n  margin-top: 8%;\\n  padding: 3%; }\\n\\n.dragging {\\n  opacity: 0.5; }\\n\\ninput {\\n  width: 70%; }\\n\\n.bottom {\\n  display: flex;\\n  justify-content: center; }\\n\\n.task:hover {\\n  opacity: 0.5;\\n  background-color: yellow; }\\n\\n.toolbar {\\n  padding: 5%;\\n  margin: 2px;\\n  display: flex;\\n  justify-content: space-around; }\\n\\n.trash-container {\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.trash {\\n  font-size: 500%; }\\n\\n.delete-text {\\n  font-size: 130%;\\n  text-decoration: underline; }\\n\\n#picker {\\n  display: none;\\n  justify-content: center; }\\n\\n.bold-font {\\n  font-weight: bold; }\\n\\n.underlined {\\n  text-decoration: underline; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://final/./src/Scss/styles.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable function-paren-newline */\r\n/* eslint-disable implicit-arrow-linebreak */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable guard-for-in */\r\n/* eslint-disable no-undef */\r\n// import './Scss/styles.scss' // makes errors in orig but not in dist\r\nconst scss = __webpack_require__(/*! ./Scss/styles.scss */ \"./src/Scss/styles.scss\")\r\n\r\n//  --- -> Local Storage <- --- \\\\ Start // Father/Folder\r\n\r\nconst uls = document.querySelectorAll('ul')\r\n\r\nif (!localStorage.tasks) {\r\n  // for first opening of app\r\n  localStorage.setItem('tasks', '{\"todo\": [],\"in-progress\": [],\"done\": []}') // makes sure there is always a tasks key in local storage\r\n}\r\n\r\nconst parsedTasks = JSON.parse(localStorage.getItem('tasks'))\r\n\r\nfunction paintDomFromLocalStorage(dataObject) {\r\n  const neaterUlNames = [...uls].map((ul) => ul.className.split('-tasks')[0])\r\n  // this leaves nicer names to work with\r\n  for (const key in dataObject) {\r\n    for (let i = 0; i < neaterUlNames.length; i++) {\r\n      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {\r\n        // find the matching ul to the mathching key (todo & to-do)\r\n        for (let j = 0; j < dataObject[key].length; j++) {\r\n          // iterate over the property in\r\n          // the parsed version of the local storage and put it on the DOM\r\n          const newLi = createLiElement(dataObject[key][j], ['task'])\r\n          uls[i].append(newLi)\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\npaintDomFromLocalStorage(parsedTasks)\r\n\r\nfunction updateParsedTasksAndSetLocalStorage() {\r\n  const arrayOfUls = [...uls]\r\n  for (let i = 0; i < arrayOfUls.length; i++) {\r\n    const category = arrayOfUls[i].classList[0].split('-tasks')[0]\r\n    for (const key in parsedTasks) {\r\n      if (key.split('-').join('') === category.split('-').join('')) {\r\n        const arrayOfLis = [...arrayOfUls[i].querySelectorAll('li')]\r\n        parsedTasks[key] = []\r\n        arrayOfLis.forEach((li) => {\r\n          parsedTasks[key].push(li.textContent)\r\n        })\r\n      }\r\n    }\r\n    localStorage.setItem('tasks', JSON.stringify(parsedTasks))\r\n  }\r\n}\r\n\r\n//  --- -> Local Storage <- --- \\\\ End // Father/Folder\r\n\r\n// --------------- -><- --------------- \\\\ // --------------- -><- --------------- \\\\\r\n\r\n//  --- -> DOM Manipulation & Event Handling <- --- \\\\ Start // Father/Folder\r\n\r\nfunction addListenersToLi(element) {\r\n  element.addEventListener('mouseenter', altHandlerFunction) // makes sure you don't have to refresh\r\n  element.addEventListener('dblclick', makeEditable)\r\n  element.addEventListener('dragstart', addDragging)\r\n  element.addEventListener('dragend', removeDragging)\r\n}\r\n\r\nconst liS = document.querySelectorAll('li')\r\nliS.forEach((li) => {\r\n  addListenersToLi(li) // adds all sort of events\r\n})\r\n\r\n//  --- -> Alt functionality <- --- \\\\ Start // Child\r\n\r\nfunction altHandlerFunction(e) {\r\n  // make sure this only runs while cursor is on <li>\r\n  const liElements = document.querySelectorAll('li') // a different var than above var (for the initial use of the app, the app doesn't know liS until the first refresh)\r\n  liElements.forEach((li) =>\r\n    li.addEventListener('mouseleave', () => {\r\n      document.removeEventListener('keydown', addToObject)\r\n    })\r\n  )\r\n  const numberOptions = ['1', '2', '3']\r\n\r\n  function addToObject(altClickEvent) {\r\n    const keyPressedObject = {}\r\n    keyPressedObject[altClickEvent.key] = true\r\n    document.addEventListener('keydown', function second(secondClickEvent) {\r\n      if (\r\n        keyPressedObject['Alt'] &&\r\n        numberOptions.includes(secondClickEvent.key)\r\n      ) {\r\n        switch (secondClickEvent.key) {\r\n          case '1':\r\n            uls[0].prepend(e.target)\r\n            break\r\n          case '2':\r\n            uls[1].prepend(e.target)\r\n            break\r\n          case '3':\r\n            uls[2].prepend(e.target)\r\n            break\r\n        }\r\n        updateParsedTasksAndSetLocalStorage()\r\n      }\r\n    })\r\n    document.addEventListener('keyup', (keyboardEvent) => {\r\n      keyPressedObject[keyboardEvent.key] = false\r\n    }) // makes sure BOTH keys are simultaneously pressed.\r\n  }\r\n\r\n  if (e.type === 'mouseenter') {\r\n    document.addEventListener('keydown', addToObject)\r\n  }\r\n}\r\n\r\n//  --- -> Alt functionality <- --- \\\\ End // Child\r\n\r\n//  --- -> Add Task <- --- \\\\ Start // Child\r\n\r\nconst buttons = document.querySelectorAll('button')\r\nbuttons.forEach((button) => button.addEventListener('click', inputListener))\r\n\r\nfunction getCategory(e) {\r\n  const section = e.target.closest('section')\r\n  // find out what category we're in:\r\n  return section.id.split('-section')[0]\r\n}\r\n\r\nfunction inputListener(e) {\r\n  const searchBar = document.querySelector('#search')\r\n  const clsLst = [...e.target.classList]\r\n  if (\r\n    e.type !== 'keydown' &&\r\n    !clsLst.includes('bold') &&\r\n    !clsLst.includes('underline')\r\n  ) {\r\n    if (!e.target.closest('button').id.includes('submit')) return\r\n  }\r\n  const category = getCategory(e)\r\n  const input = document.querySelector(`#add-${category}-task`)\r\n  // check to see if box contains real text:\r\n  if (input.value.replace(/\\s/g, '').length < 1) {\r\n    alert('You forgot to fill out the box')\r\n    return\r\n  }\r\n  const newLiElement = createLiElement(input.value, ['task'])\r\n  if (!input.value.includes(searchBar.value)) {\r\n    newLiElement.className = 'hidden'\r\n  } else {\r\n    newLiElement.className = 'list-item task'\r\n  }\r\n  addListenersToLi(newLiElement)\r\n  if ([...e.target.classList].includes('bold')) {\r\n    newLiElement.classList.add('bold-font') // make bold\r\n  }\r\n  if ([...e.target.classList].includes('underline')) {\r\n    newLiElement.classList.add('underlined') // make bold\r\n  }\r\n  document.querySelector(`.${category}-tasks`).prepend(newLiElement)\r\n  updateParsedTasksAndSetLocalStorage()\r\n  input.value = ''\r\n}\r\n\r\n//  --- -> Add Task <- --- \\\\ End ? // Child\r\n\r\n//  --- -> Make Editable <- --- \\\\ Start // Child\r\n\r\nfunction createLiElement(text, classes = []) {\r\n  const element = document.createElement('li')\r\n  element.append(text)\r\n  element.classList = classes.join(' ')\r\n  element.setAttribute('draggable', 'true')\r\n  return element\r\n}\r\n\r\nfunction makeEditable(e) {\r\n  e.target.addEventListener('blur', setEditedText)\r\n  e.target.setAttribute('contenteditable', 'true')\r\n  e.target.focus() // otherwise you have to reclick\r\n  const originalTextContent = e.target.textContent\r\n\r\n  function setEditedText(blurEvent) {\r\n    let category = getCategory(blurEvent)\r\n    if (category === 'to-do') category = 'todo'\r\n    parsedTasks[category].splice(\r\n      parsedTasks[category].indexOf(originalTextContent),\r\n      1,\r\n      blurEvent.target.textContent\r\n    )\r\n    localStorage.setItem('tasks', JSON.stringify(parsedTasks))\r\n    e.target.setAttribute('contenteditable', 'false')\r\n  }\r\n}\r\n\r\n//  --- -> Make Editable <- --- \\\\ End // Child\r\n\r\n//  --- -> Search <- --- \\\\ Start\r\n\r\ndocument.querySelector('#search').addEventListener('input', globalSearch)\r\n\r\nfunction globalSearch(e) {\r\n  const liList = document.querySelectorAll('li')\r\n  liList.forEach((li) => {\r\n    if (\r\n      !li.textContent\r\n        .toLocaleLowerCase()\r\n        .includes(e.target.value.toLocaleLowerCase())\r\n    ) {\r\n      li.className = 'hidden'\r\n    } else {\r\n      li.className = 'task list-item'\r\n    }\r\n  })\r\n}\r\n\r\n//  --- -> Search <- --- \\\\ End // Child\r\n\r\n//  --- -> D&D <- --- \\\\ Start\r\n\r\nliS.forEach((li) => {\r\n  li.addEventListener('dragstart', () => {\r\n    li.classList.add('dragging')\r\n  })\r\n})\r\n\r\nliS.forEach((li) => {\r\n  li.addEventListener('dragend', () => {\r\n    li.classList.remove('dragging')\r\n  })\r\n})\r\n\r\nuls.forEach((ul) => {\r\n  // notice that you need 'uls' here. get it if it's not in the module with it defined\r\n  ul.addEventListener('dragover', function dragOver(e) {\r\n    e.preventDefault()\r\n    const immediatelyBelowElement = getDragAfterElement(ul, e.clientY) // Gets the element you're immediately above\r\n    const draggable = document.querySelector('.dragging') // only one el with class 'dragging' at a time\r\n    if (immediatelyBelowElement == 'null') {\r\n      ul.append(immediatelyBelowElement)\r\n    } else if (ul.className === 'trash-container') {\r\n      if (draggable) draggable.remove()\r\n    } else {\r\n      ul.insertBefore(draggable, immediatelyBelowElement)\r\n    }\r\n    updateParsedTasksAndSetLocalStorage()\r\n  })\r\n})\r\n\r\nfunction getDragAfterElement(ul, yCoordinate) {\r\n  // Y axis of where your mouse is\r\n  const draggableElements = [...ul.querySelectorAll('.task:not(.dragging)')] // get every draggable but the one your'e currently dragging\r\n  return draggableElements.reduce(\r\n    (closestElement, task) => {\r\n      const box = task.getBoundingClientRect() // rectangle of <li>\r\n      const offset = yCoordinate - box.top - box.height / 2 // positive if above the half line of box, negative otherwise\r\n      if (offset < 0 && offset > closestElement.offset) {\r\n        // takes the element with the losest POSITIVE offset\r\n        return { offset: offset, element: task }\r\n      } else {\r\n        return closestElement\r\n      }\r\n    },\r\n    { offset: -Infinity } // start at -Infinty so any elements offset will be above\r\n  ).element // returning the element itself\r\n}\r\n\r\nfunction addDragging(e) {\r\n  e.target.classList.add('dragging')\r\n}\r\n\r\nfunction removeDragging(e) {\r\n  e.target.classList.remove('dragging')\r\n}\r\n\r\n//  --- -> D&D <- --- \\\\ End\r\n\r\n//  --- -> Color Pallete <- --- \\\\ Start // Child\r\n\r\nlet sectionToPaint\r\nconst colorPalettes = document.querySelectorAll('.color')\r\ncolorPalettes.forEach((cp) => {\r\n  cp.addEventListener('click', (e) => {\r\n    const colorPicker = document.querySelector('#picker')\r\n    colorPicker.style = 'display: flex;'\r\n    sectionToPaint = e.target.closest('section')\r\n    setTimeout(() => {\r\n      colorPicker.style = 'display: none;'\r\n    }, 5000)\r\n  })\r\n})\r\n\r\nconst colorPicker = new iro.ColorPicker('#picker', {\r\n  width: 90,\r\n})\r\ncolorPicker.on('color:change', (color) => {\r\n  sectionToPaint.style = `background-color: ${color.hexString}`\r\n})\r\n\r\n//  --- -> Color Pallete <- --- \\\\ End // Child\r\n\r\n//  --- -> Enter Functionality <- --- \\\\ Start // Child\r\n\r\nconst inputs = document.querySelectorAll('input')\r\ninputs.forEach((input) => {\r\n  input.addEventListener('focus', (e) => {\r\n    if (e.target === document.querySelector('#search')) return\r\n    input.addEventListener('keydown', makeEnterSubmit)\r\n  })\r\n})\r\n\r\nfunction makeEnterSubmit(keydownEvent) {\r\n  if (keydownEvent.key === 'Enter') {\r\n    inputListener(keydownEvent)\r\n  }\r\n}\r\n\r\n//  --- -> Enter Functionality <- --- \\\\ End // Child\r\n\r\n//  --- -> Bold & Underline <- --- \\\\ Start // Child\r\n\r\nconst boldIcons = document.querySelectorAll('.bold')\r\nboldIcons.forEach((icon) => {\r\n  icon.addEventListener('click', inputListener)\r\n})\r\n\r\nconst underlinedIcons = document.querySelectorAll('.underline')\r\nunderlinedIcons.forEach((icon) => {\r\n  icon.addEventListener('click', inputListener)\r\n})\r\n\r\n//  --- -> Bold & Underline <- --- \\\\ End // Child\r\n\r\n//  --- -> DOM Manipulation & Event Handling <- --- \\\\ End // Father/Folder\r\n\r\n// --------------- -><- --------------- \\\\ // --------------- -><- --------------- \\\\\r\n\r\n//  --- -> Network <- --- \\\\ Start // Father/Folder\r\n\r\n//  --- -> createLoader <- --- \\\\ Start // Child\r\n\r\nfunction createLoader() {\r\n  const container = document.querySelector('#container')\r\n  const loader = document.createElement('img')\r\n  loader.className = 'loader'\r\n  loader.src = '../gifs/loader.gif'\r\n  loader.alt = 'image of loader'\r\n  document.body.insertBefore(loader, container)\r\n  return loader\r\n}\r\n\r\n//  --- -> Create Loader <- --- \\\\ End // Child\r\n\r\ndocument.querySelector('#load-btn').addEventListener('click', loadFromApi)\r\ndocument.querySelector('#save-btn').addEventListener('click', saveToApi)\r\n\r\n//  --- -> Load From Api <- --- \\\\ Start // Child\r\n\r\nasync function loadFromApi() {\r\n  try {\r\n    const loader = createLoader()\r\n    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'\r\n    const response = await fetch(url, {\r\n      method: 'Get',\r\n      headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    })\r\n    // handle errors:\r\n    if (!response.ok) {\r\n      alert(response.status)\r\n      throw `HTTP Error ${response.status}`\r\n    }\r\n    const data = await response.json()\r\n    if (localStorage.tasks === data.tasks) {\r\n      return loader.remove()\r\n    } else {\r\n      console.log(localStorage)\r\n      localStorage.setItem('tasks', JSON.stringify(data.tasks))\r\n    }\r\n    loader.remove()\r\n    location.reload()\r\n  } catch (e) {\r\n    console.log(e)\r\n  }\r\n}\r\n\r\n//  --- -> Load From Api <- --- \\\\ End // Child\r\n\r\n//  --- -> Save To Api <- --- \\\\ Start // Child\r\n\r\nasync function saveToApi() {\r\n  try {\r\n    const { tasks } = localStorage\r\n    const loader = createLoader()\r\n    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'\r\n    const response = await fetch(url, {\r\n      method: 'PUT',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ tasks: JSON.parse(tasks) }),\r\n    })\r\n    if (!response.ok) {\r\n      alert(response.status)\r\n      throw `HTTP ERROR ${response.status}`\r\n    }\r\n    loader.remove()\r\n  } catch (e) {\r\n    console.log(e)\r\n  }\r\n}\r\n\r\n//  --- -> Save To Api <- --- \\\\ End // Child\r\n\r\n//  --- -> Network <- --- \\\\ End // Father/Folder\r\n\n\n//# sourceURL=webpack://final/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
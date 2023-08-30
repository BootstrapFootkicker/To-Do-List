/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 12%;\n\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: #f2f2f2;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-content: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    margin-left: 0;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 12%;\n\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: #f2f2f2;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-content: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    margin-left: 0;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checkMarkHover.svg":
/*!********************************!*\
  !*** ./src/checkMarkHover.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9255a9fa4b52f69c4d60.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkMarkHover_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkMarkHover.svg */ "./src/checkMarkHover.svg");





//todo Add way to delete task folders
//todo work on css
//todo Fix bug where extra Addtaskfolder button is created before you add a task folder


function localStorageRefresh(item) {
    localStorage.setItem(item.getName(), JSON.stringify(item));
    console.log("refreshed")

}

function UniqueIdToLocalStore(uniqueId) {
    localStorage.setItem('uniqueId', JSON.stringify(uniqueId));
}

document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    //are we in dropdown? ignore click if so
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
        return
    }

    //if we are clicking dropdown add active class
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    //closes all dropdowns that are not selected
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) {
            return
        }
        dropdown.classList.remove('active')
    })
})


//testing if browser supports local storage
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (e instanceof DOMException && // everything except Firefox
            (e.code === 22 || // Firefox
                e.code === 1014 || // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" || // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
            storage && storage.length !== 0);
    }
}


class DomController {

    clear(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }

    createAddTaskFolderButton() {
        const buttonList = document.querySelector('.button-list-content');

        let createTaskFolderButton = document.createElement('button');
        createTaskFolderButton.innerText = '+ Add Task Folder'
        createTaskFolderButton.classList.add('create-button')
        createTaskFolderButton.setAttribute('id', 'create-task-folder-button')
        buttonList.appendChild(createTaskFolderButton);

        createTaskFolderButton.addEventListener('click', () => {
            createTaskFolderButton.remove();
            buttonList.appendChild(this.createTaskFolderButtonInputPopUp());

        })
    }

    createAddTaskButton() {
        const taskDetailContainer = document.querySelector('.task-detail-container');
        let createButtonDiv = document.createElement('div'); //remove this
        let createButton = document.createElement('button');
        createButton.innerText = '+ Add Task'
        createButton.classList.add('create-button')
        createButtonDiv.classList.add('create-buttonDiv')

        createButtonDiv.appendChild(createButton)


        taskDetailContainer.appendChild(createButtonDiv);

        createButton.addEventListener('click', () => {
            this.clear(createButtonDiv);
            createButtonDiv.appendChild(this.createTaskInputPopUp());

        })

    }


    createTaskFolderButtonInputPopUp() {
        let inputDiv = document.createElement('div');
        let input = document.createElement('input');
        let addButton = document.createElement('button');
        let cancelButton = document.createElement('button');
        let buttonContainer = document.createElement('div');

        addButton.innerText = 'Add';
        cancelButton.innerText = 'Cancel'

        inputDiv.appendChild(input);
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);
        inputDiv.appendChild(buttonContainer);

        addButton.classList.add('add-button')
        cancelButton.classList.add('cancel-button')

        buttonContainer.setAttribute('id', 'Taskfolder-button-input-div-button-container')
        inputDiv.setAttribute('id', 'Taskfolder-button-input-div')

        addButton.addEventListener('click', () => {
            if (input.value === '' || MainTaskFolderContainer.taskFolderExists(input.value) === true) {

                //Todo: add error message and CSS to show error
                return
            } else {
                inputDiv.remove();
                let newTaskFolder = new TaskFolder(input.value, null);
                MainTaskFolderContainer.addTaskFolder(newTaskFolder);
                localStorageRefresh(MainTaskFolderContainer);
                this.createTaskFolderButton(newTaskFolder);
                currentTaskFolder = newTaskFolder.getName();
                let taskDetailContainer = document.querySelector('.task-detail-container');
                this.clear(taskDetailContainer);
                this.createAddTaskButton()

                this.createAddTaskFolderButton();

            }

        })

        cancelButton.addEventListener('click', () => {
            let inputDivSelector = document.querySelector('#Taskfolder-button-input-div');
            inputDivSelector.remove();
            this.createAddTaskFolderButton();
        })
        return inputDiv

    }

    createTaskInputPopUp() {


        let popUpContainer = document.createElement('div');
        let taskDateContainer = document.createElement('div');
        let taskInput = document.createElement('input');
        let dateInput = document.createElement('input')
        let buttonContainer = document.createElement('div')
        let addButton = document.createElement('button')
        let cancelButton = document.createElement('button');

        dateInput.setAttribute('id', 'date-input')
        taskInput.setAttribute('id', 'task-input')

        dateInput.type = 'date';
        addButton.innerText = 'Add';
        cancelButton.innerText = 'Cancel'

        addButton.classList.add('add-button')
        cancelButton.classList.add('cancel-button')


        popUpContainer.classList.add('pop-up-container');
        popUpContainer.setAttribute('id', 'pop-up-container');


        taskDateContainer.appendChild(taskInput);
        taskDateContainer.appendChild(dateInput)

        taskDateContainer.setAttribute('id', 'task-date-container')

        buttonContainer.setAttribute('id', 'popup-button-container')
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);

        popUpContainer.appendChild(taskDateContainer)
        popUpContainer.appendChild(buttonContainer)


        addButton.addEventListener('click', () => {
            let input = document.querySelector('#task-input');
            let dateInput = document.querySelector('#date-input');


            if (input.value === '' && dateInput.value === '') {
                dateInput.setCustomValidity('Please enter a date');
                input.setCustomValidity('Please enter a task');
                return;
            } else if (dateInput.value === '') {
                dateInput.setCustomValidity('Please enter a date');
                return
            } else if (input.value === '') {
                input.setCustomValidity('Please enter a task');
                return;
            } else {

                let newTask = new Task(uniqueId, taskInput.value, dateInput.value);
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).addTask(newTask);
                let createButtonDiv = document.querySelector('.create-buttonDiv');
                createButtonDiv.remove();
                this.addTaskToDom(taskInput.value, dateInput.value);
                this.createAddTaskButton();
                localStorageRefresh(MainTaskFolderContainer);


            }
        })

        cancelButton.addEventListener("click", () => {
            let createButtonDiv = document.querySelector('.create-buttonDiv');
            createButtonDiv.remove();
            this.createAddTaskButton()
        })
        return popUpContainer;
    }


    addTaskToDom(taskText, taskDateInfo, taskID = uniqueId) {

        let taskDetailContainer = document.querySelector('.task-detail-container');
        let task = document.createElement('div');
        let checkBoxContainer = document.createElement('div');
        let checkBox = document.createElement('input');
        let taskInfo = document.createElement('div');
        let taskDate = document.createElement('input');
        let taskInfoContainer = document.createElement('div');
        let taskDateContainer = document.createElement('div');


        const editImg = document.createElement('img');
        const editImgHover = document.createElement('img');
        const checkMark = document.createElement('img');
        const checkMarkHover = document.createElement('img');

        taskDateContainer.classList.add('task-date-container')

        checkMarkHover.src = "./9255a9fa4b52f69c4d60.svg"
        checkMark.src = "./921761edc49b6165eeb8.svg"
        editImgHover.src = "./4e81888b154c1edd1157.svg"
        editImg.src = "./3ea4cf483224d228ffe4.svg";

        checkMark.classList.add('edit-img');
        editImg.classList.add('edit-img');


        if (taskID !== uniqueId) {
            task.setAttribute('id', taskID)
        } else {
            task.setAttribute('id', uniqueId)
            uniqueId += 1;
            UniqueIdToLocalStore(uniqueId);
        }


        taskDate.type = 'date';
        taskDate.value = taskDateInfo;
        taskDate.setAttribute('id', taskID + 'task-date')
        taskDate.disabled = true;
        task.classList.add('task')
        checkBoxContainer.classList.add('checkbox-container')
        taskInfo.classList.add('task-info')
        taskInfo.innerText = taskText;
        taskInfoContainer.classList.add('task-info-container')


        checkBox.type = 'checkbox'


        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).removeTask(task.id, MainTaskFolderContainer.getTaskFolder(currentTaskFolder));
                this.removeTaskFromDom(task.id)
                localStorageRefresh(MainTaskFolderContainer);


            }


        })

        editImg.addEventListener('mouseover', () => {
            editImg.style.cursor = 'finger';
            editImg.src = editImgHover.src;

        })
        editImg.addEventListener('mouseout', () => {
            editImg.src = "./3ea4cf483224d228ffe4.svg";
        })

        editImg.addEventListener('click', () => {
            taskDate.disabled = false;
            taskInfo.contentEditable = true;

            //replaces child, refer to this line if bug arises later
            checkBoxContainer.replaceChild(checkMark, editImg)


        })


        checkMark.addEventListener('mouseover', () => {
            checkMark.style.cursor = 'finger';
            checkMark.src = checkMarkHover.src;

        })

        checkMark.addEventListener('mouseout', () => {
            checkBox.style.cursor = 'finger';
            checkMark.src = './921761edc49b6165eeb8.svg';

        })


        checkMark.addEventListener('click', () => {
            taskDate.disabled = true;
            taskInfo.contentEditable = false;
            editImg.src = "./3ea4cf483224d228ffe4.svg";
            MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDesciption(taskInfo.innerText);
            MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDueDate(taskDate.value);


            localStorageRefresh(MainTaskFolderContainer);
            //replaces child, refer to this line if bug arises later
            checkBoxContainer.replaceChild(editImg, checkMark);
        })


        checkBoxContainer.appendChild(checkBox);

        checkBoxContainer.appendChild(editImg);

        task.appendChild(checkBoxContainer);
        taskInfoContainer.appendChild(taskInfo);
        task.appendChild(taskInfoContainer)
        taskDateContainer.appendChild(taskDate)
        task.appendChild(taskDateContainer);


        taskDetailContainer.setAttribute('id', taskInfo + 'div')

        taskDetailContainer.appendChild(task);


    }


    removeTaskFromDom(taskId) {
        let task = document.getElementById(taskId);
        console.log(taskId + ' removed from dom')
        task.remove();


    }

    PopulateFolderButtonsFromLocalStorage() {
        let taskFolderList = MainTaskFolderContainer.getTaskFolderList();
        for (let i = 1; i < taskFolderList.length; i++) {
            if (document.querySelector('#' + CSS.escape(taskFolderList[i].getName())) === null) {
                this.createTaskFolderButton(taskFolderList[i])
            } else {
                console.log(`${taskFolderList[i].getName()}button already exists`)
            }
        }
    }

    populateDomFromLocalStorage(key) {
        let tasklist = []
        let taskIDS = []
        let taskFolderIndex = 0
        if (localStorage.getItem("TaskFolderContainer") !== null) {

            console.log("Local Storage Populated")
            let tempTaskFolderContainer = JSON.parse(localStorage.getItem('TaskFolderContainer'))._taskFolderList;
            MainTaskFolderContainer.setTaskFolderList(tempTaskFolderContainer);
            MainTaskFolderContainer.setTaskFolderClass();
            console.log(MainTaskFolderContainer.getTaskFolderList())

            for (let i = 0; i < MainTaskFolderContainer.getTaskFolderList().length; i++) {
                MainTaskFolderContainer.getTaskFolderList()[i].setTaskClass()
            }

            tasklist = MainTaskFolderContainer.getTaskFolder(key).getTaskList();

            taskFolderIndex = MainTaskFolderContainer.getTaskFolderIndex(key)
            taskIDS = MainTaskFolderContainer.getTaskFolderList()[taskFolderIndex].getTaskIDS()

            uniqueId = Number(localStorage.getItem('uniqueId'));

            for (let i = 0; i < tasklist.length; i++) {

                if (document.querySelector("#" + CSS.escape(taskIDS[i])) === null) {
                    console.log(tasklist[i].getName())
                    this.addTaskToDom(tasklist[i].getDescription(), tasklist[i].getDueDate(), tasklist[i].getName())
                } else {

                    console.log(`Div ${taskIDS[i]} is Already in DOM`)
                }


            }
            if (document.querySelector('.create-buttonDiv') === null) {

                this.createAddTaskButton();
            }
            this.PopulateFolderButtonsFromLocalStorage();

        } else /*else if additional folder check*/ {
            let MainTaskFolder = new TaskFolder('Main', null);
            MainTaskFolderContainer.addTaskFolder(MainTaskFolder);
            console.log("No tasks in local storage")
            //this.createAddTaskButton();

        }
        if (document.querySelector('.create-buttonDiv') === null) {
            this.createAddTaskButton();
        }
    }


    createTaskFolderButton(newTaskFolder) {
        const buttonListContent = document.querySelector('.button-list-content');
        let taskFolderButton = document.createElement('button');
        taskFolderButton.innerText = newTaskFolder.getName();
        taskFolderButton.setAttribute('id', newTaskFolder.getName());
        taskFolderButton.classList.add('taskfolder-button');


        taskFolderButton.addEventListener('click', () => {
            currentTaskFolder = newTaskFolder.getName();
            console.log(`The current taskfolder has been changed to ${currentTaskFolder}`)
            let taskDetailContainer = document.querySelector('.task-detail-container');
            this.clear(taskDetailContainer)
            this.populateDomFromLocalStorage(newTaskFolder.getName());
        })
        buttonListContent.appendChild(taskFolderButton);

    }
}


class Task {
    //let user create name so it's easy to find task fo modify
    constructor(name, description, dueDate) {
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
    }

    //Getters
    getName() {
        return this._name;
    }

    getDescription() {
        return this._description;
    }

    getDueDate() {
        return this._dueDate;
    }

    setDesciption(description) {
        this._description = description;
    }

    setDueDate(dueDate) {
        this._dueDate = dueDate;
    }

}

class TaskFolderContainer {
    constructor(name) {
        this.name = name;
        this._taskFolderList = []
    }

    //Getters
    getName() {
        return this.name;
    }

    getTaskFolderList() {
        return this._taskFolderList;
    }

    setTaskFolderList(taskFolderList) {
        this._taskFolderList = [...taskFolderList];
    }

    setTaskFolderClass() {
        //removes all values from array
        for (let i = 0; i < this._taskFolderList.length; i++) {
            this._taskFolderList[i] = new TaskFolder(this._taskFolderList[i]._name, this._taskFolderList[i]._taskList);
            console.log(this._taskFolderList[i].getName());

        }
    }

    taskFolderExists(taskFolderName) {
        for (let i = 0; i < this._taskFolderList.length; i++) {
            if (this._taskFolderList[i].getName() === taskFolderName) {
                return true;
            }
        }
        return false;
    }

    addTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            console.log("Task Folder Already Exists");
        } else {
            this._taskFolderList.push(taskFolderName);
            localStorageRefresh(MainTaskFolderContainer);
            console.log(`${taskFolderName.toString()} added to ${this.getName()} container`);
        }
    }

    removeTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    this._taskFolderList.splice(i, 1);
                    localStorageRefresh(MainTaskFolderContainer);
                    console.log(`${taskFolderName} removed from ${this.getName()} container`);
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }

    getTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    return this._taskFolderList[i];
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }

    getTaskFolderIndex(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    return i;
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }


    toString() {
        for (let i = 0; i < this._taskFolderList.length; i++) {
            console.log(this._taskFolderList[i].getName());
        }

    }


}

class TaskFolder {
    constructor(name, tasklist) {
        this._name = name;
        if (tasklist !== null) {
            this._taskList = tasklist;
        } else {
            this._taskList = []
        }
    }

    //Getters
    getName() {
        return this._name;
    }

    getTaskList() {
        return this._taskList;
    }

    setTaskList(taskList) {
        this._taskList = taskList;
    }

    toString() {
        for (let i = 0; i < this._taskList.length; i++) {
            console.log(this._taskList[i].getName());
        }

    }

    //helpers
    addTask(Task) {
        if (this.taskExists(Task.getName())) {
            console.log("Task already exists");
            return;
        } else {
            this._taskList.push(Task);
            console.log(`${Task.getName()} added to ${this.getName()} folder`)
            console.log(MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTaskList());

        }
    }


    removeTask(taskId) {

        if (this.taskExists(taskId)) {
            this._taskList.splice(this._taskList.findIndex(task => task.getName().toString() === taskId), 1);
            console.log(`${taskId} removed from ${this.getName()} folder`);
            console.log(this.getTaskList());

        } else {
            console.log("Task doesn't exist")
        }

    }

    setTaskClass() {
        for (let i = 0; i < this._taskList.length; i++) {
            this._taskList[i] = new Task(this._taskList[i]._name, this._taskList[i]._description, this._taskList[i]._dueDate);
        }
    }


    taskExists(taskId) {

        let taskFolderList = this.getTaskList();
        let doesExist;


        for (let i = 0; i < taskFolderList.length; i++) {
            if (taskId === taskFolderList[i].getName().toString()) {
                doesExist = true;
                return doesExist;
            }
        }
    }

    getTask(taskId) {
        if (this.taskExists(taskId) === true) {
            return this._taskList[this._taskList.findIndex(task => task.getName().toString() === taskId)];
        }

    }

    getTaskIDS() {
        let taskIDS = [];
        for (let i = 0; i < this._taskList.length; i++) {
            taskIDS.push(this._taskList[i].getName());
        }
        return taskIDS;
    }

}


const CREATE_TASK_BUTTON = document.querySelector('#create-task');
const mytaskbutton = document.querySelector('.taskfolder-button');
const addTaskButton = document.querySelector('#add-task');
const createButtonDiv = document.querySelector('.create-buttonDiv')
const mainFolderButton = document.querySelector('#Main-folder-button');

//Global Variables

let currentTaskFolder = 'Main';
let MainTaskFolderContainer = new TaskFolderContainer('TaskFolderContainer');


mainFolderButton.addEventListener('click', () => {
    currentTaskFolder = 'Main';
    console.log(`The current taskfolder has been changed to ${currentTaskFolder}`)
    let taskDetailContainer = document.querySelector('.task-detail-container');
    console.log(taskDetailContainer.className)
    domControl.clear(taskDetailContainer)
    domControl.populateDomFromLocalStorage('Main');
})
//Used to label tasks with unique id (both in dom and in taskFolder)
let uniqueId = 0;


let domControl = new DomController();

domControl.populateDomFromLocalStorage('Main');

domControl.createAddTaskFolderButton()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGVBQWUsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUs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QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0EsY0FB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c3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItcmlnaHQtZWxlbWVudHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyIHtcXG4gICAgbWluLXdpZHRoOiAxMiU7XFxuXFxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgc29saWQgMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG5cXG4udGFzay1kZXRhaWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg4JTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcblxcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItdG9wOiBncm9vdmUgI2IyYmViNSAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZSAjYjJiZWI1IDJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuXFxuXFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuXFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1ha2VzIHRoZSB0ZXh0IHdyYXAgKi9cXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcblxcblxcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmNyZWF0ZS1idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTMuMTI1cmVtO1xcblxcbn1cXG5cXG4jY3JlYXRlLXRhc2stZm9sZGVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1pZGRsZS1lbGVtZW50LWNvbnRhaW5lciB7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi50YXNrLXNlYXJjaCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uICsgLmRyb3Bkb3duLW1lbnUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcblxcbn1cXG5cXG4uZHJvcGRvd24uYWN0aXZlID4gLmNyZWF0ZS1idXR0b24sIC5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgLyp0b3AgcGFkZGluZyovXFxuICAgIHRvcDogY2FsYygxMDAlICsgMXJlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuXFxufVxcblxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbi1saXN0LWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qICBib3JkZXI6IG5vbmU7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcblxcbi50YXNrZm9sZGVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM3NDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdi1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdi1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrcy1jb250YWluZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wb3AtdXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0YXNrLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNwb3B1cC1idXR0b24tY29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1idXR0b24sIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY3OTQyO1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODA4MDg7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MWUzYTtcXG59XFxuXFxuXFxuLmVkaXQtaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xMjVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTs7O0FBR2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYzs7SUFFZCw2QkFBNkI7SUFDN0IsYUFBYTs7QUFFakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjs7O0FBR3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPOztJQUVQLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsa0VBQWtFO0lBQ2xFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTs7QUFFakI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixPQUFPO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzSEFBc0g7SUFDdEgsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLXJpZ2h0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcXG59XFxuXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogMTIlO1xcblxcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuXFxuLnRhc2stZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4OCU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXRvcDogZ3Jvb3ZlICNiMmJlYjUgMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiBncm9vdmUgI2IyYmViNSAycHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcblxcblxcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xcblxcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBtYWtlcyB0aGUgdGV4dCB3cmFwICovXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXG5cXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNTAlO1xcblxcbn1cXG5cXG4udGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5jcmVhdGUtYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjEyNXJlbTtcXG5cXG59XFxuXFxuI2NyZWF0ZS10YXNrLWZvbGRlci1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci1taWRkbGUtZWxlbWVudC1jb250YWluZXIge1xcblxcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG4udGFzay1zZWFyY2gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxufVxcblxcblxcbi5kcm9wZG93bi5hY3RpdmUgPiAuY3JlYXRlLWJ1dHRvbiArIC5kcm9wZG93bi1tZW51IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG5cXG59XFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uLCAuY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIC8qdG9wIHBhZGRpbmcqL1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDFyZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC43NXJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcblxcbn1cXG5cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzc3NztcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4uYnV0dG9uLWxpc3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrZm9sZGVyLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiAgYm9yZGVyOiBub25lOyovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbn1cXG5cXG5cXG4udGFza2ZvbGRlci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNzQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jdGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcG9wdXAtYnV0dG9uLWNvbnRhaW5lciB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWE0NGY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzk0MjtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwODA4O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDFlM2E7XFxufVxcblxcblxcbi5lZGl0LWltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMTI1cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2NvbXBhcmVBc2MsIGZvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHt0ZSwgdGh9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCBjaGVja01hcmtIb3ZlciBmcm9tIFwiLi9jaGVja01hcmtIb3Zlci5zdmdcIlxuXG4vL3RvZG8gQWRkIHdheSB0byBkZWxldGUgdGFzayBmb2xkZXJzXG4vL3RvZG8gd29yayBvbiBjc3Ncbi8vdG9kbyBGaXggYnVnIHdoZXJlIGV4dHJhIEFkZHRhc2tmb2xkZXIgYnV0dG9uIGlzIGNyZWF0ZWQgYmVmb3JlIHlvdSBhZGQgYSB0YXNrIGZvbGRlclxuXG5cbmZ1bmN0aW9uIGxvY2FsU3RvcmFnZVJlZnJlc2goaXRlbSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0uZ2V0TmFtZSgpLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoZWRcIilcblxufVxuXG5mdW5jdGlvbiBVbmlxdWVJZFRvTG9jYWxTdG9yZSh1bmlxdWVJZCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmlxdWVJZCcsIEpTT04uc3RyaW5naWZ5KHVuaXF1ZUlkKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cbiAgICBjb25zdCBpc0Ryb3Bkb3duQnV0dG9uID0gZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWRyb3Bkb3duLWJ1dHRvbl1cIik7XG4gICAgLy9hcmUgd2UgaW4gZHJvcGRvd24/IGlnbm9yZSBjbGljayBpZiBzb1xuICAgIGlmICghaXNEcm9wZG93bkJ1dHRvbiAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9pZiB3ZSBhcmUgY2xpY2tpbmcgZHJvcGRvd24gYWRkIGFjdGl2ZSBjbGFzc1xuICAgIGxldCBjdXJyZW50RHJvcGRvd25cbiAgICBpZiAoaXNEcm9wZG93bkJ1dHRvbikge1xuICAgICAgICBjdXJyZW50RHJvcGRvd24gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kcm9wZG93bl0nKTtcbiAgICAgICAgY3VycmVudERyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vY2xvc2VzIGFsbCBkcm9wZG93bnMgdGhhdCBhcmUgbm90IHNlbGVjdGVkXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIikuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93biA9PT0gY3VycmVudERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0pXG59KVxuXG5cbi8vdGVzdGluZyBpZiBicm93c2VyIHN1cHBvcnRzIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8IC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHwgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fCAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICBzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRG9tQ29udHJvbGxlciB7XG5cbiAgICBjbGVhcihlbGVtZW50KSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbGlzdC1jb250ZW50Jyk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5pbm5lclRleHQgPSAnKyBBZGQgVGFzayBGb2xkZXInXG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbicpXG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGUtdGFzay1mb2xkZXItYnV0dG9uJylcbiAgICAgICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9sZGVyQnV0dG9uKTtcblxuICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrRm9sZGVyQnV0dG9uSW5wdXRQb3BVcCgpKTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjcmVhdGVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9yZW1vdmUgdGhpc1xuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5pbm5lclRleHQgPSAnKyBBZGQgVGFzaydcbiAgICAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1idXR0b24nKVxuICAgICAgICBjcmVhdGVCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbkRpdicpXG5cbiAgICAgICAgY3JlYXRlQnV0dG9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbilcblxuXG4gICAgICAgIHRhc2tEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uRGl2KTtcblxuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGNyZWF0ZUJ1dHRvbkRpdik7XG4gICAgICAgICAgICBjcmVhdGVCdXR0b25EaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrSW5wdXRQb3BVcCgpKTtcblxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uSW5wdXRQb3BVcCgpIHtcbiAgICAgICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcblxuICAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJylcblxuICAgICAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgIGlucHV0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2JylcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnRhc2tGb2xkZXJFeGlzdHMoaW5wdXQudmFsdWUpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAvL1RvZG86IGFkZCBlcnJvciBtZXNzYWdlIGFuZCBDU1MgdG8gc2hvdyBlcnJvclxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dERpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFza0ZvbGRlciA9IG5ldyBUYXNrRm9sZGVyKGlucHV0LnZhbHVlLCBudWxsKTtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5hZGRUYXNrRm9sZGVyKG5ld1Rhc2tGb2xkZXIpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza0ZvbGRlckJ1dHRvbihuZXdUYXNrRm9sZGVyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0ZvbGRlciA9IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXREaXZTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYnKTtcbiAgICAgICAgICAgIGlucHV0RGl2U2VsZWN0b3IucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb2xkZXJCdXR0b24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlucHV0RGl2XG5cbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrSW5wdXRQb3BVcCgpIHtcblxuXG4gICAgICAgIGxldCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtaW5wdXQnKVxuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWlucHV0JylcblxuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcblxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJylcblxuXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1jb250YWluZXInKTtcbiAgICAgICAgcG9wVXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3AtdXAtY29udGFpbmVyJyk7XG5cblxuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpXG5cbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtY29udGFpbmVyJylcblxuICAgICAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3B1cC1idXR0b24tY29udGFpbmVyJylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlQ29udGFpbmVyKVxuICAgICAgICBwb3BVcENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnB1dCcpO1xuICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWlucHV0Jyk7XG5cblxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyAmJiBkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkYXRlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHRhc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGRhdGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHRhc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh1bmlxdWVJZCwgdGFza0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2Jyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvRG9tKHRhc2tJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwb3BVcENvbnRhaW5lcjtcbiAgICB9XG5cblxuICAgIGFkZFRhc2tUb0RvbSh0YXNrVGV4dCwgdGFza0RhdGVJbmZvLCB0YXNrSUQgPSB1bmlxdWVJZCkge1xuXG4gICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCB0YXNrSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgICAgIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZWRpdEltZ0hvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBjaGVja01hcmtIb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZS1jb250YWluZXInKVxuXG4gICAgICAgIGNoZWNrTWFya0hvdmVyLnNyYyA9IFwiLi85MjU1YTlmYTRiNTJmNjljNGQ2MC5zdmdcIlxuICAgICAgICBjaGVja01hcmsuc3JjID0gXCIuLzkyMTc2MWVkYzQ5YjYxNjVlZWI4LnN2Z1wiXG4gICAgICAgIGVkaXRJbWdIb3Zlci5zcmMgPSBcIi4vNGU4MTg4OGIxNTRjMWVkZDExNTcuc3ZnXCJcbiAgICAgICAgZWRpdEltZy5zcmMgPSBcIi4vM2VhNGNmNDgzMjI0ZDIyOGZmZTQuc3ZnXCI7XG5cbiAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW1nJyk7XG4gICAgICAgIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbWcnKTtcblxuXG4gICAgICAgIGlmICh0YXNrSUQgIT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrSUQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCB1bmlxdWVJZClcbiAgICAgICAgICAgIHVuaXF1ZUlkICs9IDE7XG4gICAgICAgICAgICBVbmlxdWVJZFRvTG9jYWxTdG9yZSh1bmlxdWVJZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRhc2tEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gdGFza0RhdGVJbmZvO1xuICAgICAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lEICsgJ3Rhc2stZGF0ZScpXG4gICAgICAgIHRhc2tEYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJylcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJylcbiAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJylcbiAgICAgICAgdGFza0luZm8uaW5uZXJUZXh0ID0gdGFza1RleHQ7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mby1jb250YWluZXInKVxuXG5cbiAgICAgICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCdcblxuXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5yZW1vdmVUYXNrKHRhc2suaWQsIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2tGcm9tRG9tKHRhc2suaWQpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRJbWcuc3R5bGUuY3Vyc29yID0gJ2Zpbmdlcic7XG4gICAgICAgICAgICBlZGl0SW1nLnNyYyA9IGVkaXRJbWdIb3Zlci5zcmM7XG5cbiAgICAgICAgfSlcbiAgICAgICAgZWRpdEltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gXCIuLzNlYTRjZjQ4MzIyNGQyMjhmZmU0LnN2Z1wiO1xuICAgICAgICB9KVxuXG4gICAgICAgIGVkaXRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGFza0luZm8uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy9yZXBsYWNlcyBjaGlsZCwgcmVmZXIgdG8gdGhpcyBsaW5lIGlmIGJ1ZyBhcmlzZXMgbGF0ZXJcbiAgICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLnJlcGxhY2VDaGlsZChjaGVja01hcmssIGVkaXRJbWcpXG5cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5zdHlsZS5jdXJzb3IgPSAnZmluZ2VyJztcbiAgICAgICAgICAgIGNoZWNrTWFyay5zcmMgPSBjaGVja01hcmtIb3Zlci5zcmM7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSAnZmluZ2VyJztcbiAgICAgICAgICAgIGNoZWNrTWFyay5zcmMgPSAnLi85MjE3NjFlZGM0OWI2MTY1ZWViOC5zdmcnO1xuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0YXNrSW5mby5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gXCIuLzNlYTRjZjQ4MzIyNGQyMjhmZmU0LnN2Z1wiO1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuZ2V0VGFzayh0YXNrLmlkKS5zZXREZXNjaXB0aW9uKHRhc2tJbmZvLmlubmVyVGV4dCk7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5nZXRUYXNrKHRhc2suaWQpLnNldER1ZURhdGUodGFza0RhdGUudmFsdWUpO1xuXG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgLy9yZXBsYWNlcyBjaGlsZCwgcmVmZXIgdG8gdGhpcyBsaW5lIGlmIGJ1ZyBhcmlzZXMgbGF0ZXJcbiAgICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLnJlcGxhY2VDaGlsZChlZGl0SW1nLCBjaGVja01hcmspO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgICB0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0luZm9Db250YWluZXIpXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlKVxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlQ29udGFpbmVyKTtcblxuXG4gICAgICAgIHRhc2tEZXRhaWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tJbmZvICsgJ2RpdicpXG5cbiAgICAgICAgdGFza0RldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxuXG4gICAgfVxuXG5cbiAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrSWQpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQgKyAnIHJlbW92ZWQgZnJvbSBkb20nKVxuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuXG5cbiAgICB9XG5cbiAgICBQb3B1bGF0ZUZvbGRlckJ1dHRvbnNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgdGFza0ZvbGRlckxpc3QgPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBDU1MuZXNjYXBlKHRhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXNrRm9sZGVyQnV0dG9uKHRhc2tGb2xkZXJMaXN0W2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCl9YnV0dG9uIGFscmVhZHkgZXhpc3RzYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlRG9tRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICAgICAgbGV0IHRhc2tsaXN0ID0gW11cbiAgICAgICAgbGV0IHRhc2tJRFMgPSBbXVxuICAgICAgICBsZXQgdGFza0ZvbGRlckluZGV4ID0gMFxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUYXNrRm9sZGVyQ29udGFpbmVyXCIpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYWwgU3RvcmFnZSBQb3B1bGF0ZWRcIilcbiAgICAgICAgICAgIGxldCB0ZW1wVGFza0ZvbGRlckNvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tGb2xkZXJDb250YWluZXInKSkuX3Rhc2tGb2xkZXJMaXN0O1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuc2V0VGFza0ZvbGRlckxpc3QodGVtcFRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuc2V0VGFza0ZvbGRlckNsYXNzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpW2ldLnNldFRhc2tDbGFzcygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tsaXN0ID0gTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihrZXkpLmdldFRhc2tMaXN0KCk7XG5cbiAgICAgICAgICAgIHRhc2tGb2xkZXJJbmRleCA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJJbmRleChrZXkpXG4gICAgICAgICAgICB0YXNrSURTID0gTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKVt0YXNrRm9sZGVySW5kZXhdLmdldFRhc2tJRFMoKVxuXG4gICAgICAgICAgICB1bmlxdWVJZCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pcXVlSWQnKSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza2xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgQ1NTLmVzY2FwZSh0YXNrSURTW2ldKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza2xpc3RbaV0uZ2V0TmFtZSgpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRhc2tUb0RvbSh0YXNrbGlzdFtpXS5nZXREZXNjcmlwdGlvbigpLCB0YXNrbGlzdFtpXS5nZXREdWVEYXRlKCksIHRhc2tsaXN0W2ldLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXYgJHt0YXNrSURTW2ldfSBpcyBBbHJlYWR5IGluIERPTWApXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbkRpdicpID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuUG9wdWxhdGVGb2xkZXJCdXR0b25zRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgIH0gZWxzZSAvKmVsc2UgaWYgYWRkaXRpb25hbCBmb2xkZXIgY2hlY2sqLyB7XG4gICAgICAgICAgICBsZXQgTWFpblRhc2tGb2xkZXIgPSBuZXcgVGFza0ZvbGRlcignTWFpbicsIG51bGwpO1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuYWRkVGFza0ZvbGRlcihNYWluVGFza0ZvbGRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHRhc2tzIGluIGxvY2FsIHN0b3JhZ2VcIilcbiAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24obmV3VGFza0ZvbGRlcikge1xuICAgICAgICBjb25zdCBidXR0b25MaXN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbGlzdC1jb250ZW50Jyk7XG4gICAgICAgIGxldCB0YXNrRm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uaW5uZXJUZXh0ID0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCk7XG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrZm9sZGVyLWJ1dHRvbicpO1xuXG5cbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgdGFza2ZvbGRlciBoYXMgYmVlbiBjaGFuZ2VkIHRvICR7Y3VycmVudFRhc2tGb2xkZXJ9YClcbiAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGhpcy5jbGVhcih0YXNrRGV0YWlsQ29udGFpbmVyKVxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UobmV3VGFza0ZvbGRlci5nZXROYW1lKCkpO1xuICAgICAgICB9KVxuICAgICAgICBidXR0b25MaXN0Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9sZGVyQnV0dG9uKTtcblxuICAgIH1cbn1cblxuXG5jbGFzcyBUYXNrIHtcbiAgICAvL2xldCB1c2VyIGNyZWF0ZSBuYW1lIHNvIGl0J3MgZWFzeSB0byBmaW5kIHRhc2sgZm8gbW9kaWZ5XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIC8vR2V0dGVyc1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RGVzY2lwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbn1cblxuY2xhc3MgVGFza0ZvbGRlckNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdCA9IFtdXG4gICAgfVxuXG4gICAgLy9HZXR0ZXJzXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrRm9sZGVyTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tGb2xkZXJMaXN0O1xuICAgIH1cblxuICAgIHNldFRhc2tGb2xkZXJMaXN0KHRhc2tGb2xkZXJMaXN0KSB7XG4gICAgICAgIHRoaXMuX3Rhc2tGb2xkZXJMaXN0ID0gWy4uLnRhc2tGb2xkZXJMaXN0XTtcbiAgICB9XG5cbiAgICBzZXRUYXNrRm9sZGVyQ2xhc3MoKSB7XG4gICAgICAgIC8vcmVtb3ZlcyBhbGwgdmFsdWVzIGZyb20gYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3RbaV0gPSBuZXcgVGFza0ZvbGRlcih0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5fbmFtZSwgdGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uX3Rhc2tMaXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkVGFza0ZvbGRlcih0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIEZvbGRlciBBbHJlYWR5IEV4aXN0c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tGb2xkZXJMaXN0LnB1c2godGFza0ZvbGRlck5hbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0YXNrRm9sZGVyTmFtZS50b1N0cmluZygpfSBhZGRlZCB0byAke3RoaXMuZ2V0TmFtZSgpfSBjb250YWluZXJgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2tGb2xkZXIodGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0ZvbGRlckV4aXN0cyh0YXNrRm9sZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpID09PSB0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0YXNrRm9sZGVyTmFtZX0gcmVtb3ZlZCBmcm9tICR7dGhpcy5nZXROYW1lKCl9IGNvbnRhaW5lcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBGb2xkZXIgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUYXNrRm9sZGVyKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBGb2xkZXIgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUYXNrRm9sZGVySW5kZXgodGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0ZvbGRlckV4aXN0cyh0YXNrRm9sZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpID09PSB0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuY2xhc3MgVGFza0ZvbGRlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGFza2xpc3QpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIGlmICh0YXNrbGlzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QgPSB0YXNrbGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vR2V0dGVyc1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgc2V0VGFza0xpc3QodGFza0xpc3QpIHtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QgPSB0YXNrTGlzdDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fdGFza0xpc3RbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9oZWxwZXJzXG4gICAgYWRkVGFzayhUYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tFeGlzdHMoVGFzay5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdC5wdXNoKFRhc2spO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7VGFzay5nZXROYW1lKCl9IGFkZGVkIHRvICR7dGhpcy5nZXROYW1lKCl9IGZvbGRlcmApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5nZXRUYXNrTGlzdCgpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW1vdmVUYXNrKHRhc2tJZCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhc2tFeGlzdHModGFza0lkKSkge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3Quc3BsaWNlKHRoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleCh0YXNrID0+IHRhc2suZ2V0TmFtZSgpLnRvU3RyaW5nKCkgPT09IHRhc2tJZCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0lkfSByZW1vdmVkIGZyb20gJHt0aGlzLmdldE5hbWUoKX0gZm9sZGVyYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFRhc2tMaXN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgZG9lc24ndCBleGlzdFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRUYXNrQ2xhc3MoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0W2ldID0gbmV3IFRhc2sodGhpcy5fdGFza0xpc3RbaV0uX25hbWUsIHRoaXMuX3Rhc2tMaXN0W2ldLl9kZXNjcmlwdGlvbiwgdGhpcy5fdGFza0xpc3RbaV0uX2R1ZURhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB0YXNrRXhpc3RzKHRhc2tJZCkge1xuXG4gICAgICAgIGxldCB0YXNrRm9sZGVyTGlzdCA9IHRoaXMuZ2V0VGFza0xpc3QoKTtcbiAgICAgICAgbGV0IGRvZXNFeGlzdDtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXNrSWQgPT09IHRhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZG9lc0V4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9lc0V4aXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrSWQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0V4aXN0cyh0YXNrSWQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3RbdGhpcy5fdGFza0xpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5nZXROYW1lKCkudG9TdHJpbmcoKSA9PT0gdGFza0lkKV07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldFRhc2tJRFMoKSB7XG4gICAgICAgIGxldCB0YXNrSURTID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tJRFMucHVzaCh0aGlzLl90YXNrTGlzdFtpXS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXNrSURTO1xuICAgIH1cblxufVxuXG5cbmNvbnN0IENSRUFURV9UQVNLX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpO1xuY29uc3QgbXl0YXNrYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tmb2xkZXItYnV0dG9uJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XG5jb25zdCBjcmVhdGVCdXR0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbkRpdicpXG5jb25zdCBtYWluRm9sZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01haW4tZm9sZGVyLWJ1dHRvbicpO1xuXG4vL0dsb2JhbCBWYXJpYWJsZXNcblxubGV0IGN1cnJlbnRUYXNrRm9sZGVyID0gJ01haW4nO1xubGV0IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyID0gbmV3IFRhc2tGb2xkZXJDb250YWluZXIoJ1Rhc2tGb2xkZXJDb250YWluZXInKTtcblxuXG5tYWluRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gJ01haW4nO1xuICAgIGNvbnNvbGUubG9nKGBUaGUgY3VycmVudCB0YXNrZm9sZGVyIGhhcyBiZWVuIGNoYW5nZWQgdG8gJHtjdXJyZW50VGFza0ZvbGRlcn1gKVxuICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tEZXRhaWxDb250YWluZXIuY2xhc3NOYW1lKVxuICAgIGRvbUNvbnRyb2wuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcilcbiAgICBkb21Db250cm9sLnBvcHVsYXRlRG9tRnJvbUxvY2FsU3RvcmFnZSgnTWFpbicpO1xufSlcbi8vVXNlZCB0byBsYWJlbCB0YXNrcyB3aXRoIHVuaXF1ZSBpZCAoYm90aCBpbiBkb20gYW5kIGluIHRhc2tGb2xkZXIpXG5sZXQgdW5pcXVlSWQgPSAwO1xuXG5cbmxldCBkb21Db250cm9sID0gbmV3IERvbUNvbnRyb2xsZXIoKTtcblxuZG9tQ29udHJvbC5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UoJ01haW4nKTtcblxuZG9tQ29udHJvbC5jcmVhdGVBZGRUYXNrRm9sZGVyQnV0dG9uKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
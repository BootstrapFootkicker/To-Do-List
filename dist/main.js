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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: #a2a0a2 solid 1px;\n    background-color: #1e1f21;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background-color: #f2f2f2;\n}\n\n.task-sidebar {\n    min-width: 12%;\n    background-color: #1e1f21;\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: white;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-items: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    color: white;\n    padding: 15px 30px;\n    text-align: left;\n    border-radius: 5px;\n    width: 100%;\n}\n\n#create-task-folder-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: black;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n\n    border-radius: 5px;\n    padding: 15px 30px;\n\n}\n\n.create-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n\n\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    text-align: left;\n    border-radius: 5px;\n    border: none;\n    font-size: 16px;\n    transition: 0.3s ease;\n    width: 100%;\n    color: white;\n    background-color: #1e1f21;\n\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}\n\n\n.trash-button {\n    position: absolute;\n    /*background: url(\"./Trash.svg\");*/\n    /*background-size: cover;*/\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    visibility: hidden;\n    color: white;\n    border: none;\n    background: transparent;\n    font-size: 15px;\n\n\n}\n\n.Title {\n    font-size: 15px;\n    font-weight: bold;\n    color: white;\n    margin-bottom: 0.125rem;\n\n}\n\n\n.trash-button:hover {\n    /*background: url(\"./TrashHover.svg\");*/\n    /*background-size: cover;*/\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    color: red;\n\n}\n\n.task-folder-container {\n    position: relative;\n}\n\n.button-container {\n    position: relative;\n    flex: 1\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: #a2a0a2 solid 1px;\n    background-color: #1e1f21;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background-color: #f2f2f2;\n}\n\n.task-sidebar {\n    min-width: 12%;\n    background-color: #1e1f21;\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: white;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-items: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    color: white;\n    padding: 15px 30px;\n    text-align: left;\n    border-radius: 5px;\n    width: 100%;\n}\n\n#create-task-folder-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: black;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n\n    border-radius: 5px;\n    padding: 15px 30px;\n\n}\n\n.create-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n\n\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    text-align: left;\n    border-radius: 5px;\n    border: none;\n    font-size: 16px;\n    transition: 0.3s ease;\n    width: 100%;\n    color: white;\n    background-color: #1e1f21;\n\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n    border: 1px solid gray;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}\n\n\n.trash-button {\n    position: absolute;\n    /*background: url(\"./Trash.svg\");*/\n    /*background-size: cover;*/\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    visibility: hidden;\n    color: white;\n    border: none;\n    background: transparent;\n    font-size: 15px;\n\n\n}\n\n.Title {\n    font-size: 15px;\n    font-weight: bold;\n    color: white;\n    margin-bottom: 0.125rem;\n\n}\n\n\n.trash-button:hover {\n    /*background: url(\"./TrashHover.svg\");*/\n    /*background-size: cover;*/\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    color: red;\n\n}\n\n.task-folder-container {\n    position: relative;\n}\n\n.button-container {\n    position: relative;\n    flex: 1\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/Trash.svg":
/*!***********************!*\
  !*** ./src/Trash.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4d452793f9cabb4d420.svg";

/***/ }),

/***/ "./src/TrashHover.svg":
/*!****************************!*\
  !*** ./src/TrashHover.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aec9f44e8f425a9b48e.svg";

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
/* harmony import */ var _Trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trash.svg */ "./src/Trash.svg");
/* harmony import */ var _TrashHover_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrashHover.svg */ "./src/TrashHover.svg");






//todo Add restraint to creating task folders with leading numbers as the name
//todo work on css
//todo fix color for taskbutton hover


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
                input.setCustomValidity('Please enter a unique task folder name');
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
            console.log(i)
            console.log("this is it " + document.querySelector((taskFolderList[i].getName().replace(/\s/g, '') + 'button-container')))
            if (document.querySelector('#' + CSS.escape(taskFolderList[i].getName())) === null) {
                if (document.querySelector('#' + CSS.escape(taskFolderList[i].getName().replace(/\s/g, '') + 'button-container')) === null) {


                    this.createTaskFolderButton(taskFolderList[i])
                }
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
        let trashImg = document.createElement('img');
        let trashImgHover = document.createElement('img');
        let trashButton = document.createElement('button');
        let buttonContainer = document.createElement('div');


        buttonContainer.classList.add('task-folder-container')
        buttonContainer.setAttribute('id', newTaskFolder.getName().replace(/\s/g, '') + 'button-container')
        trashButton.classList.add('trash-button');
        trashButton.innerText = 'X';
        trashButton.setAttribute('id', newTaskFolder.getName().replace(/\s/g, '') + 'trash-button')
        //
        // trashImgHover.src = './5aec9f44e8f425a9b48e.svg';
        // trashImg.src = './a4d452793f9cabb4d420.svg'
        // trashImg.classList.add('trash-img');

        taskFolderButton.innerText = newTaskFolder.getName();
        taskFolderButton.setAttribute('id', newTaskFolder.getName().replace(/\s/g, ''));
        taskFolderButton.classList.add('taskfolder-button');


        buttonContainer.appendChild(taskFolderButton);
        buttonContainer.appendChild(trashButton);
        buttonListContent.appendChild(buttonContainer);


        trashButton.addEventListener('click', () => {
            MainTaskFolderContainer.removeTaskFolder(newTaskFolder.getName());
            let taskFolderContainer = document.querySelector('.task-folder-container');


            if (currentTaskFolder === newTaskFolder.getName()) {
                currentTaskFolder = 'Main';
                buttonContainer.remove()

                let taskDetailContainer = document.querySelector('.task-detail-container');
                this.clear(taskDetailContainer)
                this.populateDomFromLocalStorage('Main');
                // this.PopulateFolderButtonsFromLocalStorage()
            } else {
                buttonContainer.remove()
                // this.populateDomFromLocalStorage(currentTaskFolder);
                // this.PopulateFolderButtonsFromLocalStorage()
            }
        });


        taskFolderButton.addEventListener('click', () => {
            let taskFolderButtons = document.querySelectorAll('.taskfolder-button');
            let mainFolderButton = document.querySelector('#Main-folder-button');
            console.log(taskFolderButtons)
            if (currentTaskFolder === 'Main') {
                {
                    mainFolderButton.setAttribute('style', 'background-color: black;')
                }
            }

            if (currentTaskFolder !== newTaskFolder.getName()) {

                taskFolderButtons.forEach(button => {
                    {
                        button.setAttribute('style', 'background-color: #1e1f21;')
                    }
                })


            }
            currentTaskFolder = newTaskFolder.getName();
            if (currentTaskFolder === newTaskFolder.getName()) {
                taskFolderButton.setAttribute('style', 'background-color: black;')
            }
            console.log(`The current taskfolder has been changed to ${currentTaskFolder}`)
            let taskDetailContainer = document.querySelector('.task-detail-container');
            this.clear(taskDetailContainer)
            this.populateDomFromLocalStorage(newTaskFolder.getName());
            console.log(taskFolderButtons)
        })

        taskFolderButton.addEventListener('mouseover', () => {
            let trashButton = document.querySelector('#' + taskFolderButton.id + 'trash-button');
            trashButton.style.visibility = 'visible';

        })
        taskFolderButton.addEventListener('mouseout', () => {
            let trashButton = document.querySelector('#' + taskFolderButton.id + 'trash-button');
            setTimeout(function () {
                trashButton.style.visibility = 'hidden';
            }, 3000);


        });

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

    let taskFolderButtons = document.querySelectorAll('.taskfolder-button');
    console.log(taskFolderButtons + 'taskfolderbuttons')
    if (currentTaskFolder !== 'Main') {
        taskFolderButtons.forEach(button => {
            {
                button.setAttribute('style', 'background-color: #1e1f21;')
            }
        })
    }

    currentTaskFolder = 'Main';

    if (currentTaskFolder === 'Main') {
        mainFolderButton.setAttribute('style', 'background-color: black;')
    }
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


if (currentTaskFolder === 'Main') {
    mainFolderButton.setAttribute('style', 'background-color: black;')
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdB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RUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix3REFBd0Q7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxQkFBcUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEIsdUNBQXVDLFlBQVk7QUFDbkQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxzRUFBc0Usa0JBQWtCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2IsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkIsV0FBVyxnQkFBZ0I7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLGVBQWUsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwyQkFBMkIsZ0JBQWdCLFdBQVcsZ0JBQWdCO0FBQ3RFOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUSxlQUFlLGdCQUFnQjtBQUNsRTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0EsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxvRUFBb0U7QUFDcEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItcmlnaHQtZWxlbWVudHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogI2EyYTBhMiBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFmMjE7XFxufVxcblxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDEyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWYyMTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBibGFjayBzb2xpZCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcblxcbi50YXNrLWRldGFpbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODglO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci10b3A6IGdyb292ZSAjYjJiZWI1IDJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlICNiMmJlYjUgMnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG5cXG5cXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuXFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1ha2VzIHRoZSB0ZXh0IHdyYXAgKi9cXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcblxcblxcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmNyZWF0ZS1idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjEyNXJlbTtcXG5cXG59XFxuXFxuI2NyZWF0ZS10YXNrLWZvbGRlci1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NyZWF0ZS10YXNrLWZvbGRlci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNzQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXItbWlkZGxlLWVsZW1lbnQtY29udGFpbmVyIHtcXG5cXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLnRhc2stc2VhcmNoIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24uYWN0aXZlID4gLmNyZWF0ZS1idXR0b24gKyAuZHJvcGRvd24tbWVudSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuXFxufVxcblxcbi5kcm9wZG93bi5hY3RpdmUgPiAuY3JlYXRlLWJ1dHRvbiwgLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICAvKnRvcCBwYWRkaW5nKi9cXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAxcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNzVyZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG5cXG59XFxuXFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcblxcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM3NDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkZGQ7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLmJ1dHRvbi1saXN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbn1cXG5cXG4uYnV0dG9uLWxpc3QtY29udGVudCBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza2ZvbGRlci1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWYyMTtcXG5cXG59XFxuXFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzc0NDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcC11cC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3Rhc2stZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3BvcHVwLWJ1dHRvbi1jb250YWluZXIge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVhNDRmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Zjc5NDI7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4MDgwODtcXG59XFxuXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQxZTNhO1xcbn1cXG5cXG5cXG4uZWRpdC1pbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTtcXG59XFxuXFxuXFxuLnRyYXNoLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vVHJhc2guc3ZnXFxcIik7Ki9cXG4gICAgLypiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyovXFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHJpZ2h0OiAtLjMlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuXFxuXFxufVxcblxcbi5UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xMjVyZW07XFxuXFxufVxcblxcblxcbi50cmFzaC1idXR0b246aG92ZXIge1xcbiAgICAvKmJhY2tncm91bmQ6IHVybChcXFwiLi9UcmFzaEhvdmVyLnN2Z1xcXCIpOyovXFxuICAgIC8qYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsqL1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICByaWdodDogLS4zJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogcmVkO1xcblxcbn1cXG5cXG4udGFzay1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lB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O0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciwgLmhlYWRlci1sZWZ0LWVsZW1lbnRzLWNvbnRhaW5lciwgLmhlYWRlci1sZWZ0LWVsZW1lbnRzLWNvbnRhaW5lciwgLmhlYWRlci1yaWdodC1lbGVtZW50cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAjYTJhMGEyIHNvbGlkIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWYyMTtcXG59XFxuXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogMTIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZjIxO1xcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuXFxuLnRhc2stZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4OCU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXRvcDogZ3Jvb3ZlICNiMmJlYjUgMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiBncm9vdmUgI2IyYmViNSAycHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcblxcblxcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG5cXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogbWFrZXMgdGhlIHRleHQgd3JhcCAqL1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFxuXFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG5cXG59XFxuXFxuLnRhc2stZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4uY3JlYXRlLWJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTMuMTI1cmVtO1xcblxcbn1cXG5cXG4jY3JlYXRlLXRhc2stZm9sZGVyLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY3JlYXRlLXRhc2stZm9sZGVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM3NDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci1taWRkbGUtZWxlbWVudC1jb250YWluZXIge1xcblxcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG4udGFzay1zZWFyY2gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxufVxcblxcblxcbi5kcm9wZG93bi5hY3RpdmUgPiAuY3JlYXRlLWJ1dHRvbiArIC5kcm9wZG93bi1tZW51IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG5cXG59XFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uLCAuY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIC8qdG9wIHBhZGRpbmcqL1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDFyZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC43NXJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcblxcbn1cXG5cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuXFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzc0NDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4uYnV0dG9uLWxpc3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrZm9sZGVyLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZjIxO1xcblxcbn1cXG5cXG5cXG4udGFza2ZvbGRlci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNzQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jdGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcG9wdXAtYnV0dG9uLWNvbnRhaW5lciB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWE0NGY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzk0MjtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwODA4O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDFlM2E7XFxufVxcblxcblxcbi5lZGl0LWltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMTI1cmVtO1xcbn1cXG5cXG5cXG4udHJhc2gtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKmJhY2tncm91bmQ6IHVybChcXFwiLi9UcmFzaC5zdmdcXFwiKTsqL1xcbiAgICAvKmJhY2tncm91bmQtc2l6ZTogY292ZXI7Ki9cXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcmlnaHQ6IC0uMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG5cXG5cXG59XFxuXFxuLlRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTtcXG5cXG59XFxuXFxuXFxuLnRyYXNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIC8qYmFja2dyb3VuZDogdXJsKFxcXCIuL1RyYXNoSG92ZXIuc3ZnXFxcIik7Ki9cXG4gICAgLypiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyovXFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHJpZ2h0OiAtLjMlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuXFxufVxcblxcbi50YXNrLWZvbGRlci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0fSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge2VsLCB0ZSwgdGh9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCBUcmFzaCBmcm9tIFwiLi9UcmFzaC5zdmdcIlxuaW1wb3J0IFRyYXNoSG92ZXIgZnJvbSBcIi4vVHJhc2hIb3Zlci5zdmdcIlxuXG4vL3RvZG8gQWRkIHJlc3RyYWludCB0byBjcmVhdGluZyB0YXNrIGZvbGRlcnMgd2l0aCBsZWFkaW5nIG51bWJlcnMgYXMgdGhlIG5hbWVcbi8vdG9kbyB3b3JrIG9uIGNzc1xuLy90b2RvIGZpeCBjb2xvciBmb3IgdGFza2J1dHRvbiBob3ZlclxuXG5cbmZ1bmN0aW9uIGxvY2FsU3RvcmFnZVJlZnJlc2goaXRlbSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0uZ2V0TmFtZSgpLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoZWRcIilcblxufVxuXG5mdW5jdGlvbiBVbmlxdWVJZFRvTG9jYWxTdG9yZSh1bmlxdWVJZCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmlxdWVJZCcsIEpTT04uc3RyaW5naWZ5KHVuaXF1ZUlkKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cbiAgICBjb25zdCBpc0Ryb3Bkb3duQnV0dG9uID0gZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWRyb3Bkb3duLWJ1dHRvbl1cIik7XG4gICAgLy9hcmUgd2UgaW4gZHJvcGRvd24/IGlnbm9yZSBjbGljayBpZiBzb1xuICAgIGlmICghaXNEcm9wZG93bkJ1dHRvbiAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9pZiB3ZSBhcmUgY2xpY2tpbmcgZHJvcGRvd24gYWRkIGFjdGl2ZSBjbGFzc1xuICAgIGxldCBjdXJyZW50RHJvcGRvd25cbiAgICBpZiAoaXNEcm9wZG93bkJ1dHRvbikge1xuICAgICAgICBjdXJyZW50RHJvcGRvd24gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kcm9wZG93bl0nKTtcbiAgICAgICAgY3VycmVudERyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vY2xvc2VzIGFsbCBkcm9wZG93bnMgdGhhdCBhcmUgbm90IHNlbGVjdGVkXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIikuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93biA9PT0gY3VycmVudERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0pXG59KVxuXG5cbi8vdGVzdGluZyBpZiBicm93c2VyIHN1cHBvcnRzIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8IC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHwgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fCAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICBzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRG9tQ29udHJvbGxlciB7XG5cbiAgICBjbGVhcihlbGVtZW50KSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbGlzdC1jb250ZW50Jyk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5pbm5lclRleHQgPSAnKyBBZGQgVGFzayBGb2xkZXInXG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbicpXG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGUtdGFzay1mb2xkZXItYnV0dG9uJylcbiAgICAgICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9sZGVyQnV0dG9uKTtcblxuICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrRm9sZGVyQnV0dG9uSW5wdXRQb3BVcCgpKTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjcmVhdGVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9yZW1vdmUgdGhpc1xuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5pbm5lclRleHQgPSAnKyBBZGQgVGFzaydcbiAgICAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1idXR0b24nKVxuICAgICAgICBjcmVhdGVCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbkRpdicpXG5cbiAgICAgICAgY3JlYXRlQnV0dG9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbilcblxuXG4gICAgICAgIHRhc2tEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uRGl2KTtcblxuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGNyZWF0ZUJ1dHRvbkRpdik7XG4gICAgICAgICAgICBjcmVhdGVCdXR0b25EaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrSW5wdXRQb3BVcCgpKTtcblxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uSW5wdXRQb3BVcCgpIHtcbiAgICAgICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcblxuICAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJylcblxuICAgICAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgIGlucHV0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2JylcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnRhc2tGb2xkZXJFeGlzdHMoaW5wdXQudmFsdWUpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAvL1RvZG86IGFkZCBlcnJvciBtZXNzYWdlIGFuZCBDU1MgdG8gc2hvdyBlcnJvclxuICAgICAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB1bmlxdWUgdGFzayBmb2xkZXIgbmFtZScpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dERpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFza0ZvbGRlciA9IG5ldyBUYXNrRm9sZGVyKGlucHV0LnZhbHVlLCBudWxsKTtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5hZGRUYXNrRm9sZGVyKG5ld1Rhc2tGb2xkZXIpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza0ZvbGRlckJ1dHRvbihuZXdUYXNrRm9sZGVyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0ZvbGRlciA9IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXREaXZTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYnKTtcbiAgICAgICAgICAgIGlucHV0RGl2U2VsZWN0b3IucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb2xkZXJCdXR0b24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlucHV0RGl2XG5cbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrSW5wdXRQb3BVcCgpIHtcblxuXG4gICAgICAgIGxldCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtaW5wdXQnKVxuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWlucHV0JylcblxuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcblxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJylcblxuXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1jb250YWluZXInKTtcbiAgICAgICAgcG9wVXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3AtdXAtY29udGFpbmVyJyk7XG5cblxuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpXG5cbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtY29udGFpbmVyJylcblxuICAgICAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3B1cC1idXR0b24tY29udGFpbmVyJylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlQ29udGFpbmVyKVxuICAgICAgICBwb3BVcENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnB1dCcpO1xuICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWlucHV0Jyk7XG5cblxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyAmJiBkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkYXRlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHRhc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGRhdGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHRhc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh1bmlxdWVJZCwgdGFza0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2Jyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvRG9tKHRhc2tJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwb3BVcENvbnRhaW5lcjtcbiAgICB9XG5cblxuICAgIGFkZFRhc2tUb0RvbSh0YXNrVGV4dCwgdGFza0RhdGVJbmZvLCB0YXNrSUQgPSB1bmlxdWVJZCkge1xuXG4gICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCB0YXNrSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgICAgIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZWRpdEltZ0hvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBjaGVja01hcmtIb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZS1jb250YWluZXInKVxuXG4gICAgICAgIGNoZWNrTWFya0hvdmVyLnNyYyA9IFwiLi85MjU1YTlmYTRiNTJmNjljNGQ2MC5zdmdcIlxuICAgICAgICBjaGVja01hcmsuc3JjID0gXCIuLzkyMTc2MWVkYzQ5YjYxNjVlZWI4LnN2Z1wiXG4gICAgICAgIGVkaXRJbWdIb3Zlci5zcmMgPSBcIi4vNGU4MTg4OGIxNTRjMWVkZDExNTcuc3ZnXCJcbiAgICAgICAgZWRpdEltZy5zcmMgPSBcIi4vM2VhNGNmNDgzMjI0ZDIyOGZmZTQuc3ZnXCI7XG5cbiAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW1nJyk7XG4gICAgICAgIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbWcnKTtcblxuXG4gICAgICAgIGlmICh0YXNrSUQgIT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrSUQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCB1bmlxdWVJZClcbiAgICAgICAgICAgIHVuaXF1ZUlkICs9IDE7XG4gICAgICAgICAgICBVbmlxdWVJZFRvTG9jYWxTdG9yZSh1bmlxdWVJZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRhc2tEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gdGFza0RhdGVJbmZvO1xuICAgICAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lEICsgJ3Rhc2stZGF0ZScpXG4gICAgICAgIHRhc2tEYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJylcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJylcbiAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJylcbiAgICAgICAgdGFza0luZm8uaW5uZXJUZXh0ID0gdGFza1RleHQ7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mby1jb250YWluZXInKVxuXG5cbiAgICAgICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCdcblxuXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5yZW1vdmVUYXNrKHRhc2suaWQsIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2tGcm9tRG9tKHRhc2suaWQpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRJbWcuc3R5bGUuY3Vyc29yID0gJ2Zpbmdlcic7XG4gICAgICAgICAgICBlZGl0SW1nLnNyYyA9IGVkaXRJbWdIb3Zlci5zcmM7XG5cbiAgICAgICAgfSlcbiAgICAgICAgZWRpdEltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gXCIuLzNlYTRjZjQ4MzIyNGQyMjhmZmU0LnN2Z1wiO1xuICAgICAgICB9KVxuXG4gICAgICAgIGVkaXRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGFza0luZm8uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy9yZXBsYWNlcyBjaGlsZCwgcmVmZXIgdG8gdGhpcyBsaW5lIGlmIGJ1ZyBhcmlzZXMgbGF0ZXJcbiAgICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLnJlcGxhY2VDaGlsZChjaGVja01hcmssIGVkaXRJbWcpXG5cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5zdHlsZS5jdXJzb3IgPSAnZmluZ2VyJztcbiAgICAgICAgICAgIGNoZWNrTWFyay5zcmMgPSBjaGVja01hcmtIb3Zlci5zcmM7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSAnZmluZ2VyJztcbiAgICAgICAgICAgIGNoZWNrTWFyay5zcmMgPSAnLi85MjE3NjFlZGM0OWI2MTY1ZWViOC5zdmcnO1xuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0YXNrSW5mby5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gXCIuLzNlYTRjZjQ4MzIyNGQyMjhmZmU0LnN2Z1wiO1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuZ2V0VGFzayh0YXNrLmlkKS5zZXREZXNjaXB0aW9uKHRhc2tJbmZvLmlubmVyVGV4dCk7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5nZXRUYXNrKHRhc2suaWQpLnNldER1ZURhdGUodGFza0RhdGUudmFsdWUpO1xuXG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgLy9yZXBsYWNlcyBjaGlsZCwgcmVmZXIgdG8gdGhpcyBsaW5lIGlmIGJ1ZyBhcmlzZXMgbGF0ZXJcbiAgICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLnJlcGxhY2VDaGlsZChlZGl0SW1nLCBjaGVja01hcmspO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgICB0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0luZm9Db250YWluZXIpXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlKVxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlQ29udGFpbmVyKTtcblxuXG4gICAgICAgIHRhc2tEZXRhaWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tJbmZvICsgJ2RpdicpXG5cbiAgICAgICAgdGFza0RldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxuXG4gICAgfVxuXG5cbiAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrSWQpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQgKyAnIHJlbW92ZWQgZnJvbSBkb20nKVxuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuXG5cbiAgICB9XG5cbiAgICBQb3B1bGF0ZUZvbGRlckJ1dHRvbnNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgdGFza0ZvbGRlckxpc3QgPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGl0IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigodGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpLnJlcGxhY2UoL1xccy9nLCAnJykgKyAnYnV0dG9uLWNvbnRhaW5lcicpKSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIENTUy5lc2NhcGUodGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBDU1MuZXNjYXBlKHRhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKS5yZXBsYWNlKC9cXHMvZywgJycpICsgJ2J1dHRvbi1jb250YWluZXInKSkgPT09IG51bGwpIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza0ZvbGRlckJ1dHRvbih0YXNrRm9sZGVyTGlzdFtpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKX1idXR0b24gYWxyZWFkeSBleGlzdHNgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVEb21Gcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgICAgICBsZXQgdGFza2xpc3QgPSBbXVxuICAgICAgICBsZXQgdGFza0lEUyA9IFtdXG4gICAgICAgIGxldCB0YXNrRm9sZGVySW5kZXggPSAwXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRhc2tGb2xkZXJDb250YWluZXJcIikgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBTdG9yYWdlIFBvcHVsYXRlZFwiKVxuICAgICAgICAgICAgbGV0IHRlbXBUYXNrRm9sZGVyQ29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza0ZvbGRlckNvbnRhaW5lcicpKS5fdGFza0ZvbGRlckxpc3Q7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5zZXRUYXNrRm9sZGVyTGlzdCh0ZW1wVGFza0ZvbGRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5zZXRUYXNrRm9sZGVyQ2xhc3MoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KCkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KClbaV0uc2V0VGFza0NsYXNzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFza2xpc3QgPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGtleSkuZ2V0VGFza0xpc3QoKTtcblxuICAgICAgICAgICAgdGFza0ZvbGRlckluZGV4ID0gTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckluZGV4KGtleSlcbiAgICAgICAgICAgIHRhc2tJRFMgPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpW3Rhc2tGb2xkZXJJbmRleF0uZ2V0VGFza0lEUygpXG5cbiAgICAgICAgICAgIHVuaXF1ZUlkID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmlxdWVJZCcpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrbGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBDU1MuZXNjYXBlKHRhc2tJRFNbaV0pKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrbGlzdFtpXS5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvRG9tKHRhc2tsaXN0W2ldLmdldERlc2NyaXB0aW9uKCksIHRhc2tsaXN0W2ldLmdldER1ZURhdGUoKSwgdGFza2xpc3RbaV0uZ2V0TmFtZSgpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpdiAke3Rhc2tJRFNbaV19IGlzIEFscmVhZHkgaW4gRE9NYClcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2JykgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5Qb3B1bGF0ZUZvbGRlckJ1dHRvbnNGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgfSBlbHNlIC8qZWxzZSBpZiBhZGRpdGlvbmFsIGZvbGRlciBjaGVjayovIHtcbiAgICAgICAgICAgIGxldCBNYWluVGFza0ZvbGRlciA9IG5ldyBUYXNrRm9sZGVyKCdNYWluJywgbnVsbCk7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5hZGRUYXNrRm9sZGVyKE1haW5UYXNrRm9sZGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdGFza3MgaW4gbG9jYWwgc3RvcmFnZVwiKVxuICAgICAgICAgICAgLy90aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbkRpdicpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbihuZXdUYXNrRm9sZGVyKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1saXN0LWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IHRhc2tGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IHRyYXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCB0cmFzaEltZ0hvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1mb2xkZXItY29udGFpbmVyJylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKS5yZXBsYWNlKC9cXHMvZywgJycpICsgJ2J1dHRvbi1jb250YWluZXInKVxuICAgICAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0cmFzaC1idXR0b24nKTtcbiAgICAgICAgdHJhc2hCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICB0cmFzaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3VGFza0ZvbGRlci5nZXROYW1lKCkucmVwbGFjZSgvXFxzL2csICcnKSArICd0cmFzaC1idXR0b24nKVxuICAgICAgICAvL1xuICAgICAgICAvLyB0cmFzaEltZ0hvdmVyLnNyYyA9ICcuLzVhZWM5ZjQ0ZThmNDI1YTliNDhlLnN2Zyc7XG4gICAgICAgIC8vIHRyYXNoSW1nLnNyYyA9ICcuL2E0ZDQ1Mjc5M2Y5Y2FiYjRkNDIwLnN2ZydcbiAgICAgICAgLy8gdHJhc2hJbWcuY2xhc3NMaXN0LmFkZCgndHJhc2gtaW1nJyk7XG5cbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5pbm5lclRleHQgPSBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKTtcbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3VGFza0ZvbGRlci5nZXROYW1lKCkucmVwbGFjZSgvXFxzL2csICcnKSk7XG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFza2ZvbGRlci1idXR0b24nKTtcblxuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9sZGVyQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uTGlzdENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuXG4gICAgICAgIHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIucmVtb3ZlVGFza0ZvbGRlcihuZXdUYXNrRm9sZGVyLmdldE5hbWUoKSk7XG4gICAgICAgICAgICBsZXQgdGFza0ZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvbGRlci1jb250YWluZXInKTtcblxuXG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgPT09IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tGb2xkZXIgPSAnTWFpbic7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKHRhc2tEZXRhaWxDb250YWluZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UoJ01haW4nKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLlBvcHVsYXRlRm9sZGVyQnV0dG9uc0Zyb21Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvcHVsYXRlRG9tRnJvbUxvY2FsU3RvcmFnZShjdXJyZW50VGFza0ZvbGRlcik7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Qb3B1bGF0ZUZvbGRlckJ1dHRvbnNGcm9tTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0YXNrRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tGb2xkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tmb2xkZXItYnV0dG9uJyk7XG4gICAgICAgICAgICBsZXQgbWFpbkZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNYWluLWZvbGRlci1idXR0b24nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tGb2xkZXJCdXR0b25zKVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrRm9sZGVyID09PSAnTWFpbicpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Gb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrRm9sZGVyICE9PSBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKSkge1xuXG4gICAgICAgICAgICAgICAgdGFza0ZvbGRlckJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZjIxOycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgPT09IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGJsYWNrOycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgdGFza2ZvbGRlciBoYXMgYmVlbiBjaGFuZ2VkIHRvICR7Y3VycmVudFRhc2tGb2xkZXJ9YClcbiAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGhpcy5jbGVhcih0YXNrRGV0YWlsQ29udGFpbmVyKVxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UobmV3VGFza0ZvbGRlci5nZXROYW1lKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0ZvbGRlckJ1dHRvbnMpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhc2tGb2xkZXJCdXR0b24uaWQgKyAndHJhc2gtYnV0dG9uJyk7XG4gICAgICAgICAgICB0cmFzaEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhc2tGb2xkZXJCdXR0b24uaWQgKyAndHJhc2gtYnV0dG9uJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cmFzaEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9LCAzMDAwKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5cbmNsYXNzIFRhc2sge1xuICAgIC8vbGV0IHVzZXIgY3JlYXRlIG5hbWUgc28gaXQncyBlYXN5IHRvIGZpbmQgdGFzayBmbyBtb2RpZnlcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgLy9HZXR0ZXJzXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREZXNjaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxufVxuXG5jbGFzcyBUYXNrRm9sZGVyQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3Rhc2tGb2xkZXJMaXN0ID0gW11cbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFRhc2tGb2xkZXJMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0ZvbGRlckxpc3Q7XG4gICAgfVxuXG4gICAgc2V0VGFza0ZvbGRlckxpc3QodGFza0ZvbGRlckxpc3QpIHtcbiAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3QgPSBbLi4udGFza0ZvbGRlckxpc3RdO1xuICAgIH1cblxuICAgIHNldFRhc2tGb2xkZXJDbGFzcygpIHtcbiAgICAgICAgLy9yZW1vdmVzIGFsbCB2YWx1ZXMgZnJvbSBhcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXSA9IG5ldyBUYXNrRm9sZGVyKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLl9uYW1lLCB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5fdGFza0xpc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB0YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFRhc2tGb2xkZXIodGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0ZvbGRlckV4aXN0cyh0YXNrRm9sZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBGb2xkZXIgQWxyZWFkeSBFeGlzdHNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdC5wdXNoKHRhc2tGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWUudG9TdHJpbmcoKX0gYWRkZWQgdG8gJHt0aGlzLmdldE5hbWUoKX0gY29udGFpbmVyYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrRm9sZGVyKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWV9IHJlbW92ZWQgZnJvbSAke3RoaXMuZ2V0TmFtZSgpfSBjb250YWluZXJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlcih0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlckluZGV4KHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIEZvbGRlciBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIFRhc2tGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tsaXN0KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICBpZiAodGFza2xpc3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza2xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KHRhc2tMaXN0KSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vaGVscGVyc1xuICAgIGFkZFRhc2soVGFzaykge1xuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKFRhc2suZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaChUYXNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke1Rhc2suZ2V0TmFtZSgpfSBhZGRlZCB0byAke3RoaXMuZ2V0TmFtZSgpfSBmb2xkZXJgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuZ2V0VGFza0xpc3QoKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcblxuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKHRhc2tJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0LnNwbGljZSh0aGlzLl90YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldE5hbWUoKS50b1N0cmluZygpID09PSB0YXNrSWQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Rhc2tJZH0gcmVtb3ZlZCBmcm9tICR7dGhpcy5nZXROYW1lKCl9IGZvbGRlcmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRUYXNrTGlzdCgpKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGRvZXNuJ3QgZXhpc3RcIilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0VGFza0NsYXNzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdFtpXSA9IG5ldyBUYXNrKHRoaXMuX3Rhc2tMaXN0W2ldLl9uYW1lLCB0aGlzLl90YXNrTGlzdFtpXS5fZGVzY3JpcHRpb24sIHRoaXMuX3Rhc2tMaXN0W2ldLl9kdWVEYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdGFza0V4aXN0cyh0YXNrSWQpIHtcblxuICAgICAgICBsZXQgdGFza0ZvbGRlckxpc3QgPSB0aGlzLmdldFRhc2tMaXN0KCk7XG4gICAgICAgIGxldCBkb2VzRXhpc3Q7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFza0lkID09PSB0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRvZXNFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvZXNFeGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tFeGlzdHModGFza0lkKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0W3RoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleCh0YXNrID0+IHRhc2suZ2V0TmFtZSgpLnRvU3RyaW5nKCkgPT09IHRhc2tJZCldO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRUYXNrSURTKCkge1xuICAgICAgICBsZXQgdGFza0lEUyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrSURTLnB1c2godGhpcy5fdGFza0xpc3RbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza0lEUztcbiAgICB9XG5cbn1cblxuXG5jb25zdCBDUkVBVEVfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmNvbnN0IG15dGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrZm9sZGVyLWJ1dHRvbicpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKVxuY29uc3QgbWFpbkZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNYWluLWZvbGRlci1idXR0b24nKTtcblxuLy9HbG9iYWwgVmFyaWFibGVzXG5cbmxldCBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcbmxldCBNYWluVGFza0ZvbGRlckNvbnRhaW5lciA9IG5ldyBUYXNrRm9sZGVyQ29udGFpbmVyKCdUYXNrRm9sZGVyQ29udGFpbmVyJyk7XG5cblxubWFpbkZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGxldCB0YXNrRm9sZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrZm9sZGVyLWJ1dHRvbicpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tGb2xkZXJCdXR0b25zICsgJ3Rhc2tmb2xkZXJidXR0b25zJylcbiAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgIT09ICdNYWluJykge1xuICAgICAgICB0YXNrRm9sZGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzFlMWYyMTsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gJ01haW4nO1xuXG4gICAgaWYgKGN1cnJlbnRUYXNrRm9sZGVyID09PSAnTWFpbicpIHtcbiAgICAgICAgbWFpbkZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGJsYWNrOycpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBUaGUgY3VycmVudCB0YXNrZm9sZGVyIGhhcyBiZWVuIGNoYW5nZWQgdG8gJHtjdXJyZW50VGFza0ZvbGRlcn1gKVxuICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tEZXRhaWxDb250YWluZXIuY2xhc3NOYW1lKVxuICAgIGRvbUNvbnRyb2wuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcilcbiAgICBkb21Db250cm9sLnBvcHVsYXRlRG9tRnJvbUxvY2FsU3RvcmFnZSgnTWFpbicpO1xufSlcbi8vVXNlZCB0byBsYWJlbCB0YXNrcyB3aXRoIHVuaXF1ZSBpZCAoYm90aCBpbiBkb20gYW5kIGluIHRhc2tGb2xkZXIpXG5sZXQgdW5pcXVlSWQgPSAwO1xuXG5cbmxldCBkb21Db250cm9sID0gbmV3IERvbUNvbnRyb2xsZXIoKTtcblxuZG9tQ29udHJvbC5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UoJ01haW4nKTtcblxuZG9tQ29udHJvbC5jcmVhdGVBZGRUYXNrRm9sZGVyQnV0dG9uKClcblxuXG5pZiAoY3VycmVudFRhc2tGb2xkZXIgPT09ICdNYWluJykge1xuICAgIG1haW5Gb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsnKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
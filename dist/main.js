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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Trash.svg */ "./src/Trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./TrashHover.svg */ "./src/TrashHover.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 12%;\n\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: #f2f2f2;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-content: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    margin-left: 0;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n    width: 100%;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}\n\n\n.trash-button {\n    position: absolute;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    visibility: hidden;\n\n\n}\n\n\n.trash-button:hover {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n\n}\n\n.task-folder-container {\n    position: relative;\n}\n\n.button-container {\n    position: relative;\n    flex: 1\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 12%;\n\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 88%;\n    align-content: center;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-top: groove #b2beb5 2px;\n    border-bottom: groove #b2beb5 2px;\n    padding: 20px;\n    align-content: center;\n    border-width: thin;\n\n\n}\n\n.task:hover {\n    background-color: #f2f2f2;\n    border-color: black;\n    border-width: medium;\n\n}\n\n.task-info {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    /* makes the text wrap */\n    word-break: break-all;\n\n\n}\n\n.task-info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-self: center;\n    justify-self: center;\n    justify-content: center;\n    align-content: center;\n    max-width: 50%;\n\n}\n\n.task-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.checkbox-container {\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n}\n\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    align-content: center;\n    margin-left: -3.125rem;\n\n}\n\n#create-task-folder-button {\n    margin-left: 0;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n    width: 100%;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #4f7942;\n}\n\n.cancel-button:hover {\n    background-color: #880808;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n.edit-img {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    margin-bottom: 0.125rem;\n}\n\n\n.trash-button {\n    position: absolute;\n    background: url(\"./Trash.svg\");\n    background-size: cover;\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n    visibility: hidden;\n\n\n}\n\n\n.trash-button:hover {\n    background: url(\"./TrashHover.svg\");\n    background-size: cover;\n    width: 30px;\n    height: 30px;\n    right: -.3%;\n    border-radius: 5px;\n\n}\n\n.task-folder-container {\n    position: relative;\n}\n\n.button-container {\n    position: relative;\n    flex: 1\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
                    mainFolderButton.setAttribute('style', 'background-color: white;')
                }
            }

            if (currentTaskFolder !== newTaskFolder.getName()) {

                taskFolderButtons.forEach(button => {
                    {
                        button.setAttribute('style', 'background-color: white;')
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
                button.setAttribute('style', 'background-color: white;')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ2I7QUFDYTtBQUNaO0FBQ1U7O0FBRXpDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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bkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQSw4REFBOEQsa0JBQWtCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLG9FQUFvRTtBQUNwRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vVHJhc2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9UcmFzaEhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLXJpZ2h0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcXG59XFxuXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogMTIlO1xcblxcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuXFxuLnRhc2stZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4OCU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXRvcDogZ3Jvb3ZlICNiMmJlYjUgMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiBncm9vdmUgI2IyYmViNSAycHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcblxcblxcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xcblxcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBtYWtlcyB0aGUgdGV4dCB3cmFwICovXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXG5cXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNTAlO1xcblxcbn1cXG5cXG4udGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5jcmVhdGUtYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjEyNXJlbTtcXG5cXG59XFxuXFxuI2NyZWF0ZS10YXNrLWZvbGRlci1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci1taWRkbGUtZWxlbWVudC1jb250YWluZXIge1xcblxcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG4udGFzay1zZWFyY2gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxufVxcblxcblxcbi5kcm9wZG93bi5hY3RpdmUgPiAuY3JlYXRlLWJ1dHRvbiArIC5kcm9wZG93bi1tZW51IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG5cXG59XFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uLCAuY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIC8qdG9wIHBhZGRpbmcqL1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDFyZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC43NXJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcblxcbn1cXG5cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzc3NztcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4uYnV0dG9uLWxpc3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrZm9sZGVyLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiAgYm9yZGVyOiBub25lOyovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzc0NDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcC11cC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3Rhc2stZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3BvcHVwLWJ1dHRvbi1jb250YWluZXIge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVhNDRmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Zjc5NDI7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4MDgwODtcXG59XFxuXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQxZTNhO1xcbn1cXG5cXG5cXG4uZWRpdC1pbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTtcXG59XFxuXFxuXFxuLnRyYXNoLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcmlnaHQ6IC0uMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcblxcbn1cXG5cXG5cXG4udHJhc2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcmlnaHQ6IC0uMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLnRhc2stZm9sZGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDFcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLDZCQUE2QjtJQUM3QixhQUFhOztBQUVqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxQkFBcUI7OztBQUd6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7OztBQUd0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1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Y0FBYztJQUNkLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1EQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7O0FBR3RCOzs7QUFHQTtJQUNJLG1EQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItbGVmdC1lbGVtZW50cy1jb250YWluZXIsIC5oZWFkZXItcmlnaHQtZWxlbWVudHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyIHtcXG4gICAgbWluLXdpZHRoOiAxMiU7XFxuXFxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgc29saWQgMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG5cXG4udGFzay1kZXRhaWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg4JTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcblxcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItdG9wOiBncm9vdmUgI2IyYmViNSAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZSAjYjJiZWI1IDJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuXFxuXFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuXFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1ha2VzIHRoZSB0ZXh0IHdyYXAgKi9cXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcblxcblxcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmNyZWF0ZS1idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTMuMTI1cmVtO1xcblxcbn1cXG5cXG4jY3JlYXRlLXRhc2stZm9sZGVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1pZGRsZS1lbGVtZW50LWNvbnRhaW5lciB7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi50YXNrLXNlYXJjaCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uICsgLmRyb3Bkb3duLW1lbnUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcblxcbn1cXG5cXG4uZHJvcGRvd24uYWN0aXZlID4gLmNyZWF0ZS1idXR0b24sIC5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgLyp0b3AgcGFkZGluZyovXFxuICAgIHRvcDogY2FsYygxMDAlICsgMXJlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuXFxufVxcblxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLmJ1dHRvbi1saXN0LWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qICBib3JkZXI6IG5vbmU7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4udGFza2ZvbGRlci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNzQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jdGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcG9wdXAtYnV0dG9uLWNvbnRhaW5lciB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWE0NGY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzk0MjtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwODA4O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDFlM2E7XFxufVxcblxcblxcbi5lZGl0LWltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMTI1cmVtO1xcbn1cXG5cXG5cXG4udHJhc2gtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vVHJhc2guc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHJpZ2h0OiAtLjMlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG5cXG59XFxuXFxuXFxuLnRyYXNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9UcmFzaEhvdmVyLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICByaWdodDogLS4zJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4udGFzay1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtjb21wYXJlQXNjLCBmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7ZWwsIHRlLCB0aH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IFRyYXNoIGZyb20gXCIuL1RyYXNoLnN2Z1wiXG5pbXBvcnQgVHJhc2hIb3ZlciBmcm9tIFwiLi9UcmFzaEhvdmVyLnN2Z1wiXG5cbi8vdG9kbyBBZGQgcmVzdHJhaW50IHRvIGNyZWF0aW5nIHRhc2sgZm9sZGVycyB3aXRoIGxlYWRpbmcgbnVtYmVycyBhcyB0aGUgbmFtZVxuLy90b2RvIHdvcmsgb24gY3NzXG4vL3RvZG8gZml4IGNvbG9yIGZvciB0YXNrYnV0dG9uIGhvdmVyXG5cblxuZnVuY3Rpb24gbG9jYWxTdG9yYWdlUmVmcmVzaChpdGVtKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5nZXROYW1lKCksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hlZFwiKVxuXG59XG5cbmZ1bmN0aW9uIFVuaXF1ZUlkVG9Mb2NhbFN0b3JlKHVuaXF1ZUlkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXF1ZUlkJywgSlNPTi5zdHJpbmdpZnkodW5pcXVlSWQpKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgIGNvbnN0IGlzRHJvcGRvd25CdXR0b24gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnV0dG9uXVwiKTtcbiAgICAvL2FyZSB3ZSBpbiBkcm9wZG93bj8gaWdub3JlIGNsaWNrIGlmIHNvXG4gICAgaWYgKCFpc0Ryb3Bkb3duQnV0dG9uICYmIGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIikgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvL2lmIHdlIGFyZSBjbGlja2luZyBkcm9wZG93biBhZGQgYWN0aXZlIGNsYXNzXG4gICAgbGV0IGN1cnJlbnREcm9wZG93blxuICAgIGlmIChpc0Ryb3Bkb3duQnV0dG9uKSB7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRyb3Bkb3duXScpO1xuICAgICAgICBjdXJyZW50RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLy9jbG9zZXMgYWxsIGRyb3Bkb3ducyB0aGF0IGFyZSBub3Qgc2VsZWN0ZWRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHJvcGRvd25dLmFjdGl2ZVwiKS5mb3JFYWNoKGRyb3Bkb3duID0+IHtcbiAgICAgICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfSlcbn0pXG5cblxuLy90ZXN0aW5nIGlmIGJyb3dzZXIgc3VwcG9ydHMgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gKGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgKGUuY29kZSA9PT0gMjIgfHwgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fCAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8IC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiYgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBEb21Db250cm9sbGVyIHtcblxuICAgIGNsZWFyKGVsZW1lbnQpIHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVBZGRUYXNrRm9sZGVyQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1saXN0LWNvbnRlbnQnKTtcblxuICAgICAgICBsZXQgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLmlubmVyVGV4dCA9ICcrIEFkZCBUYXNrIEZvbGRlcidcbiAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uJylcbiAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS10YXNrLWZvbGRlci1idXR0b24nKVxuICAgICAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24pO1xuXG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRhc2tGb2xkZXJCdXR0b25JbnB1dFBvcFVwKCkpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3JlbW92ZSB0aGlzXG4gICAgICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLmlubmVyVGV4dCA9ICcrIEFkZCBUYXNrJ1xuICAgICAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbicpXG4gICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uRGl2JylcblxuICAgICAgICBjcmVhdGVCdXR0b25EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKVxuXG5cbiAgICAgICAgdGFza0RldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b25EaXYpO1xuXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoY3JlYXRlQnV0dG9uRGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRhc2tJbnB1dFBvcFVwKCkpO1xuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b25JbnB1dFBvcFVwKCkge1xuICAgICAgICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xuXG4gICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKVxuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdi1idXR0b24tY29udGFpbmVyJylcbiAgICAgICAgaW5wdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdUYXNrZm9sZGVyLWJ1dHRvbi1pbnB1dC1kaXYnKVxuXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgfHwgTWFpblRhc2tGb2xkZXJDb250YWluZXIudGFza0ZvbGRlckV4aXN0cyhpbnB1dC52YWx1ZSkgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIC8vVG9kbzogYWRkIGVycm9yIG1lc3NhZ2UgYW5kIENTUyB0byBzaG93IGVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0RGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrRm9sZGVyID0gbmV3IFRhc2tGb2xkZXIoaW5wdXQudmFsdWUsIG51bGwpO1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmFkZFRhc2tGb2xkZXIobmV3VGFza0ZvbGRlcik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXNrRm9sZGVyQnV0dG9uKG5ld1Rhc2tGb2xkZXIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcih0YXNrRGV0YWlsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrRm9sZGVyQnV0dG9uKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dERpdlNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdicpO1xuICAgICAgICAgICAgaW5wdXREaXZTZWxlY3Rvci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5wdXREaXZcblxuICAgIH1cblxuICAgIGNyZWF0ZVRhc2tJbnB1dFBvcFVwKCkge1xuXG5cbiAgICAgICAgbGV0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1pbnB1dCcpXG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2staW5wdXQnKVxuXG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xuXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKVxuXG5cbiAgICAgICAgcG9wVXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wLXVwLWNvbnRhaW5lcicpO1xuICAgICAgICBwb3BVcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcC11cC1jb250YWluZXInKTtcblxuXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcblxuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGF0ZS1jb250YWluZXInKVxuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcHVwLWJ1dHRvbi1jb250YWluZXInKVxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVDb250YWluZXIpXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcblxuXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlucHV0Jyk7XG4gICAgICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnICYmIGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGRhdGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGFzaycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgZGF0ZScpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGFzaycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHVuaXF1ZUlkLCB0YXNrSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25EaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Eb20odGFza0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVCdXR0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbkRpdicpO1xuICAgICAgICAgICAgY3JlYXRlQnV0dG9uRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBvcFVwQ29udGFpbmVyO1xuICAgIH1cblxuXG4gICAgYWRkVGFza1RvRG9tKHRhc2tUZXh0LCB0YXNrRGF0ZUluZm8sIHRhc2tJRCA9IHVuaXF1ZUlkKSB7XG5cbiAgICAgICAgbGV0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBlZGl0SW1nSG92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgY2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFya0hvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY2hlY2tNYXJrSG92ZXIuc3JjID0gXCIuLzkyNTVhOWZhNGI1MmY2OWM0ZDYwLnN2Z1wiXG4gICAgICAgIGNoZWNrTWFyay5zcmMgPSBcIi4vOTIxNzYxZWRjNDliNjE2NWVlYjguc3ZnXCJcbiAgICAgICAgZWRpdEltZ0hvdmVyLnNyYyA9IFwiLi80ZTgxODg4YjE1NGMxZWRkMTE1Ny5zdmdcIlxuICAgICAgICBlZGl0SW1nLnNyYyA9IFwiLi8zZWE0Y2Y0ODMyMjRkMjI4ZmZlNC5zdmdcIjtcblxuICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbWcnKTtcbiAgICAgICAgZWRpdEltZy5jbGFzc0xpc3QuYWRkKCdlZGl0LWltZycpO1xuXG5cbiAgICAgICAgaWYgKHRhc2tJRCAhPT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tJRClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIHVuaXF1ZUlkKVxuICAgICAgICAgICAgdW5pcXVlSWQgKz0gMTtcbiAgICAgICAgICAgIFVuaXF1ZUlkVG9Mb2NhbFN0b3JlKHVuaXF1ZUlkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGFza0RhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSB0YXNrRGF0ZUluZm87XG4gICAgICAgIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrSUQgKyAndGFzay1kYXRlJylcbiAgICAgICAgdGFza0RhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKVxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKVxuICAgICAgICB0YXNrSW5mby5pbm5lclRleHQgPSB0YXNrVGV4dDtcbiAgICAgICAgdGFza0luZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvLWNvbnRhaW5lcicpXG5cblxuICAgICAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94J1xuXG5cbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLnJlbW92ZVRhc2sodGFzay5pZCwgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFza0Zyb21Eb20odGFzay5pZClcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuXG4gICAgICAgIGVkaXRJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdEltZy5zdHlsZS5jdXJzb3IgPSAnZmluZ2VyJztcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gZWRpdEltZ0hvdmVyLnNyYztcblxuICAgICAgICB9KVxuICAgICAgICBlZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdEltZy5zcmMgPSBcIi4vM2VhNGNmNDgzMjI0ZDIyOGZmZTQuc3ZnXCI7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZWRpdEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrSW5mby5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvL3JlcGxhY2VzIGNoaWxkLCByZWZlciB0byB0aGlzIGxpbmUgaWYgYnVnIGFyaXNlcyBsYXRlclxuICAgICAgICAgICAgY2hlY2tCb3hDb250YWluZXIucmVwbGFjZUNoaWxkKGNoZWNrTWFyaywgZWRpdEltZylcblxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tNYXJrLnN0eWxlLmN1cnNvciA9ICdmaW5nZXInO1xuICAgICAgICAgICAgY2hlY2tNYXJrLnNyYyA9IGNoZWNrTWFya0hvdmVyLnNyYztcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNoZWNrTWFyay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmN1cnNvciA9ICdmaW5nZXInO1xuICAgICAgICAgICAgY2hlY2tNYXJrLnNyYyA9ICcuLzkyMTc2MWVkYzQ5YjYxNjVlZWI4LnN2Zyc7XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNoZWNrTWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZWRpdEltZy5zcmMgPSBcIi4vM2VhNGNmNDgzMjI0ZDIyOGZmZTQuc3ZnXCI7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5nZXRUYXNrKHRhc2suaWQpLnNldERlc2NpcHRpb24odGFza0luZm8uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLmdldFRhc2sodGFzay5pZCkuc2V0RHVlRGF0ZSh0YXNrRGF0ZS52YWx1ZSk7XG5cblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICAvL3JlcGxhY2VzIGNoaWxkLCByZWZlciB0byB0aGlzIGxpbmUgaWYgYnVnIGFyaXNlcyBsYXRlclxuICAgICAgICAgICAgY2hlY2tCb3hDb250YWluZXIucmVwbGFjZUNoaWxkKGVkaXRJbWcsIGNoZWNrTWFyayk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mb0NvbnRhaW5lcilcbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGVDb250YWluZXIpO1xuXG5cbiAgICAgICAgdGFza0RldGFpbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0luZm8gKyAnZGl2JylcblxuICAgICAgICB0YXNrRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuXG5cbiAgICB9XG5cblxuICAgIHJlbW92ZVRhc2tGcm9tRG9tKHRhc2tJZCkge1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCArICcgcmVtb3ZlZCBmcm9tIGRvbScpXG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG5cblxuICAgIH1cblxuICAgIFBvcHVsYXRlRm9sZGVyQnV0dG9uc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGxldCB0YXNrRm9sZGVyTGlzdCA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgaXQgXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCh0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkucmVwbGFjZSgvXFxzL2csICcnKSArICdidXR0b24tY29udGFpbmVyJykpKVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgQ1NTLmVzY2FwZSh0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIENTUy5lc2NhcGUodGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpLnJlcGxhY2UoL1xccy9nLCAnJykgKyAnYnV0dG9uLWNvbnRhaW5lcicpKSA9PT0gbnVsbCkge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXNrRm9sZGVyQnV0dG9uKHRhc2tGb2xkZXJMaXN0W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpfWJ1dHRvbiBhbHJlYWR5IGV4aXN0c2ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgIGxldCB0YXNrbGlzdCA9IFtdXG4gICAgICAgIGxldCB0YXNrSURTID0gW11cbiAgICAgICAgbGV0IHRhc2tGb2xkZXJJbmRleCA9IDBcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVGFza0ZvbGRlckNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIFN0b3JhZ2UgUG9wdWxhdGVkXCIpXG4gICAgICAgICAgICBsZXQgdGVtcFRhc2tGb2xkZXJDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrRm9sZGVyQ29udGFpbmVyJykpLl90YXNrRm9sZGVyTGlzdDtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnNldFRhc2tGb2xkZXJMaXN0KHRlbXBUYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnNldFRhc2tGb2xkZXJDbGFzcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKVtpXS5zZXRUYXNrQ2xhc3MoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrbGlzdCA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoa2V5KS5nZXRUYXNrTGlzdCgpO1xuXG4gICAgICAgICAgICB0YXNrRm9sZGVySW5kZXggPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVySW5kZXgoa2V5KVxuICAgICAgICAgICAgdGFza0lEUyA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KClbdGFza0ZvbGRlckluZGV4XS5nZXRUYXNrSURTKClcblxuICAgICAgICAgICAgdW5pcXVlSWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXF1ZUlkJykpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIENTUy5lc2NhcGUodGFza0lEU1tpXSkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tsaXN0W2ldLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Eb20odGFza2xpc3RbaV0uZ2V0RGVzY3JpcHRpb24oKSwgdGFza2xpc3RbaV0uZ2V0RHVlRGF0ZSgpLCB0YXNrbGlzdFtpXS5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGl2ICR7dGFza0lEU1tpXX0gaXMgQWxyZWFkeSBpbiBET01gKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKSA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlBvcHVsYXRlRm9sZGVyQnV0dG9uc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB9IGVsc2UgLyplbHNlIGlmIGFkZGl0aW9uYWwgZm9sZGVyIGNoZWNrKi8ge1xuICAgICAgICAgICAgbGV0IE1haW5UYXNrRm9sZGVyID0gbmV3IFRhc2tGb2xkZXIoJ01haW4nLCBudWxsKTtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmFkZFRhc2tGb2xkZXIoTWFpblRhc2tGb2xkZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXCIpXG4gICAgICAgICAgICAvL3RoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uKG5ld1Rhc2tGb2xkZXIpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uTGlzdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxpc3QtY29udGVudCcpO1xuICAgICAgICBsZXQgdGFza0ZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgdHJhc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHRyYXNoSW1nSG92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvbGRlci1jb250YWluZXInKVxuICAgICAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpLnJlcGxhY2UoL1xccy9nLCAnJykgKyAnYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYXNoLWJ1dHRvbicpO1xuXG4gICAgICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKS5yZXBsYWNlKC9cXHMvZywgJycpICsgJ3RyYXNoLWJ1dHRvbicpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyYXNoSW1nSG92ZXIuc3JjID0gJy4vNWFlYzlmNDRlOGY0MjVhOWI0OGUuc3ZnJztcbiAgICAgICAgLy8gdHJhc2hJbWcuc3JjID0gJy4vYTRkNDUyNzkzZjljYWJiNGQ0MjAuc3ZnJ1xuICAgICAgICAvLyB0cmFzaEltZy5jbGFzc0xpc3QuYWRkKCd0cmFzaC1pbWcnKTtcblxuICAgICAgICB0YXNrRm9sZGVyQnV0dG9uLmlubmVyVGV4dCA9IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpO1xuICAgICAgICB0YXNrRm9sZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKS5yZXBsYWNlKC9cXHMvZywgJycpKTtcbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrZm9sZGVyLWJ1dHRvbicpO1xuXG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb2xkZXJCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuICAgICAgICBidXR0b25MaXN0Q29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG5cbiAgICAgICAgdHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5yZW1vdmVUYXNrRm9sZGVyKG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIGxldCB0YXNrRm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9sZGVyLWNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFza0ZvbGRlciA9PT0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcbiAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIucmVtb3ZlKClcblxuICAgICAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRG9tRnJvbUxvY2FsU3RvcmFnZSgnTWFpbicpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuUG9wdWxhdGVGb2xkZXJCdXR0b25zRnJvbUxvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9wdWxhdGVEb21Gcm9tTG9jYWxTdG9yYWdlKGN1cnJlbnRUYXNrRm9sZGVyKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLlBvcHVsYXRlRm9sZGVyQnV0dG9uc0Zyb21Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFza0ZvbGRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza2ZvbGRlci1idXR0b24nKTtcbiAgICAgICAgICAgIGxldCBtYWluRm9sZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01haW4tZm9sZGVyLWJ1dHRvbicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0ZvbGRlckJ1dHRvbnMpXG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgPT09ICdNYWluJykge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbkZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHdoaXRlOycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgIT09IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKSB7XG5cbiAgICAgICAgICAgICAgICB0YXNrRm9sZGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHdoaXRlOycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRUYXNrRm9sZGVyID0gbmV3VGFza0ZvbGRlci5nZXROYW1lKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgPT09IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGJsYWNrOycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgdGFza2ZvbGRlciBoYXMgYmVlbiBjaGFuZ2VkIHRvICR7Y3VycmVudFRhc2tGb2xkZXJ9YClcbiAgICAgICAgICAgIGxldCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGhpcy5jbGVhcih0YXNrRGV0YWlsQ29udGFpbmVyKVxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UobmV3VGFza0ZvbGRlci5nZXROYW1lKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0ZvbGRlckJ1dHRvbnMpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0ZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhc2tGb2xkZXJCdXR0b24uaWQgKyAndHJhc2gtYnV0dG9uJyk7XG4gICAgICAgICAgICB0cmFzaEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhc2tGb2xkZXJCdXR0b24uaWQgKyAndHJhc2gtYnV0dG9uJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cmFzaEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9LCAzMDAwKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5cbmNsYXNzIFRhc2sge1xuICAgIC8vbGV0IHVzZXIgY3JlYXRlIG5hbWUgc28gaXQncyBlYXN5IHRvIGZpbmQgdGFzayBmbyBtb2RpZnlcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgLy9HZXR0ZXJzXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREZXNjaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxufVxuXG5jbGFzcyBUYXNrRm9sZGVyQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3Rhc2tGb2xkZXJMaXN0ID0gW11cbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFRhc2tGb2xkZXJMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0ZvbGRlckxpc3Q7XG4gICAgfVxuXG4gICAgc2V0VGFza0ZvbGRlckxpc3QodGFza0ZvbGRlckxpc3QpIHtcbiAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3QgPSBbLi4udGFza0ZvbGRlckxpc3RdO1xuICAgIH1cblxuICAgIHNldFRhc2tGb2xkZXJDbGFzcygpIHtcbiAgICAgICAgLy9yZW1vdmVzIGFsbCB2YWx1ZXMgZnJvbSBhcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXSA9IG5ldyBUYXNrRm9sZGVyKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLl9uYW1lLCB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5fdGFza0xpc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB0YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFRhc2tGb2xkZXIodGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0ZvbGRlckV4aXN0cyh0YXNrRm9sZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBGb2xkZXIgQWxyZWFkeSBFeGlzdHNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdC5wdXNoKHRhc2tGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWUudG9TdHJpbmcoKX0gYWRkZWQgdG8gJHt0aGlzLmdldE5hbWUoKX0gY29udGFpbmVyYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrRm9sZGVyKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWV9IHJlbW92ZWQgZnJvbSAke3RoaXMuZ2V0TmFtZSgpfSBjb250YWluZXJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlcih0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlckluZGV4KHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIEZvbGRlciBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIFRhc2tGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tsaXN0KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICBpZiAodGFza2xpc3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza2xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KHRhc2tMaXN0KSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vaGVscGVyc1xuICAgIGFkZFRhc2soVGFzaykge1xuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKFRhc2suZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaChUYXNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke1Rhc2suZ2V0TmFtZSgpfSBhZGRlZCB0byAke3RoaXMuZ2V0TmFtZSgpfSBmb2xkZXJgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuZ2V0VGFza0xpc3QoKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcblxuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKHRhc2tJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0LnNwbGljZSh0aGlzLl90YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldE5hbWUoKS50b1N0cmluZygpID09PSB0YXNrSWQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Rhc2tJZH0gcmVtb3ZlZCBmcm9tICR7dGhpcy5nZXROYW1lKCl9IGZvbGRlcmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRUYXNrTGlzdCgpKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGRvZXNuJ3QgZXhpc3RcIilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0VGFza0NsYXNzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdFtpXSA9IG5ldyBUYXNrKHRoaXMuX3Rhc2tMaXN0W2ldLl9uYW1lLCB0aGlzLl90YXNrTGlzdFtpXS5fZGVzY3JpcHRpb24sIHRoaXMuX3Rhc2tMaXN0W2ldLl9kdWVEYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdGFza0V4aXN0cyh0YXNrSWQpIHtcblxuICAgICAgICBsZXQgdGFza0ZvbGRlckxpc3QgPSB0aGlzLmdldFRhc2tMaXN0KCk7XG4gICAgICAgIGxldCBkb2VzRXhpc3Q7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFza0lkID09PSB0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRvZXNFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvZXNFeGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tFeGlzdHModGFza0lkKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0W3RoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleCh0YXNrID0+IHRhc2suZ2V0TmFtZSgpLnRvU3RyaW5nKCkgPT09IHRhc2tJZCldO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRUYXNrSURTKCkge1xuICAgICAgICBsZXQgdGFza0lEUyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrSURTLnB1c2godGhpcy5fdGFza0xpc3RbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza0lEUztcbiAgICB9XG5cbn1cblxuXG5jb25zdCBDUkVBVEVfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmNvbnN0IG15dGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrZm9sZGVyLWJ1dHRvbicpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKVxuY29uc3QgbWFpbkZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNYWluLWZvbGRlci1idXR0b24nKTtcblxuLy9HbG9iYWwgVmFyaWFibGVzXG5cbmxldCBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcbmxldCBNYWluVGFza0ZvbGRlckNvbnRhaW5lciA9IG5ldyBUYXNrRm9sZGVyQ29udGFpbmVyKCdUYXNrRm9sZGVyQ29udGFpbmVyJyk7XG5cblxubWFpbkZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGxldCB0YXNrRm9sZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrZm9sZGVyLWJ1dHRvbicpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tGb2xkZXJCdXR0b25zICsgJ3Rhc2tmb2xkZXJidXR0b25zJylcbiAgICBpZiAoY3VycmVudFRhc2tGb2xkZXIgIT09ICdNYWluJykge1xuICAgICAgICB0YXNrRm9sZGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcblxuICAgIGlmIChjdXJyZW50VGFza0ZvbGRlciA9PT0gJ01haW4nKSB7XG4gICAgICAgIG1haW5Gb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsnKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgdGFza2ZvbGRlciBoYXMgYmVlbiBjaGFuZ2VkIHRvICR7Y3VycmVudFRhc2tGb2xkZXJ9YClcbiAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrRGV0YWlsQ29udGFpbmVyLmNsYXNzTmFtZSlcbiAgICBkb21Db250cm9sLmNsZWFyKHRhc2tEZXRhaWxDb250YWluZXIpXG4gICAgZG9tQ29udHJvbC5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UoJ01haW4nKTtcbn0pXG4vL1VzZWQgdG8gbGFiZWwgdGFza3Mgd2l0aCB1bmlxdWUgaWQgKGJvdGggaW4gZG9tIGFuZCBpbiB0YXNrRm9sZGVyKVxubGV0IHVuaXF1ZUlkID0gMDtcblxuXG5sZXQgZG9tQ29udHJvbCA9IG5ldyBEb21Db250cm9sbGVyKCk7XG5cbmRvbUNvbnRyb2wucG9wdWxhdGVEb21Gcm9tTG9jYWxTdG9yYWdlKCdNYWluJyk7XG5cbmRvbUNvbnRyb2wuY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpXG5cblxuaWYgKGN1cnJlbnRUYXNrRm9sZGVyID09PSAnTWFpbicpIHtcbiAgICBtYWluRm9sZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7Jylcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
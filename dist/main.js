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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 10%;\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    gap: 15px;\n    padding: 20px;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-bottom: solid black 2px;\n    padding: 20px;\n\n\n}\n\n.task-detail-container input {\n    width: 20.5rem;\n}\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #2c974b;\n}\n\n.cancel-button:hover {\n    background-color: #c00f0f;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,UAAU;IACV,SAAS;IACT,aAAa;;;AAGjB;;AAEA;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,aAAa;;;AAGjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,8BAA8B;IAC9B,aAAa;;;AAGjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,kBAAkB;;;AAGtB;;;AAGA;IACI,UAAU;IACV,wBAAwB;IACxB,oBAAoB;;AAExB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,OAAO;;IAEP,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,qBAAqB;IACrB,yCAAyC;IACzC,UAAU;IACV,4BAA4B;IAC5B,kEAAkE;IAClE,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,aAAa;;AAEjB;;;AAGA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,UAAU;AACd;;;AAGA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,UAAU;IACV,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;IACf,qBAAqB;AACzB;;;AAGA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,OAAO;IACP,qBAAqB;AACzB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;;AAEvB;;AAEA;;IAEI,aAAa;IACb,SAAS;IACT,WAAW;AACf;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,yBAAyB;IACzB,uCAAuC;IACvC,kBAAkB;IAClB,wCAAwC;IACxC,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,qBAAqB;IACrB,sHAAsH;IACtH,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;IAC1B,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n\n\n}\n\n.header-container, .header-left-elements-container, .header-left-elements-container, .header-right-elements-container {\n    display: flex;\n    gap: 20px;\n\n}\n\n.header-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: black solid 2px;\n}\n\n\n.main-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.task-sidebar {\n    min-width: 10%;\n    border-right: black solid 2px;\n    padding: 10px;\n\n}\n\n.task-detail-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    gap: 15px;\n    padding: 20px;\n\n\n}\n\n.task {\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n    border-bottom: solid black 2px;\n    padding: 20px;\n\n\n}\n\n.task-detail-container input {\n    width: 20.5rem;\n}\n\n.create-buttonDiv {\n    display: flex;\n    justify-content: center;\n}\n\n.checkbox-container {\n    display: flex;\n    gap: 20px;\n}\n\n.header-middle-element-container {\n\n    width: 75%;\n}\n\n.task-search {\n    width: 100%;\n    border-radius: 20px;\n}\n\nul {\n    list-style: none;\n}\n\n\n.dropdown {\n    display: flex;\n    position: relative;\n\n\n}\n\n\n.dropdown.active > .create-button + .dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n\n}\n\n.dropdown.active > .create-button, .create-button:hover {\n    color: black;\n}\n\n.dropdown-menu {\n    position: absolute;\n    left: 0;\n\n    /*top padding*/\n    top: calc(100% + 1rem);\n    background-color: white;\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 10rem;\n    height: 10rem;\n\n}\n\n\n.create-button {\n    background: none;\n    border: none;\n    text-decoration: none;\n    color: #777;\n    font-size: inherit;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 0;\n}\n\n\ninput:invalid {\n    background-color: #ffdddd;\n    outline: 2px solid red;\n    color: red;\n    border-radius: 5px;\n\n}\n\n.button-list-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.button-list-content button {\n    flex: 1;\n}\n\n.taskfolder-button {\n    padding: 15px 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    /*  border: none;*/\n    background-color: #fff;\n    font-size: 16px;\n    transition: 0.3s ease;\n}\n\n\n.taskfolder-button:hover {\n    background-color: #313744;\n    color: white;\n}\n\n#Taskfolder-button-input-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#Taskfolder-button-input-div-button-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    flex: 1;\n    align-content: center;\n}\n\n#Taskfolder-button-input-div-button-container button {\n    flex: 1;\n}\n\n.tasks-container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.pop-up-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#task-date-container {\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n#popup-button-container {\n\n    display: flex;\n    gap: 10px;\n    width: 100%;\n}\n\n.add-button, .cancel-button {\n    flex: 1;\n    appearance: none;\n    background-color: #2ea44f;\n    border: 1px solid rgba(27, 31, 35, .15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n\n}\n\n.add-button:hover {\n    background-color: #2c974b;\n}\n\n.cancel-button:hover {\n    background-color: #c00f0f;\n}\n\n.cancel-button {\n    background-color: #c41e3a;\n}\n\n\n"],"sourceRoot":""}]);
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
        let editButton = document.createElement('button');


        //taskID = taskID || uniqueId
        console.log(taskID)
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


        checkBox.type = 'checkbox'

        editButton.innerText = 'Edit'

        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).removeTask(task.id, MainTaskFolderContainer.getTaskFolder(currentTaskFolder));
                this.removeTaskFromDom(task.id)
                localStorageRefresh(MainTaskFolderContainer);


            }


        })

        editButton.addEventListener('click', () => {
            taskDate.disabled = false;
            taskInfo.contentEditable = true;
            editButton.innerText = 'Save';
            editButton.addEventListener('click', () => {
                taskDate.disabled = true;
                taskInfo.contentEditable = false;
                editButton.innerText = 'Edit';
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDesciption(taskInfo.innerText);
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDueDate(taskDate.value);

                localStorageRefresh(MainTaskFolderContainer);
            })

        })

        checkBoxContainer.appendChild(checkBox);
        task.appendChild(editButton);
        checkBoxContainer.appendChild(taskInfo);
        task.appendChild(checkBoxContainer);

        task.appendChild(taskDate);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwyQkFBMkIsZ0JBQWdCLFdBQVcsZ0JBQWdCO0FBQ3RFOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUSxlQUFlLGdCQUFnQjtBQUNsRTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLWxlZnQtZWxlbWVudHMtY29udGFpbmVyLCAuaGVhZGVyLXJpZ2h0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcXG59XFxuXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuLnRhc2stZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG5cXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcblxcbn1cXG5cXG4udGFzay1kZXRhaWwtY29udGFpbmVyIGlucHV0IHtcXG4gICAgd2lkdGg6IDIwLjVyZW07XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXItbWlkZGxlLWVsZW1lbnQtY29udGFpbmVyIHtcXG5cXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLnRhc2stc2VhcmNoIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24uYWN0aXZlID4gLmNyZWF0ZS1idXR0b24gKyAuZHJvcGRvd24tbWVudSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuXFxufVxcblxcbi5kcm9wZG93bi5hY3RpdmUgPiAuY3JlYXRlLWJ1dHRvbiwgLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICAvKnRvcCBwYWRkaW5nKi9cXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAxcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNzVyZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG5cXG59XFxuXFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkZGQ7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLmJ1dHRvbi1saXN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLWxpc3QtY29udGVudCBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza2ZvbGRlci1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogIGJvcmRlcjogbm9uZTsqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzc0NDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcC11cC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3Rhc2stZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3BvcHVwLWJ1dHRvbi1jb250YWluZXIge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVhNDRmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzk3NGI7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMGYwZjtcXG59XFxuXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQxZTNhO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25C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Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciwgLmhlYWRlci1sZWZ0LWVsZW1lbnRzLWNvbnRhaW5lciwgLmhlYWRlci1sZWZ0LWVsZW1lbnRzLWNvbnRhaW5lciwgLmhlYWRlci1yaWdodC1lbGVtZW50cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAycHg7XFxufVxcblxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBibGFjayBzb2xpZCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbi50YXNrLWRldGFpbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuXFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG5cXG59XFxuXFxuLnRhc2stZGV0YWlsLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMC41cmVtO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1pZGRsZS1lbGVtZW50LWNvbnRhaW5lciB7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi50YXNrLXNlYXJjaCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSA+IC5jcmVhdGUtYnV0dG9uICsgLmRyb3Bkb3duLW1lbnUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcblxcbn1cXG5cXG4uZHJvcGRvd24uYWN0aXZlID4gLmNyZWF0ZS1idXR0b24sIC5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgLyp0b3AgcGFkZGluZyovXFxuICAgIHRvcDogY2FsYygxMDAlICsgMXJlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuXFxufVxcblxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi5idXR0b24tbGlzdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbi1saXN0LWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tmb2xkZXItYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qICBib3JkZXI6IG5vbmU7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcblxcbi50YXNrZm9sZGVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM3NDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdi1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdi1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrcy1jb250YWluZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wb3AtdXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0YXNrLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNwb3B1cC1idXR0b24tY29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1idXR0b24sIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5NzRiO1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDBmMGY7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MWUzYTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0fSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge3RlLCB0aH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG4vL3RvZG8gQWRkIHdheSB0byBkZWxldGUgdGFzayBmb2xkZXJzXG4vL3RvZG8gd29yayBvbiBjc3Ncbi8vdG9kbyBGaXggYnVnIHdoZXJlIGV4dHJhIEFkZHRhc2tmb2xkZXIgYnV0dG9uIGlzIGNyZWF0ZWQgYmVmb3JlIHlvdSBhZGQgYSB0YXNrIGZvbGRlclxuXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VSZWZyZXNoKGl0ZW0pIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmdldE5hbWUoKSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaGVkXCIpXG5cbn1cblxuZnVuY3Rpb24gVW5pcXVlSWRUb0xvY2FsU3RvcmUodW5pcXVlSWQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pcXVlSWQnLCBKU09OLnN0cmluZ2lmeSh1bmlxdWVJZCkpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gICAgY29uc3QgaXNEcm9wZG93bkJ1dHRvbiA9IGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kcm9wZG93bi1idXR0b25dXCIpO1xuICAgIC8vYXJlIHdlIGluIGRyb3Bkb3duPyBpZ25vcmUgY2xpY2sgaWYgc29cbiAgICBpZiAoIWlzRHJvcGRvd25CdXR0b24gJiYgZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWRyb3Bkb3duXVwiKSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vaWYgd2UgYXJlIGNsaWNraW5nIGRyb3Bkb3duIGFkZCBhY3RpdmUgY2xhc3NcbiAgICBsZXQgY3VycmVudERyb3Bkb3duXG4gICAgaWYgKGlzRHJvcGRvd25CdXR0b24pIHtcbiAgICAgICAgY3VycmVudERyb3Bkb3duID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtZHJvcGRvd25dJyk7XG4gICAgICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvL2Nsb3NlcyBhbGwgZHJvcGRvd25zIHRoYXQgYXJlIG5vdCBzZWxlY3RlZFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kcm9wZG93bl0uYWN0aXZlXCIpLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd24gPT09IGN1cnJlbnREcm9wZG93bikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9KVxufSlcblxuXG4vL3Rlc3RpbmcgaWYgYnJvd3NlciBzdXBwb3J0cyBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAoZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAoZS5jb2RlID09PSAyMiB8fCAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8IC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHwgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJiAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERvbUNvbnRyb2xsZXIge1xuXG4gICAgY2xlYXIoZWxlbWVudCkge1xuICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUFkZFRhc2tGb2xkZXJCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxpc3QtY29udGVudCcpO1xuXG4gICAgICAgIGxldCBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24uaW5uZXJUZXh0ID0gJysgQWRkIFRhc2sgRm9sZGVyJ1xuICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1idXR0b24nKVxuICAgICAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlLXRhc2stZm9sZGVyLWJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0ZvbGRlckJ1dHRvbik7XG5cbiAgICAgICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tGb2xkZXJCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFza0ZvbGRlckJ1dHRvbklucHV0UG9wVXAoKSk7XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVBZGRUYXNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vcmVtb3ZlIHRoaXNcbiAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjcmVhdGVCdXR0b24uaW5uZXJUZXh0ID0gJysgQWRkIFRhc2snXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uJylcbiAgICAgICAgY3JlYXRlQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1idXR0b25EaXYnKVxuXG4gICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pXG5cblxuICAgICAgICB0YXNrRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbkRpdik7XG5cbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhcihjcmVhdGVCdXR0b25EaXYpO1xuICAgICAgICAgICAgY3JlYXRlQnV0dG9uRGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFza0lucHV0UG9wVXAoKSk7XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgY3JlYXRlVGFza0ZvbGRlckJ1dHRvbklucHV0UG9wVXAoKSB7XG4gICAgICAgIGxldCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXG5cbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2LWJ1dHRvbi1jb250YWluZXInKVxuICAgICAgICBpbnB1dERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1Rhc2tmb2xkZXItYnV0dG9uLWlucHV0LWRpdicpXG5cbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyB8fCBNYWluVGFza0ZvbGRlckNvbnRhaW5lci50YXNrRm9sZGVyRXhpc3RzKGlucHV0LnZhbHVlKSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgLy9Ub2RvOiBhZGQgZXJyb3IgbWVzc2FnZSBhbmQgQ1NTIHRvIHNob3cgZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXREaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2tGb2xkZXIgPSBuZXcgVGFza0ZvbGRlcihpbnB1dC52YWx1ZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuYWRkVGFza0ZvbGRlcihuZXdUYXNrRm9sZGVyKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRhc2tGb2xkZXJCdXR0b24obmV3VGFza0ZvbGRlcik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tGb2xkZXIgPSBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKHRhc2tEZXRhaWxDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb2xkZXJCdXR0b24oKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0RGl2U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGFza2ZvbGRlci1idXR0b24taW5wdXQtZGl2Jyk7XG4gICAgICAgICAgICBpbnB1dERpdlNlbGVjdG9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrRm9sZGVyQnV0dG9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpbnB1dERpdlxuXG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0lucHV0UG9wVXAoKSB7XG5cblxuICAgICAgICBsZXQgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLWlucHV0JylcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1pbnB1dCcpXG5cbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXG5cbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG5cblxuICAgICAgICBwb3BVcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3AtdXAtY29udGFpbmVyJyk7XG4gICAgICAgIHBvcFVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wLXVwLWNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KVxuXG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kYXRlLWNvbnRhaW5lcicpXG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wdXAtYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBwb3BVcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZUNvbnRhaW5lcilcbiAgICAgICAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxuXG5cbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW5wdXQnKTtcbiAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpO1xuXG5cbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgJiYgZGF0ZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgZGF0ZScpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0YXNrJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkYXRlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0YXNrJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodW5pcXVlSWQsIHRhc2tJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVCdXR0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbkRpdicpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRhc2tUb0RvbSh0YXNrSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVCdXR0b25EaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcG9wVXBDb250YWluZXI7XG4gICAgfVxuXG5cbiAgICBhZGRUYXNrVG9Eb20odGFza1RleHQsIHRhc2tEYXRlSW5mbywgdGFza0lEID0gdW5pcXVlSWQpIHtcblxuICAgICAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICAgICAgLy90YXNrSUQgPSB0YXNrSUQgfHwgdW5pcXVlSWRcbiAgICAgICAgY29uc29sZS5sb2codGFza0lEKVxuICAgICAgICBpZiAodGFza0lEICE9PSB1bmlxdWVJZCkge1xuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lEKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgdW5pcXVlSWQpXG4gICAgICAgICAgICB1bmlxdWVJZCArPSAxO1xuICAgICAgICAgICAgVW5pcXVlSWRUb0xvY2FsU3RvcmUodW5pcXVlSWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0YXNrRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IHRhc2tEYXRlSW5mbztcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tJRCArICd0YXNrLWRhdGUnKVxuICAgICAgICB0YXNrRGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNvbnRhaW5lcicpXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpXG4gICAgICAgIHRhc2tJbmZvLmlubmVyVGV4dCA9IHRhc2tUZXh0O1xuXG5cbiAgICAgICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCdcblxuICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9ICdFZGl0J1xuXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyKGN1cnJlbnRUYXNrRm9sZGVyKS5yZW1vdmVUYXNrKHRhc2suaWQsIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2tGcm9tRG9tKHRhc2suaWQpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlUmVmcmVzaChNYWluVGFza0ZvbGRlckNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9ICdTYXZlJztcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0RhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRhc2tJbmZvLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLmdldFRhc2sodGFzay5pZCkuc2V0RGVzY2lwdGlvbih0YXNrSW5mby5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoY3VycmVudFRhc2tGb2xkZXIpLmdldFRhc2sodGFzay5pZCkuc2V0RHVlRGF0ZSh0YXNrRGF0ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cblxuICAgICAgICB0YXNrRGV0YWlsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrSW5mbyArICdkaXYnKVxuXG4gICAgICAgIHRhc2tEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG5cblxuICAgIH1cblxuXG4gICAgcmVtb3ZlVGFza0Zyb21Eb20odGFza0lkKSB7XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza0lkKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0lkICsgJyByZW1vdmVkIGZyb20gZG9tJylcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcblxuXG4gICAgfVxuXG4gICAgUG9wdWxhdGVGb2xkZXJCdXR0b25zRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IHRhc2tGb2xkZXJMaXN0ID0gTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgQ1NTLmVzY2FwZSh0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza0ZvbGRlckJ1dHRvbih0YXNrRm9sZGVyTGlzdFtpXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlckxpc3RbaV0uZ2V0TmFtZSgpfWJ1dHRvbiBhbHJlYWR5IGV4aXN0c2ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgIGxldCB0YXNrbGlzdCA9IFtdXG4gICAgICAgIGxldCB0YXNrSURTID0gW11cbiAgICAgICAgbGV0IHRhc2tGb2xkZXJJbmRleCA9IDBcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVGFza0ZvbGRlckNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIFN0b3JhZ2UgUG9wdWxhdGVkXCIpXG4gICAgICAgICAgICBsZXQgdGVtcFRhc2tGb2xkZXJDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrRm9sZGVyQ29udGFpbmVyJykpLl90YXNrRm9sZGVyTGlzdDtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnNldFRhc2tGb2xkZXJMaXN0KHRlbXBUYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLnNldFRhc2tGb2xkZXJDbGFzcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVyTGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlckxpc3QoKVtpXS5zZXRUYXNrQ2xhc3MoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrbGlzdCA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXIoa2V5KS5nZXRUYXNrTGlzdCgpO1xuXG4gICAgICAgICAgICB0YXNrRm9sZGVySW5kZXggPSBNYWluVGFza0ZvbGRlckNvbnRhaW5lci5nZXRUYXNrRm9sZGVySW5kZXgoa2V5KVxuICAgICAgICAgICAgdGFza0lEUyA9IE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmdldFRhc2tGb2xkZXJMaXN0KClbdGFza0ZvbGRlckluZGV4XS5nZXRUYXNrSURTKClcblxuICAgICAgICAgICAgdW5pcXVlSWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXF1ZUlkJykpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIENTUy5lc2NhcGUodGFza0lEU1tpXSkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tsaXN0W2ldLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Eb20odGFza2xpc3RbaV0uZ2V0RGVzY3JpcHRpb24oKSwgdGFza2xpc3RbaV0uZ2V0RHVlRGF0ZSgpLCB0YXNrbGlzdFtpXS5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGl2ICR7dGFza0lEU1tpXX0gaXMgQWxyZWFkeSBpbiBET01gKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKSA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlBvcHVsYXRlRm9sZGVyQnV0dG9uc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB9IGVsc2UgLyplbHNlIGlmIGFkZGl0aW9uYWwgZm9sZGVyIGNoZWNrKi8ge1xuICAgICAgICAgICAgbGV0IE1haW5UYXNrRm9sZGVyID0gbmV3IFRhc2tGb2xkZXIoJ01haW4nLCBudWxsKTtcbiAgICAgICAgICAgIE1haW5UYXNrRm9sZGVyQ29udGFpbmVyLmFkZFRhc2tGb2xkZXIoTWFpblRhc2tGb2xkZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXCIpXG4gICAgICAgICAgICAvL3RoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uRGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjcmVhdGVUYXNrRm9sZGVyQnV0dG9uKG5ld1Rhc2tGb2xkZXIpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uTGlzdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxpc3QtY29udGVudCcpO1xuICAgICAgICBsZXQgdGFza0ZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRm9sZGVyQnV0dG9uLmlubmVyVGV4dCA9IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpO1xuICAgICAgICB0YXNrRm9sZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdUYXNrRm9sZGVyLmdldE5hbWUoKSk7XG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFza2ZvbGRlci1idXR0b24nKTtcblxuXG4gICAgICAgIHRhc2tGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50VGFza0ZvbGRlciA9IG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBjdXJyZW50IHRhc2tmb2xkZXIgaGFzIGJlZW4gY2hhbmdlZCB0byAke2N1cnJlbnRUYXNrRm9sZGVyfWApXG4gICAgICAgICAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIodGFza0RldGFpbENvbnRhaW5lcilcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVEb21Gcm9tTG9jYWxTdG9yYWdlKG5ld1Rhc2tGb2xkZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgYnV0dG9uTGlzdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0ZvbGRlckJ1dHRvbik7XG5cbiAgICB9XG59XG5cblxuY2xhc3MgVGFzayB7XG4gICAgLy9sZXQgdXNlciBjcmVhdGUgbmFtZSBzbyBpdCdzIGVhc3kgdG8gZmluZCB0YXNrIGZvIG1vZGlmeVxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERlc2NpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG59XG5cbmNsYXNzIFRhc2tGb2xkZXJDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3QgPSBbXVxuICAgIH1cblxuICAgIC8vR2V0dGVyc1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlckxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrRm9sZGVyTGlzdDtcbiAgICB9XG5cbiAgICBzZXRUYXNrRm9sZGVyTGlzdCh0YXNrRm9sZGVyTGlzdCkge1xuICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdCA9IFsuLi50YXNrRm9sZGVyTGlzdF07XG4gICAgfVxuXG4gICAgc2V0VGFza0ZvbGRlckNsYXNzKCkge1xuICAgICAgICAvL3JlbW92ZXMgYWxsIHZhbHVlcyBmcm9tIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldID0gbmV3IFRhc2tGb2xkZXIodGhpcy5fdGFza0ZvbGRlckxpc3RbaV0uX25hbWUsIHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLl90YXNrTGlzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFRhc2tGb2xkZXIodGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza0ZvbGRlckV4aXN0cyh0YXNrRm9sZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBGb2xkZXIgQWxyZWFkeSBFeGlzdHNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrRm9sZGVyTGlzdC5wdXNoKHRhc2tGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVJlZnJlc2goTWFpblRhc2tGb2xkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWUudG9TdHJpbmcoKX0gYWRkZWQgdG8gJHt0aGlzLmdldE5hbWUoKX0gY29udGFpbmVyYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrRm9sZGVyKHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFza0ZvbGRlckxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VSZWZyZXNoKE1haW5UYXNrRm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGFza0ZvbGRlck5hbWV9IHJlbW92ZWQgZnJvbSAke3RoaXMuZ2V0TmFtZSgpfSBjb250YWluZXJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlcih0YXNrRm9sZGVyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50YXNrRm9sZGVyRXhpc3RzKHRhc2tGb2xkZXJOYW1lKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YXNrRm9sZGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkgPT09IHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXNrRm9sZGVyTGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgRm9sZGVyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza0ZvbGRlckluZGV4KHRhc2tGb2xkZXJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tGb2xkZXJFeGlzdHModGFza0ZvbGRlck5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSA9PT0gdGFza0ZvbGRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIEZvbGRlciBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0ZvbGRlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tGb2xkZXJMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIFRhc2tGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tsaXN0KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICBpZiAodGFza2xpc3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza2xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KHRhc2tMaXN0KSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rhc2tMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vaGVscGVyc1xuICAgIGFkZFRhc2soVGFzaykge1xuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKFRhc2suZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaChUYXNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke1Rhc2suZ2V0TmFtZSgpfSBhZGRlZCB0byAke3RoaXMuZ2V0TmFtZSgpfSBmb2xkZXJgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coTWFpblRhc2tGb2xkZXJDb250YWluZXIuZ2V0VGFza0ZvbGRlcihjdXJyZW50VGFza0ZvbGRlcikuZ2V0VGFza0xpc3QoKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcblxuICAgICAgICBpZiAodGhpcy50YXNrRXhpc3RzKHRhc2tJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0LnNwbGljZSh0aGlzLl90YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldE5hbWUoKS50b1N0cmluZygpID09PSB0YXNrSWQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Rhc2tJZH0gcmVtb3ZlZCBmcm9tICR7dGhpcy5nZXROYW1lKCl9IGZvbGRlcmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRUYXNrTGlzdCgpKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGRvZXNuJ3QgZXhpc3RcIilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0VGFza0NsYXNzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdFtpXSA9IG5ldyBUYXNrKHRoaXMuX3Rhc2tMaXN0W2ldLl9uYW1lLCB0aGlzLl90YXNrTGlzdFtpXS5fZGVzY3JpcHRpb24sIHRoaXMuX3Rhc2tMaXN0W2ldLl9kdWVEYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdGFza0V4aXN0cyh0YXNrSWQpIHtcblxuICAgICAgICBsZXQgdGFza0ZvbGRlckxpc3QgPSB0aGlzLmdldFRhc2tMaXN0KCk7XG4gICAgICAgIGxldCBkb2VzRXhpc3Q7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tGb2xkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFza0lkID09PSB0YXNrRm9sZGVyTGlzdFtpXS5nZXROYW1lKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRvZXNFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvZXNFeGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tFeGlzdHModGFza0lkKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0W3RoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleCh0YXNrID0+IHRhc2suZ2V0TmFtZSgpLnRvU3RyaW5nKCkgPT09IHRhc2tJZCldO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRUYXNrSURTKCkge1xuICAgICAgICBsZXQgdGFza0lEUyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrSURTLnB1c2godGhpcy5fdGFza0xpc3RbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza0lEUztcbiAgICB9XG5cbn1cblxuXG5jb25zdCBDUkVBVEVfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmNvbnN0IG15dGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrZm9sZGVyLWJ1dHRvbicpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgY3JlYXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b25EaXYnKVxuY29uc3QgbWFpbkZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNYWluLWZvbGRlci1idXR0b24nKTtcblxuLy9HbG9iYWwgVmFyaWFibGVzXG5cbmxldCBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcbmxldCBNYWluVGFza0ZvbGRlckNvbnRhaW5lciA9IG5ldyBUYXNrRm9sZGVyQ29udGFpbmVyKCdUYXNrRm9sZGVyQ29udGFpbmVyJyk7XG5cblxubWFpbkZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjdXJyZW50VGFza0ZvbGRlciA9ICdNYWluJztcbiAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgdGFza2ZvbGRlciBoYXMgYmVlbiBjaGFuZ2VkIHRvICR7Y3VycmVudFRhc2tGb2xkZXJ9YClcbiAgICBsZXQgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrRGV0YWlsQ29udGFpbmVyLmNsYXNzTmFtZSlcbiAgICBkb21Db250cm9sLmNsZWFyKHRhc2tEZXRhaWxDb250YWluZXIpXG4gICAgZG9tQ29udHJvbC5wb3B1bGF0ZURvbUZyb21Mb2NhbFN0b3JhZ2UoJ01haW4nKTtcbn0pXG4vL1VzZWQgdG8gbGFiZWwgdGFza3Mgd2l0aCB1bmlxdWUgaWQgKGJvdGggaW4gZG9tIGFuZCBpbiB0YXNrRm9sZGVyKVxubGV0IHVuaXF1ZUlkID0gMDtcblxuXG5sZXQgZG9tQ29udHJvbCA9IG5ldyBEb21Db250cm9sbGVyKCk7XG5cbmRvbUNvbnRyb2wucG9wdWxhdGVEb21Gcm9tTG9jYWxTdG9yYWdlKCdNYWluJyk7XG5cbmRvbUNvbnRyb2wuY3JlYXRlQWRkVGFza0ZvbGRlckJ1dHRvbigpXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
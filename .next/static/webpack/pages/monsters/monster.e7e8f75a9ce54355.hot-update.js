"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/monsters/monster",{

/***/ "./pages/monsters/monster.js":
/*!***********************************!*\
  !*** ./pages/monsters/monster.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ethereum_monster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ethereum/monster */ \"./ethereum/monster.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar MonsterNew = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(MonsterNew, Component1);\n    var _super = _createSuper(MonsterNew);\n    function MonsterNew() {\n        _classCallCheck(this, MonsterNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), // renderCards()\n        \"state\", {\n            name: '',\n            errorMessage: '',\n            loading: false\n        });\n        var _this1 = _assertThisInitialized(_this);\n        _defineProperty(_assertThisInitialized(_this), \"onSubmit\", function() {\n            var _ref = _asyncToGenerator(_Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                return _Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            _this1.setState({\n                                loading: true,\n                                errorMessage: ''\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            // try {\n            //   const accounts = await web3.eth.getAccounts();\n            //   await address.methods.createMonster(this.state.name)\n            //   .send({\n            //     from: accounts[0]\n            //   });\n            //   Router.pushRoute('/')\n            // } catch (err) {\n            //     this.setState({errorMessage: err.message });\n            // }\n            // this.setState({loading: false})\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(MonsterNew, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Create a New Monster!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                            lineNumber: 50,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                            error: !!this.state.errorMessage,\n                            onSubmit: this.onSubmit,\n                            address: this.props.address,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                            value: this.state.name,\n                                            onChange: function(event) {\n                                                return _this.setState({\n                                                    name: event.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                                    error: true,\n                                    header: \"Ooops!\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    loading: this.state.loading,\n                                    primary: true,\n                                    children: \"Create!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macdecker/projects/newCrypto/game-dapp/pages/monsters/monster.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return _asyncToGenerator(_Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var owner, a, mon;\n                    return _Users_macdecker_projects_newCrypto_game_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(props.query.address + \"!\");\n                                owner = (0,_ethereum_monster__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(props.query.address);\n                                _ctx.next = 4;\n                                return owner.methods.getMonsterCount().call();\n                            case 4:\n                                a = _ctx.sent;\n                                _ctx.next = 7;\n                                return owner.methods.getSummary(0).call();\n                            case 7:\n                                mon = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: props.query.address,\n                                    strength: mon[0].strength\n                                });\n                            case 9:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return MonsterNew;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonsterNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb25zdGVycy9tb25zdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3dCO0FBQ3BCO0FBQ0E7QUFDTjtBQUNEO0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNDVyxVQUFVLGlCQUFoQixRQUFROzs7O2FBQUZBLFVBQVU7Ozs7dURBYWQsRUFBZ0I7UUFFaEJDLENBQUssUUFBRyxDQUFDO1lBQ1BDLElBQUksRUFBRSxDQUFFO1lBQ1JDLFlBQVksRUFBRSxDQUFFO1lBQ2hCQyxPQUFPLEVBQUUsS0FBSztRQUNoQixDQUFDOzt1REFHREMsQ0FBUTtrTUFBRyxRQUFRLFNBQURDLEtBQUssRUFBSyxDQUFDOzs7OzRCQUMzQkEsS0FBSyxDQUFDQyxjQUFjO21DQUNmQyxRQUFRLENBQUMsQ0FBQ0o7Z0NBQUFBLE9BQU8sRUFBRSxJQUFJO2dDQUFFRCxZQUFZLEVBQUUsQ0FBRTs0QkFBQSxDQUFDOzs7Ozs7WUFDL0MsRUFBUTtZQUNSLEVBQW1EO1lBQ25ELEVBQXlEO1lBQ3pELEVBQVk7WUFDWixFQUF3QjtZQUN4QixFQUFRO1lBQ1IsRUFBMEI7WUFDMUIsRUFBa0I7WUFDbEIsRUFBbUQ7WUFDbkQsRUFBSTtZQUNKLEVBQWtDO1lBQ3BDLENBQUM7NEJBZGlCRyxLQUFLOzs7Ozs7OztZQWdCdkJHLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUUsQ0FBQzs7Z0JBQ1AsTUFBTSw2RUFDTGQsMERBQU07O29HQUNKZSxDQUFFO3NDQUFDLENBQXFCOzs7Ozs7b0dBQ3hCbkIsbURBQUk7NEJBQUNvQixLQUFLLElBQUksSUFBSSxDQUFDVixLQUFLLENBQUNFLFlBQVk7NEJBQUVFLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7NEJBQUVPLE9BQU8sRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsT0FBTzs7NEdBQ3pGckIseURBQVU7O29IQUNSd0IsQ0FBSztzREFBQyxDQUFJOzs7Ozs7b0hBQ1Z0QixvREFBSzs0Q0FDSnVCLEtBQUssRUFBSSxJQUFJLENBQUNmLEtBQUssQ0FBQ0MsSUFBSTs0Q0FDeEJlLFFBQVEsRUFBRVgsUUFBUSxDQUFSQSxLQUFLO2dEQUFJLE1BQU0sT0FBREUsUUFBUSxDQUFDLENBQUNOO29EQUFBQSxJQUFJLEVBQUVJLEtBQUssQ0FBQ1ksTUFBTSxDQUFDRixLQUFLO2dEQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7NEdBSTlEdEIsc0RBQU87b0NBQUNpQixLQUFLO29DQUFDUSxNQUFNLEVBQUMsQ0FBUTtvQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0UsWUFBWTs7Ozs7OzRHQUM5RFgscURBQU07b0NBQUNZLE9BQU8sRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0csT0FBTztvQ0FBRWlCLE9BQU87OENBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUTFELENBQUM7Ozs7WUExRFlDLEdBQWUsRUFBZkEsQ0FBZTttQkFBNUIsUUFBUSxDQUFLQSxlQUFlLENBQUNULEtBQUs7a01BQWxDLFFBQVEsV0FBMkIsQ0FBQzt3QkFFNUJVLEtBQUssRUFDTEMsQ0FBQyxFQUNEQyxHQUFHOzs7O2dDQUhUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsS0FBSyxDQUFDZSxLQUFLLENBQUNoQixPQUFPLEdBQUMsQ0FBRztnQ0FDN0JXLEtBQUssR0FBR3hCLDZEQUFZLENBQUNjLEtBQUssQ0FBQ2UsS0FBSyxDQUFDaEIsT0FBTzs7dUNBQzlCVyxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsZUFBZSxHQUFHQyxJQUFJOztnQ0FBOUNQLENBQUM7O3VDQUNXRCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0csVUFBVSxDQUFDLENBQUMsRUFBRUQsSUFBSTs7Z0NBQTVDTixHQUFHOzZEQUNGLENBQUM7b0NBQ05iLE9BQU8sRUFBRUMsS0FBSyxDQUFDZSxLQUFLLENBQUNoQixPQUFPO29DQUM1QnFCLFFBQVEsRUFBRVIsR0FBRyxDQUFDLENBQUMsRUFBRVEsUUFBUTtnQ0FDM0IsQ0FBQzs7Ozs7O2dCQUNILENBQUM7Ozs7O0VBWHNCM0MsNENBQVM7QUErRGxDLCtEQUFlVSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9uc3RlcnMvbW9uc3Rlci5qcz9mNGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcbmltcG9ydCBtb25zdGVyT3duZXIgZnJvbSAnLi4vLi4vZXRoZXJldW0vbW9uc3Rlcic7XG5cbmNsYXNzIE1vbnN0ZXJOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuICAgIGNvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MrXCIhXCIpO1xuICAgIGNvbnN0IG93bmVyID0gbW9uc3Rlck93bmVyKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIGNvbnN0IGEgPSBhd2FpdCBvd25lci5tZXRob2RzLmdldE1vbnN0ZXJDb3VudCgpLmNhbGwoKTtcbiAgICBjb25zdCBtb24gPSBhd2FpdCBvd25lci5tZXRob2RzLmdldFN1bW1hcnkoMCkuY2FsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAgICAgc3RyZW5ndGg6IG1vblswXS5zdHJlbmd0aFxuICAgIH07XG4gIH1cblxuICAvLyByZW5kZXJDYXJkcygpXG5cbiAgc3RhdGUgPSB7XG4gICAgbmFtZTogJycsXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KVxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgLy8gICBhd2FpdCBhZGRyZXNzLm1ldGhvZHMuY3JlYXRlTW9uc3Rlcih0aGlzLnN0YXRlLm5hbWUpXG4gICAgLy8gICAuc2VuZCh7XG4gICAgLy8gICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIFJvdXRlci5wdXNoUm91dGUoJy8nKVxuICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vIH1cbiAgICAvLyB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXG4gIH07XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPkNyZWF0ZSBhIE5ldyBNb25zdGVyITwvaDE+XG4gICAgICA8Rm9ybSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PkNyZWF0ZSE8L0J1dHRvbj5cblxuICAgICAgPC9Gb3JtPlxuXG5cblxuICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb25zdGVyTmV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwibW9uc3Rlck93bmVyIiwiTW9uc3Rlck5ldyIsInN0YXRlIiwibmFtZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImgxIiwiZXJyb3IiLCJhZGRyZXNzIiwicHJvcHMiLCJGaWVsZCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwib3duZXIiLCJhIiwibW9uIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwibWV0aG9kcyIsImdldE1vbnN0ZXJDb3VudCIsImNhbGwiLCJnZXRTdW1tYXJ5Iiwic3RyZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/monsters/monster.js\n");

/***/ })

});
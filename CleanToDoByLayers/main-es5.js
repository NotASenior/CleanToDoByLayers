var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/modal-container/modal-container.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/modal-container/modal-container.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"id\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <h4>{{title}}</h4>\r\n    <div>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"javascript:\" class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"onYesClick()\">Sí</a>\r\n    <a href=\"javascript:\" class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"onNoClick()\">No</a>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/navbar/navbar.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/navbar/navbar.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"indigo\">\r\n  <div class=\"nav-wrapper show-on-large\">\r\n    <a href=\"javascript:\" [routerLink]=\"'/notes'\" class=\"brand-logo show-on-large\">\r\n      &nbsp;\r\n      <i *ngIf=\"showGoBackButton\" class=\"material-icons\">arrow_back</i>\r\n      Clean ToDo Notes</a>\r\n  </div>\r\n</nav>\r\n<br>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note-form/note-form.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note-form/note-form.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar\r\n  [showGoBackButton]=\"false\"></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <form class=\"col s12\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <input id=\"title\" name=\"title\" type=\"text\" class=\"validate\" [(ngModel)]=\"note.title\">\r\n          <label class=\"active\" for=\"title\">Título</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <textarea id=\"content\" name=\"content\" class=\"materialize-textarea\" [(ngModel)]=\"note.content\"></textarea>\r\n          <label for=\"content\">Contenido</label>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fixed-action-btn\">\r\n  <a class=\"btn-floating btn-large pink accent-2\" (click)=\"save()\">\r\n    <i class=\"large material-icons\">save</i>\r\n  </a>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note/note.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note/note.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar\r\n  [showGoBackButton]=\"true\"></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col s12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <span class=\"card-title\"><strong>{{note.getId()}}. {{note.getTitle()}}</strong></span>\r\n          <small class=\"grey-text\">\r\n            {{note.getUpdatedAt().toISOString().substr(0, 10)}}\r\n            <span>{{note.getUpdatedAt().toISOString().substr(11, 5)}}</span>\r\n          </small>\r\n          <br>\r\n          <br>\r\n          <p>{{note.getContent()}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fixed-action-btn\">\r\n  <a class=\"btn-floating btn-large pink accent-2\" [routerLink]=\"'/note-form/' + note.getId()\">\r\n    <i class=\"large material-icons\">mode_edit</i>\r\n  </a>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/notes/notes.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/notes/notes.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar\r\n  [showGoBackButton]=\"false\"></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m4\"\r\n      *ngFor=\"let note of notes\">\r\n      <div class=\"card hoverable\">\r\n        <div class=\"card-content\">\r\n          <span class=\"card-title\"><strong>{{note.getId()}}. {{note.getTitle()}}</strong></span>\r\n          <small class=\"grey-text\">\r\n            {{note.getUpdatedAt().toISOString().substr(0, 10)}}\r\n            <span>{{note.getUpdatedAt().toISOString().substr(11, 5)}}</span>\r\n          </small>\r\n          <br>\r\n          <br>\r\n          <p>{{note.getContent()}}</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a class=\"indigo-text\" href=\"javascript:\" [routerLink]=\"'/note/' + note.getId()\">VER</a>\r\n          <a data-target=\"delete-modal\" class=\"pink-text text-accent-2 right modal-trigger\" href=\"javascript:\"\r\n            (click)=\"setNoteToDelete(note)\">ELIMINAR</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-modal-container\r\n  [id]=\"'delete-modal'\"\r\n  [title]=\"'Confirmación'\"\r\n  (yesClick)=\"delete(noteToDelete)\">\r\n  <p>¿Está seguro de que desea eliminar la nota?'</p>\r\n</app-modal-container>\r\n\r\n<div class=\"fixed-action-btn\">\r\n  <a class=\"btn-floating btn-large pink accent-2\" [routerLink]=\"'/note-form'\">\r\n    <i class=\"large material-icons\">add</i>\r\n  </a>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _presentation_components_notes_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation/components/notes/notes.component */ "./src/app/presentation/components/notes/notes.component.ts");
            /* harmony import */ var _presentation_components_note_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentation/components/note/note.component */ "./src/app/presentation/components/note/note.component.ts");
            /* harmony import */ var _presentation_components_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation/components/note-form/note-form.component */ "./src/app/presentation/components/note-form/note-form.component.ts");
            var routes = [{
                    path: '',
                    component: _presentation_components_notes_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]
                }, {
                    path: 'notes',
                    component: _presentation_components_notes_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]
                }, {
                    path: 'note/:id',
                    component: _presentation_components_note_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]
                }, {
                    path: 'note-form',
                    component: _presentation_components_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_5__["NoteFormComponent"]
                }, {
                    path: 'note-form/:id',
                    component: _presentation_components_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_5__["NoteFormComponent"]
                }];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'CleanToDoByLayers';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _presentation_components_notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation/components/notes/notes.component */ "./src/app/presentation/components/notes/notes.component.ts");
            /* harmony import */ var _presentation_components_note_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation/components/note/note.component */ "./src/app/presentation/components/note/note.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _presentation_components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentation/components/common/navbar/navbar.component */ "./src/app/presentation/components/common/navbar/navbar.component.ts");
            /* harmony import */ var _presentation_components_common_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentation/components/common/modal-container/modal-container.component */ "./src/app/presentation/components/common/modal-container/modal-container.component.ts");
            /* harmony import */ var _presentation_components_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presentation/components/note-form/note-form.component */ "./src/app/presentation/components/note-form/note-form.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _presentation_components_notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"],
                        _presentation_components_note_note_component__WEBPACK_IMPORTED_MODULE_6__["NoteComponent"],
                        _presentation_components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                        _presentation_components_common_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_9__["ModalContainerComponent"],
                        _presentation_components_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_10__["NoteFormComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/data/repository/mock/note-mock-repository.service.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/data/repository/mock/note-mock-repository.service.ts ***!
          \**********************************************************************/
        /*! exports provided: NoteMockRepository */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteMockRepository", function () { return NoteMockRepository; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _domain_entity_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/entity/note */ "./src/app/domain/entity/note.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var NoteMockRepository = /** @class */ (function () {
                function NoteMockRepository() {
                    this.notes = new Array();
                    this.init();
                }
                NoteMockRepository.prototype.init = function () {
                    this.notes.push(new _domain_entity_note__WEBPACK_IMPORTED_MODULE_2__["Note"]()
                        .setId(1)
                        .setTitle('Nota 1')
                        .setContent('Contenido de la nota 1')
                        .setActive(true)
                        .setCreatedAt(new Date(2019, 1, 1))
                        .setUpdatedAt(new Date(2019, 2, 1)));
                    this.notes.push(new _domain_entity_note__WEBPACK_IMPORTED_MODULE_2__["Note"]()
                        .setId(2)
                        .setTitle('Nota 2')
                        .setContent('Contenido de la nota 2')
                        .setActive(true)
                        .setCreatedAt(new Date(2019, 1, 2))
                        .setUpdatedAt(new Date(2019, 2, 2)));
                    this.notes.push(new _domain_entity_note__WEBPACK_IMPORTED_MODULE_2__["Note"]()
                        .setId(3)
                        .setTitle('Nota 3')
                        .setContent('Contenido de la nota 3')
                        .setActive(true)
                        .setCreatedAt(new Date(2019, 1, 3))
                        .setUpdatedAt(new Date(2019, 2, 3)));
                };
                NoteMockRepository.prototype.create = function (toCreate) {
                    toCreate.setId(this.notes.length + 1);
                    toCreate.setActive(true);
                    toCreate.setCreatedAt(new Date());
                    toCreate.setUpdatedAt(new Date());
                    this.notes.push(toCreate);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
                };
                NoteMockRepository.prototype.delete = function (toDelete) {
                    this.notes = this.notes.filter(function (note) {
                        return note.getId() !== toDelete.getId();
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
                };
                NoteMockRepository.prototype.get = function (filter) {
                    var filteredNotes = this.getAll(filter);
                    return filteredNotes
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (notes) {
                        return notes.pop();
                    }));
                };
                NoteMockRepository.prototype.getAll = function (filter) {
                    if ((filter.getId() == null || filter.getId() === undefined || filter.getId() === 0)
                        && (filter.getTitle() == null || filter.getTitle() === undefined || filter.getTitle().length === 0)
                        && (filter.getTitle() == null || filter.getTitle() === undefined || filter.getTitle().length === 0)) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.notes);
                    }
                    var filteredNotes = this.notes.filter(function (note) {
                        if (filter.getId() > 0 && note.getId() === filter.getId()) {
                            return true;
                        }
                        if (filter.getTitle() != null && filter.getTitle().length > 0 && note.getTitle().includes(filter.getTitle())) {
                            return true;
                        }
                        if (filter.getContent() != null && filter.getContent().length > 0 && note.getContent().includes(filter.getContent())) {
                            return true;
                        }
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filteredNotes);
                };
                NoteMockRepository.prototype.getById = function (id) {
                    return this.get(new _domain_entity_note__WEBPACK_IMPORTED_MODULE_2__["Note"]().setId(id));
                };
                NoteMockRepository.prototype.update = function (toUpdate) {
                    var _this = this;
                    toUpdate.setUpdatedAt(new Date());
                    var currentNoteObservable = this.getById(toUpdate.getId());
                    currentNoteObservable
                        .subscribe(function (note) {
                        note.setTitle(toUpdate.getTitle() != null && toUpdate.getTitle().length > 0
                            ? toUpdate.getTitle()
                            : note.getTitle());
                        note.setContent(toUpdate.getContent() != null && toUpdate.getContent().length > 0
                            ? toUpdate.getContent()
                            : note.getContent());
                        var i = 0;
                        for (var _i = 0, _a = _this.notes; _i < _a.length; _i++) {
                            var currentNote = _a[_i];
                            if (currentNote.getId() === note.getId()) {
                                _this.notes[i] = note;
                                break;
                            }
                            i++;
                        }
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
                };
                return NoteMockRepository;
            }());
            NoteMockRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NoteMockRepository);
            /***/ 
        }),
        /***/ "./src/app/dependency/interactor.factory.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dependency/interactor.factory.ts ***!
          \**************************************************/
        /*! exports provided: InteractorDependencies */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractorDependencies", function () { return InteractorDependencies; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _domain_usecase_add_note_add_note_interactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/usecase/add-note/add-note-interactor */ "./src/app/domain/usecase/add-note/add-note-interactor.ts");
            /* harmony import */ var _domain_usecase_edit_note_edit_note_interactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/usecase/edit-note/edit-note-interactor */ "./src/app/domain/usecase/edit-note/edit-note-interactor.ts");
            /* harmony import */ var _domain_usecase_get_note_get_note_interactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/usecase/get-note/get-note-interactor */ "./src/app/domain/usecase/get-note/get-note-interactor.ts");
            /* harmony import */ var _domain_usecase_get_notes_get_notes_interactor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/usecase/get-notes/get-notes-interactor */ "./src/app/domain/usecase/get-notes/get-notes-interactor.ts");
            /* harmony import */ var _domain_usecase_delete_note_delete_note_interactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/usecase/delete-note/delete-note-interactor */ "./src/app/domain/usecase/delete-note/delete-note-interactor.ts");
            var InteractorDependencies = {
                addNoteInteractor: new _domain_usecase_add_note_add_note_interactor__WEBPACK_IMPORTED_MODULE_1__["AddNoteInteractor"](),
                editNoteInteractor: new _domain_usecase_edit_note_edit_note_interactor__WEBPACK_IMPORTED_MODULE_2__["EditNoteInteractor"](),
                getNoteInteractor: new _domain_usecase_get_note_get_note_interactor__WEBPACK_IMPORTED_MODULE_3__["GetNoteInteractor"](),
                getNotesInteractor: new _domain_usecase_get_notes_get_notes_interactor__WEBPACK_IMPORTED_MODULE_4__["GetNotesInteractor"](),
                deleteNoteInteractor: new _domain_usecase_delete_note_delete_note_interactor__WEBPACK_IMPORTED_MODULE_5__["DeleteNoteInteractor"](),
            };
            /***/ 
        }),
        /***/ "./src/app/domain/entity/entity.ts": 
        /*!*****************************************!*\
          !*** ./src/app/domain/entity/entity.ts ***!
          \*****************************************/
        /*! exports provided: Entity */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function () { return Entity; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Entity = /** @class */ (function () {
                function Entity() {
                }
                Entity.prototype.getId = function () {
                    return this.id;
                };
                Entity.prototype.isActive = function () {
                    return this.active;
                };
                Entity.prototype.getCreatedAt = function () {
                    return this.createdAt;
                };
                Entity.prototype.getUpdatedAt = function () {
                    return this.updatedAt;
                };
                Entity.prototype.setId = function (id) {
                    this.id = id;
                    return this;
                };
                Entity.prototype.setActive = function (active) {
                    this.active = active;
                    return this;
                };
                Entity.prototype.setCreatedAt = function (createdAt) {
                    this.createdAt = createdAt;
                    return this;
                };
                Entity.prototype.setUpdatedAt = function (updatedAt) {
                    this.updatedAt = updatedAt;
                    return this;
                };
                return Entity;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/entity/note.ts": 
        /*!***************************************!*\
          !*** ./src/app/domain/entity/note.ts ***!
          \***************************************/
        /*! exports provided: Note */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function () { return Note; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/app/domain/entity/entity.ts");
            var Note = /** @class */ (function (_super) {
                __extends(Note, _super);
                function Note() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Note.prototype.getTitle = function () {
                    return this.title;
                };
                Note.prototype.getContent = function () {
                    return this.content;
                };
                Note.prototype.setTitle = function (title) {
                    this.title = title;
                    return this;
                };
                Note.prototype.setContent = function (content) {
                    this.content = content;
                    return this;
                };
                return Note;
            }(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/add-note/add-note-interactor.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/domain/usecase/add-note/add-note-interactor.ts ***!
          \****************************************************************/
        /*! exports provided: AddNoteInteractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteInteractor", function () { return AddNoteInteractor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _add_note_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-note-response */ "./src/app/domain/usecase/add-note/add-note-response.ts");
            var AddNoteInteractor = /** @class */ (function () {
                function AddNoteInteractor() {
                    this.noteMapper = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].noteMapper;
                    this.noteRepository = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].noteRepository;
                }
                AddNoteInteractor.prototype.execute = function (request) {
                    var note = this.noteMapper.mapModelToEntity(request.getNote());
                    var response = this.noteRepository.create(note);
                    return new _add_note_response__WEBPACK_IMPORTED_MODULE_2__["AddNoteResponse"](response);
                };
                return AddNoteInteractor;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/add-note/add-note-request.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/domain/usecase/add-note/add-note-request.ts ***!
          \*************************************************************/
        /*! exports provided: AddNoteRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteRequest", function () { return AddNoteRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AddNoteRequest = /** @class */ (function () {
                function AddNoteRequest(note) {
                    this.note = note;
                }
                AddNoteRequest.prototype.getNote = function () {
                    return this.note;
                };
                return AddNoteRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/add-note/add-note-response.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/domain/usecase/add-note/add-note-response.ts ***!
          \**************************************************************/
        /*! exports provided: AddNoteResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteResponse", function () { return AddNoteResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AddNoteResponse = /** @class */ (function () {
                function AddNoteResponse(response) {
                    this.response = response;
                }
                AddNoteResponse.prototype.getResponse = function () {
                    return this.response;
                };
                return AddNoteResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/delete-note/delete-note-interactor.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/domain/usecase/delete-note/delete-note-interactor.ts ***!
          \**********************************************************************/
        /*! exports provided: DeleteNoteInteractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNoteInteractor", function () { return DeleteNoteInteractor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _entity_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entity/note */ "./src/app/domain/entity/note.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _delete_note_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-note-response */ "./src/app/domain/usecase/delete-note/delete-note-response.ts");
            var DeleteNoteInteractor = /** @class */ (function () {
                function DeleteNoteInteractor() {
                    this.noteRepository = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].noteRepository;
                }
                DeleteNoteInteractor.prototype.execute = function (request) {
                    var id = request.getId();
                    var response = this.noteRepository.delete(new _entity_note__WEBPACK_IMPORTED_MODULE_1__["Note"]().setId(id));
                    return new _delete_note_response__WEBPACK_IMPORTED_MODULE_3__["DeleteNoteResponse"](response);
                };
                return DeleteNoteInteractor;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/delete-note/delete-note-request.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/domain/usecase/delete-note/delete-note-request.ts ***!
          \*******************************************************************/
        /*! exports provided: DeleteNoteRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNoteRequest", function () { return DeleteNoteRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DeleteNoteRequest = /** @class */ (function () {
                function DeleteNoteRequest(id) {
                    this.id = id;
                }
                DeleteNoteRequest.prototype.getId = function () {
                    return this.id;
                };
                return DeleteNoteRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/delete-note/delete-note-response.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/domain/usecase/delete-note/delete-note-response.ts ***!
          \********************************************************************/
        /*! exports provided: DeleteNoteResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNoteResponse", function () { return DeleteNoteResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DeleteNoteResponse = /** @class */ (function () {
                function DeleteNoteResponse(response) {
                    this.response = response;
                }
                DeleteNoteResponse.prototype.getResponse = function () {
                    return this.response;
                };
                return DeleteNoteResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/edit-note/edit-note-interactor.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/domain/usecase/edit-note/edit-note-interactor.ts ***!
          \******************************************************************/
        /*! exports provided: EditNoteInteractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteInteractor", function () { return EditNoteInteractor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _edit_note_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-note-response */ "./src/app/domain/usecase/edit-note/edit-note-response.ts");
            var EditNoteInteractor = /** @class */ (function () {
                function EditNoteInteractor() {
                    this.noteMapper = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].noteMapper;
                    this.noteRepository = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].noteRepository;
                }
                EditNoteInteractor.prototype.execute = function (request) {
                    var note = this.noteMapper.mapModelToEntity(request.getNote());
                    var response = this.noteRepository.update(note);
                    return new _edit_note_response__WEBPACK_IMPORTED_MODULE_2__["EditNoteResponse"](response);
                };
                return EditNoteInteractor;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/edit-note/edit-note-request.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/domain/usecase/edit-note/edit-note-request.ts ***!
          \***************************************************************/
        /*! exports provided: EditNoteRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteRequest", function () { return EditNoteRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EditNoteRequest = /** @class */ (function () {
                function EditNoteRequest(note) {
                    this.note = note;
                }
                EditNoteRequest.prototype.getNote = function () {
                    return this.note;
                };
                return EditNoteRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/edit-note/edit-note-response.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/domain/usecase/edit-note/edit-note-response.ts ***!
          \****************************************************************/
        /*! exports provided: EditNoteResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteResponse", function () { return EditNoteResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EditNoteResponse = /** @class */ (function () {
                function EditNoteResponse(response) {
                    this.response = response;
                }
                EditNoteResponse.prototype.getResponse = function () {
                    return this.response;
                };
                return EditNoteResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-note/get-note-interactor.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/domain/usecase/get-note/get-note-interactor.ts ***!
          \****************************************************************/
        /*! exports provided: GetNoteInteractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNoteInteractor", function () { return GetNoteInteractor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _get_note_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-note-response */ "./src/app/domain/usecase/get-note/get-note-response.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            var GetNoteInteractor = /** @class */ (function () {
                function GetNoteInteractor() {
                    this.noteMapper = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].noteMapper;
                    this.noteRepository = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].noteRepository;
                }
                GetNoteInteractor.prototype.execute = function (request) {
                    var _this = this;
                    var id = request.getId();
                    var noteObservable = this.noteRepository.getById(id);
                    var noteModelObservable = noteObservable
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (note) {
                        return _this.noteMapper.mapEntityToModel(note);
                    }));
                    return new _get_note_response__WEBPACK_IMPORTED_MODULE_1__["GetNoteResponse"](noteModelObservable);
                };
                return GetNoteInteractor;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-note/get-note-request.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/domain/usecase/get-note/get-note-request.ts ***!
          \*************************************************************/
        /*! exports provided: GetNoteRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNoteRequest", function () { return GetNoteRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetNoteRequest = /** @class */ (function () {
                function GetNoteRequest(id) {
                    this.id = id;
                }
                GetNoteRequest.prototype.getId = function () {
                    return this.id;
                };
                return GetNoteRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-note/get-note-response.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/domain/usecase/get-note/get-note-response.ts ***!
          \**************************************************************/
        /*! exports provided: GetNoteResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNoteResponse", function () { return GetNoteResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetNoteResponse = /** @class */ (function () {
                function GetNoteResponse(note) {
                    this.note = note;
                }
                GetNoteResponse.prototype.getNote = function () {
                    return this.note;
                };
                return GetNoteResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-notes/get-notes-interactor.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/domain/usecase/get-notes/get-notes-interactor.ts ***!
          \******************************************************************/
        /*! exports provided: GetNotesInteractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesInteractor", function () { return GetNotesInteractor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _get_notes_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-notes-response */ "./src/app/domain/usecase/get-notes/get-notes-response.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            var GetNotesInteractor = /** @class */ (function () {
                function GetNotesInteractor() {
                    this.noteMapper = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].noteMapper;
                    this.noteRepository = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].noteRepository;
                }
                GetNotesInteractor.prototype.execute = function (request) {
                    var _this = this;
                    var filter = this.noteMapper.mapModelToEntity(request.getFilter());
                    var notesObservable = this.noteRepository.getAll(filter);
                    var notesModelObservable = notesObservable
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (notes) {
                        return _this.noteMapper.mapEntitiesToModels(notes);
                    }));
                    return new _get_notes_response__WEBPACK_IMPORTED_MODULE_1__["GetNotesResponse"](notesModelObservable);
                };
                return GetNotesInteractor;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-notes/get-notes-request.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/domain/usecase/get-notes/get-notes-request.ts ***!
          \***************************************************************/
        /*! exports provided: GetNotesRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesRequest", function () { return GetNotesRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetNotesRequest = /** @class */ (function () {
                function GetNotesRequest(filter) {
                    this.filter = filter;
                }
                GetNotesRequest.prototype.getFilter = function () {
                    return this.filter;
                };
                return GetNotesRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/usecase/get-notes/get-notes-response.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/domain/usecase/get-notes/get-notes-response.ts ***!
          \****************************************************************/
        /*! exports provided: GetNotesResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesResponse", function () { return GetNotesResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetNotesResponse = /** @class */ (function () {
                function GetNotesResponse(notes) {
                    this.notes = notes;
                }
                GetNotesResponse.prototype.getNotes = function () {
                    return this.notes;
                };
                return GetNotesResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/validator/validation-response.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/domain/validator/validation-response.ts ***!
          \*********************************************************/
        /*! exports provided: ValidationResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationResponse", function () { return ValidationResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ValidationResponse = /** @class */ (function () {
                function ValidationResponse() {
                }
                ValidationResponse.FromSuccess = function () {
                    var instance = new ValidationResponse();
                    instance.isValidd = true;
                    instance.errors = new Array();
                    return instance;
                };
                ValidationResponse.FromErrors = function (errors) {
                    var instance = new ValidationResponse();
                    instance.isValidd = false;
                    instance.errors = errors;
                    return instance;
                };
                ValidationResponse.prototype.isValid = function () {
                    return this.isValidd;
                };
                ValidationResponse.prototype.getErrors = function () {
                    return this.errors;
                };
                return ValidationResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/presentation/components/common/modal-container/modal-container.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/presentation/components/common/modal-container/modal-container.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/presentation/components/common/modal-container/modal-container.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/presentation/components/common/modal-container/modal-container.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: ModalContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () { return ModalContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _materialize_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../materialize-helper */ "./src/app/presentation/materialize-helper.ts");
            var ModalContainerComponent = /** @class */ (function () {
                function ModalContainerComponent() {
                    this.noClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.yesClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ModalContainerComponent.prototype.ngOnInit = function () {
                    _materialize_helper__WEBPACK_IMPORTED_MODULE_2__["MaterializeHelper"].initModal();
                };
                ModalContainerComponent.prototype.ngAfterViewInit = function () {
                    _materialize_helper__WEBPACK_IMPORTED_MODULE_2__["MaterializeHelper"].initModal();
                };
                ModalContainerComponent.prototype.onYesClick = function () {
                    this.yesClick.emit();
                };
                ModalContainerComponent.prototype.onNoClick = function () {
                    this.noClick.emit();
                };
                return ModalContainerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ModalContainerComponent.prototype, "id", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ModalContainerComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ModalContainerComponent.prototype, "noClick", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ModalContainerComponent.prototype, "yesClick", void 0);
            ModalContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modal-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/modal-container/modal-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-container.component.css */ "./src/app/presentation/components/common/modal-container/modal-container.component.css")).default]
                })
            ], ModalContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/common/navbar/navbar.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/presentation/components/common/navbar/navbar.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/presentation/components/common/navbar/navbar.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/presentation/components/common/navbar/navbar.component.ts ***!
          \***************************************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                return NavbarComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NavbarComponent.prototype, "showGoBackButton", void 0);
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/common/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/presentation/components/common/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note-form/note-form.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/presentation/components/note-form/note-form.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL25vdGUtZm9ybS9ub3RlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note-form/note-form.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/presentation/components/note-form/note-form.component.ts ***!
          \**************************************************************************/
        /*! exports provided: NoteFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFormComponent", function () { return NoteFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/note-model */ "./src/app/presentation/model/note-model.ts");
            /* harmony import */ var _note_form_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-form.presenter */ "./src/app/presentation/components/note-form/note-form.presenter.ts");
            /* harmony import */ var _materialize_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialize-helper */ "./src/app/presentation/materialize-helper.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NoteFormComponent = /** @class */ (function () {
                function NoteFormComponent(router, route) {
                    this.router = router;
                    this.route = route;
                    this.presenter = new _note_form_presenter__WEBPACK_IMPORTED_MODULE_3__["NoteFormPresenterImpl"](this);
                }
                NoteFormComponent.prototype.ngOnInit = function () {
                    _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].initPrefilledInputs();
                    setTimeout(function () {
                        _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].initPrefilledInputs();
                    }, 100);
                    this.setNoteOrDefault();
                };
                NoteFormComponent.prototype.setNoteOrDefault = function () {
                    var id = Number(this.route.snapshot.paramMap.get('id'));
                    if (id === 0) {
                        this.note = new _model_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"]()
                            .setId(0)
                            .setTitle('Nota nueva')
                            .setContent('');
                    }
                    else {
                        this.presenter.getNote(id);
                    }
                };
                NoteFormComponent.prototype.setNote = function (noteObservable) {
                    var _this = this;
                    noteObservable
                        .subscribe(function (note) {
                        _this.note = note;
                    });
                };
                NoteFormComponent.prototype.save = function () {
                    this.presenter.save(this.note);
                };
                NoteFormComponent.prototype.onSaveResponse = function (response) {
                    var _this = this;
                    response.subscribe(function (savingResponse) {
                        if (savingResponse.errors && savingResponse.errors.length > 0) {
                            _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].showToast(savingResponse.errors[0]);
                            return;
                        }
                        _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].showToast('Guardado!');
                        _this.router.navigateByUrl('/notes');
                    });
                };
                return NoteFormComponent;
            }());
            NoteFormComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            NoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-note-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note-form/note-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-form.component.css */ "./src/app/presentation/components/note-form/note-form.component.css")).default]
                })
            ], NoteFormComponent);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note-form/note-form.presenter.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/presentation/components/note-form/note-form.presenter.ts ***!
          \**************************************************************************/
        /*! exports provided: NoteFormPresenterImpl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFormPresenterImpl", function () { return NoteFormPresenterImpl; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dependency/interactor.factory */ "./src/app/dependency/interactor.factory.ts");
            /* harmony import */ var _domain_usecase_add_note_add_note_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/usecase/add-note/add-note-request */ "./src/app/domain/usecase/add-note/add-note-request.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _domain_usecase_get_note_get_note_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../domain/usecase/get-note/get-note-request */ "./src/app/domain/usecase/get-note/get-note-request.ts");
            /* harmony import */ var _domain_usecase_edit_note_edit_note_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../domain/usecase/edit-note/edit-note-request */ "./src/app/domain/usecase/edit-note/edit-note-request.ts");
            var NoteFormPresenterImpl = /** @class */ (function () {
                function NoteFormPresenterImpl(view) {
                    this.noteMapper = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].noteMapper;
                    this.noteValidator = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].noteValidator;
                    this.addNoteInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__["InteractorDependencies"].addNoteInteractor;
                    this.editNoteInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__["InteractorDependencies"].editNoteInteractor;
                    this.getNoteInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__["InteractorDependencies"].getNoteInteractor;
                    this.view = view;
                }
                NoteFormPresenterImpl.prototype.getNote = function (id) {
                    var request = new _domain_usecase_get_note_get_note_request__WEBPACK_IMPORTED_MODULE_6__["GetNoteRequest"](id);
                    var response = this.getNoteInteractor.execute(request);
                    this.view.setNote(response.getNote());
                };
                NoteFormPresenterImpl.prototype.save = function (note) {
                    var mappedNote = this.noteMapper.mapModelToEntity(note);
                    var validationResponse = this.noteValidator.validate(mappedNote);
                    if (!validationResponse.isValid()) {
                        this.view.onSaveResponse(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
                            errors: validationResponse.getErrors()
                        }));
                        return;
                    }
                    var response;
                    if (note.getId() === 0) {
                        var request = new _domain_usecase_add_note_add_note_request__WEBPACK_IMPORTED_MODULE_3__["AddNoteRequest"](note);
                        response = this.addNoteInteractor.execute(request);
                    }
                    else {
                        var request = new _domain_usecase_edit_note_edit_note_request__WEBPACK_IMPORTED_MODULE_7__["EditNoteRequest"](note);
                        response = this.editNoteInteractor.execute(request);
                    }
                    this.view.onSaveResponse(response.getResponse());
                };
                return NoteFormPresenterImpl;
            }());
            NoteFormPresenterImpl.ctorParameters = function () { return [
                { type: undefined }
            ]; };
            NoteFormPresenterImpl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NoteFormPresenterImpl);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note/note.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/presentation/components/note/note.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL25vdGUvbm90ZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note/note.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/presentation/components/note/note.component.ts ***!
          \****************************************************************/
        /*! exports provided: NoteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function () { return NoteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/note-model */ "./src/app/presentation/model/note-model.ts");
            /* harmony import */ var _note_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note.presenter */ "./src/app/presentation/components/note/note.presenter.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NoteComponent = /** @class */ (function () {
                function NoteComponent(route) {
                    this.route = route;
                    this.note = new _model_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"]();
                    this.presenter = new _note_presenter__WEBPACK_IMPORTED_MODULE_3__["NotePresenterImpl"](this);
                }
                NoteComponent.prototype.ngOnInit = function () {
                    var id = Number(this.route.snapshot.paramMap.get('id'));
                    this.presenter.getNote(id);
                };
                NoteComponent.prototype.setNote = function (noteObservable) {
                    var _this = this;
                    noteObservable
                        .subscribe(function (note) {
                        _this.note = note;
                    });
                };
                return NoteComponent;
            }());
            NoteComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-note',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/note/note.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.css */ "./src/app/presentation/components/note/note.component.css")).default]
                })
            ], NoteComponent);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/note/note.presenter.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/presentation/components/note/note.presenter.ts ***!
          \****************************************************************/
        /*! exports provided: NotePresenterImpl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePresenterImpl", function () { return NotePresenterImpl; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dependency/interactor.factory */ "./src/app/dependency/interactor.factory.ts");
            /* harmony import */ var _domain_usecase_get_note_get_note_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/usecase/get-note/get-note-request */ "./src/app/domain/usecase/get-note/get-note-request.ts");
            var NotePresenterImpl = /** @class */ (function () {
                function NotePresenterImpl(view) {
                    this.getNoteInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_2__["InteractorDependencies"].getNoteInteractor;
                    this.view = view;
                }
                NotePresenterImpl.prototype.getNote = function (id) {
                    var request = new _domain_usecase_get_note_get_note_request__WEBPACK_IMPORTED_MODULE_3__["GetNoteRequest"](id);
                    var response = this.getNoteInteractor.execute(request);
                    this.view.setNote(response.getNote());
                };
                return NotePresenterImpl;
            }());
            NotePresenterImpl.ctorParameters = function () { return [
                { type: undefined }
            ]; };
            NotePresenterImpl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NotePresenterImpl);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/notes/notes.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/presentation/components/notes/notes.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/presentation/components/notes/notes.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/presentation/components/notes/notes.component.ts ***!
          \******************************************************************/
        /*! exports provided: NotesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function () { return NotesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/note-model */ "./src/app/presentation/model/note-model.ts");
            /* harmony import */ var _notes_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.presenter */ "./src/app/presentation/components/notes/notes.presenter.ts");
            /* harmony import */ var _materialize_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialize-helper */ "./src/app/presentation/materialize-helper.ts");
            var NotesComponent = /** @class */ (function () {
                function NotesComponent() {
                    this.notes = new Array();
                    this.presenter = new _notes_presenter__WEBPACK_IMPORTED_MODULE_3__["NotesPresenterImpl"](this);
                }
                NotesComponent.prototype.ngOnInit = function () {
                    this.presenter.getNotes(new _model_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"]());
                    _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].initFab();
                    _materialize_helper__WEBPACK_IMPORTED_MODULE_4__["MaterializeHelper"].initFeatureDiscovery();
                };
                NotesComponent.prototype.setNotes = function (notesObservable) {
                    var _this = this;
                    notesObservable
                        .subscribe(function (notes) {
                        _this.notes = notes;
                    });
                };
                NotesComponent.prototype.delete = function (note) {
                    this.presenter.deleteNote(note);
                };
                NotesComponent.prototype.onNoteDelete = function (responseObservable) {
                    var _this = this;
                    responseObservable.subscribe(function (response) {
                        _this.presenter.getNotes(new _model_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"]());
                    });
                };
                NotesComponent.prototype.setNoteToDelete = function (note) {
                    this.noteToDelete = note;
                };
                return NotesComponent;
            }());
            NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/components/notes/notes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/presentation/components/notes/notes.component.css")).default]
                })
            ], NotesComponent);
            /***/ 
        }),
        /***/ "./src/app/presentation/components/notes/notes.presenter.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/presentation/components/notes/notes.presenter.ts ***!
          \******************************************************************/
        /*! exports provided: NotesPresenterImpl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPresenterImpl", function () { return NotesPresenterImpl; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _domain_usecase_get_notes_get_notes_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/usecase/get-notes/get-notes-request */ "./src/app/domain/usecase/get-notes/get-notes-request.ts");
            /* harmony import */ var _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dependency/interactor.factory */ "./src/app/dependency/interactor.factory.ts");
            /* harmony import */ var _domain_usecase_delete_note_delete_note_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/usecase/delete-note/delete-note-request */ "./src/app/domain/usecase/delete-note/delete-note-request.ts");
            var NotesPresenterImpl = /** @class */ (function () {
                function NotesPresenterImpl(view) {
                    this.getNotesInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_3__["InteractorDependencies"].getNotesInteractor;
                    this.deleteNoteInteractor = _dependency_interactor_factory__WEBPACK_IMPORTED_MODULE_3__["InteractorDependencies"].deleteNoteInteractor;
                    this.view = view;
                }
                NotesPresenterImpl.prototype.getNotes = function (filter) {
                    var request = new _domain_usecase_get_notes_get_notes_request__WEBPACK_IMPORTED_MODULE_2__["GetNotesRequest"](filter);
                    var response = this.getNotesInteractor.execute(request);
                    this.view.setNotes(response.getNotes());
                };
                NotesPresenterImpl.prototype.deleteNote = function (note) {
                    var request = new _domain_usecase_delete_note_delete_note_request__WEBPACK_IMPORTED_MODULE_4__["DeleteNoteRequest"](note.getId());
                    var response = this.deleteNoteInteractor.execute(request);
                    this.view.onNoteDelete(response.getResponse());
                };
                return NotesPresenterImpl;
            }());
            NotesPresenterImpl.ctorParameters = function () { return [
                { type: undefined }
            ]; };
            NotesPresenterImpl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NotesPresenterImpl);
            /***/ 
        }),
        /***/ "./src/app/presentation/mapper/note-mapper.ts": 
        /*!****************************************************!*\
          !*** ./src/app/presentation/mapper/note-mapper.ts ***!
          \****************************************************/
        /*! exports provided: NoteMapper */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteMapper", function () { return NoteMapper; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _domain_entity_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/entity/note */ "./src/app/domain/entity/note.ts");
            /* harmony import */ var _model_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/note-model */ "./src/app/presentation/model/note-model.ts");
            var NoteMapper = /** @class */ (function () {
                function NoteMapper() {
                }
                NoteMapper.prototype.mapEntityToModel = function (input) {
                    return new _model_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"]()
                        .setId(input.getId())
                        .setTitle(input.getTitle())
                        .setContent(input.getContent())
                        .setCreatedAt(input.getCreatedAt())
                        .setUpdatedAt(input.getUpdatedAt());
                };
                NoteMapper.prototype.mapModelToEntity = function (input) {
                    return new _domain_entity_note__WEBPACK_IMPORTED_MODULE_1__["Note"]()
                        .setId(input.getId())
                        .setTitle(input.getTitle())
                        .setContent(input.getContent())
                        .setCreatedAt(input.getCreatedAt())
                        .setUpdatedAt(input.getUpdatedAt());
                };
                NoteMapper.prototype.mapEntitiesToModels = function (input) {
                    var _this = this;
                    return input.map(function (note) {
                        return _this.mapEntityToModel(note);
                    });
                };
                NoteMapper.prototype.mapModelsToEntities = function (input) {
                    var _this = this;
                    return input.map(function (note) {
                        return _this.mapModelToEntity(note);
                    });
                };
                return NoteMapper;
            }());
            /***/ 
        }),
        /***/ "./src/app/presentation/materialize-helper.ts": 
        /*!****************************************************!*\
          !*** ./src/app/presentation/materialize-helper.ts ***!
          \****************************************************/
        /*! exports provided: MaterializeHelper */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterializeHelper", function () { return MaterializeHelper; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MaterializeHelper = /** @class */ (function () {
                function MaterializeHelper() {
                }
                MaterializeHelper.showToast = function (message) {
                    M.toast({ html: message });
                };
                MaterializeHelper.initModal = function () {
                    var modals = document.querySelectorAll('.modal');
                    M.Modal.init(modals, {});
                };
                MaterializeHelper.initFab = function () {
                    var fab = document.querySelectorAll('.fixed-action-btn');
                    M.FloatingActionButton.init(fab, {});
                };
                MaterializeHelper.initPrefilledInputs = function () {
                    M.updateTextFields();
                };
                MaterializeHelper.initFeatureDiscovery = function () {
                    var tapTargets = document.querySelectorAll('.tap-target');
                    M.TapTarget.init(tapTargets, {});
                };
                return MaterializeHelper;
            }());
            /***/ 
        }),
        /***/ "./src/app/presentation/model/note-model.ts": 
        /*!**************************************************!*\
          !*** ./src/app/presentation/model/note-model.ts ***!
          \**************************************************/
        /*! exports provided: NoteModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModel", function () { return NoteModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var NoteModel = /** @class */ (function () {
                function NoteModel() {
                }
                NoteModel.prototype.getId = function () {
                    return this.id;
                };
                NoteModel.prototype.getTitle = function () {
                    return this.title;
                };
                NoteModel.prototype.getContent = function () {
                    return this.content;
                };
                NoteModel.prototype.getCreatedAt = function () {
                    return this.createdAt;
                };
                NoteModel.prototype.getUpdatedAt = function () {
                    return this.updatedAt;
                };
                NoteModel.prototype.setId = function (id) {
                    this.id = id;
                    return this;
                };
                NoteModel.prototype.setTitle = function (title) {
                    this.title = title;
                    return this;
                };
                NoteModel.prototype.setContent = function (content) {
                    this.content = content;
                    return this;
                };
                NoteModel.prototype.setCreatedAt = function (createdAt) {
                    this.createdAt = createdAt;
                    return this;
                };
                NoteModel.prototype.setUpdatedAt = function (updatedAt) {
                    this.updatedAt = updatedAt;
                    return this;
                };
                return NoteModel;
            }());
            /***/ 
        }),
        /***/ "./src/app/presentation/validator/note-validator.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/presentation/validator/note-validator.ts ***!
          \**********************************************************/
        /*! exports provided: NoteValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteValidator", function () { return NoteValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _domain_validator_validation_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/validator/validation-response */ "./src/app/domain/validator/validation-response.ts");
            var NoteValidator = /** @class */ (function () {
                function NoteValidator() {
                }
                NoteValidator.prototype.validate = function (entity) {
                    var errors = new Array();
                    if (entity.getContent() == null || entity.getContent().length === 0) {
                        errors.push('La nota no tiene un contenido válido');
                    }
                    if (errors.length === 0) {
                        return _domain_validator_validation_response__WEBPACK_IMPORTED_MODULE_1__["ValidationResponse"].FromSuccess();
                    }
                    else {
                        return _domain_validator_validation_response__WEBPACK_IMPORTED_MODULE_1__["ValidationResponse"].FromErrors(errors);
                    }
                };
                return NoteValidator;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_presentation_mapper_note_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/presentation/mapper/note-mapper */ "./src/app/presentation/mapper/note-mapper.ts");
            /* harmony import */ var _app_data_repository_mock_note_mock_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/data/repository/mock/note-mock-repository.service */ "./src/app/data/repository/mock/note-mock-repository.service.ts");
            /* harmony import */ var _app_presentation_validator_note_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/presentation/validator/note-validator */ "./src/app/presentation/validator/note-validator.ts");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                name: 'Dev',
                noteMapper: new _app_presentation_mapper_note_mapper__WEBPACK_IMPORTED_MODULE_1__["NoteMapper"](),
                noteValidator: new _app_presentation_validator_note_validator__WEBPACK_IMPORTED_MODULE_3__["NoteValidator"](),
                noteRepository: new _app_data_repository_mock_note_mock_repository_service__WEBPACK_IMPORTED_MODULE_2__["NoteMockRepository"](),
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Dev\angular\CleanToDoByLayers\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
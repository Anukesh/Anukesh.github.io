(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LPTL-2\Downloads\GutenbergProject-main\GutenbergProject-main\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ignite-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list/book-list.component */ "hmYs");
/* harmony import */ var _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genre-list/genre-list.component */ "eBVg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"],
        _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_5__["GenreListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"],
                    _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_5__["GenreListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eBVg":
/*!****************************************************!*\
  !*** ./src/app/genre-list/genre-list.component.ts ***!
  \****************************************************/
/*! exports provided: GenreListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreListComponent", function() { return GenreListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["book-list", a1]; };
function GenreListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, genre_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, genre_r1), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, genre_r1));
} }
class GenreListComponent {
    constructor(router) {
        this.router = router;
        this.genres = ['fiction', 'drama', 'history', 'humour', 'philosophy', 'adventure', 'politics'];
    }
    ngOnInit() {
    }
    redirectToBooks(genre) {
        console.log(genre);
        this.router.navigate(['home/book-list']);
    }
}
GenreListComponent.ɵfac = function GenreListComponent_Factory(t) { return new (t || GenreListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GenreListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenreListComponent, selectors: [["app-genre-list"]], decls: 12, vars: 1, consts: [[1, "container-box"], [1, "header"], [1, "container"], [1, "row"], [1, "col-sm-12", 2, "margin", "0px 25px 0px 24px"], [1, "heading1"], ["class", "col-sm-6 col-xs-12", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-xs-12", 3, "routerLink"], [1, "genre-card"], [3, "src"], [1, "float-right"], ["src", "../assets/Next.svg"]], template: function GenreListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gutenberg Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A social cataloging website that allows you to freely search its database of books, annotations, and reviews.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GenreListComponent_div_11_Template, 9, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  padding: 1em 0em 1em 0em;\n  margin-bottom: 1em;\n}\n\n.genre-card[_ngcontent-%COMP%] {\n  border-radius: 4 px;\n  padding: 0px 10px 0px 10px;\n  height: 50px;\n  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);\n  background-color: white;\n  font-size: 20px;\n  line-height: 43px;\n  margin-bottom: 14px;\n  cursor: pointer;\n}\n\n.genre-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  margin: 0px 7px 3px 0px;\n}\n\n.genre-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 5px 0 rgba(93, 93, 109, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdlbnJlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUFJO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBRUE7RUFDSSw4Q0FBQTtBQUNKIiwiZmlsZSI6ImdlbnJlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9QYXR0ZXJuLnN2Zyk7XG4gICAgcGFkZGluZzogMWVtIDBlbSAxZW0gMGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5nZW5yZS1jYXJke1xuICAgIGJvcmRlci1yYWRpdXMgOiA0IHB4O1xuICAgIHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XG4gICAgaGVpZ2h0IDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDIxMSwgMjA5LCAyMzgsIDAuNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggN3B4IDNweCAwcHg7XG4gICAgfVxufVxuXG4uZ2VucmUtY2FyZDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDkzLCA5MywgMTA5LCAwLjUpOyBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenreListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-genre-list',
                templateUrl: './genre-list.component.html',
                styleUrls: ['./genre-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "hmYs":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list.service */ "pETR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");


// import { HttpClient } from '@angular/common/http';





function BookListComponent_div_15_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r4.authors[0].name);
} }
function BookListComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_div_15_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const book_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openBookPreview(book_r4.formats); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookListComponent_div_15_div_1_p_4_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r4.formats["image/jpeg"] ? book_r4.formats["image/jpeg"] : "../../assets/NotAvailable.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r4.authors.length);
} }
function BookListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookListComponent_div_15_div_1_Template, 5, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.booklist);
} }
function BookListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookListComponent {
    constructor(router, route, activatedRoute, bookListService) {
        this.router = router;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.bookListService = bookListService;
        this.keyUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subscribeInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"];
        this.showLoader = true;
        this.noData = false;
        this.subscribeInput = this.keyUp
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((ev) => ev.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe((val) => {
            console.log(this.bookUrl);
            this.booklist = [];
            this.getBookList(this.bookUrl + '&search=' + val.replace(' ', '%20'));
        });
    }
    ngOnInit() {
        this.genre = this.route.snapshot.paramMap.get('genre');
        this.bookUrl = 'http://gutendex.com/books/?mime_type=image&topic=' + this.genre;
        this.getBookList(this.bookUrl);
    }
    ngOnDestroy() {
        this.subscribeInput.unsubscribe();
    }
    getBookList(Url) {
        this.showLoader = true;
        this.bookListService.getBookList(Url).subscribe((data) => {
            this.bookData = data;
            this.booklist = this.booklist ? [...this.booklist, ...this.bookData.results] : this.bookData.results;
            console.log(this.bookData, Url);
            this.noData = this.booklist.length <= 0;
        }, (err) => { }, () => {
            this.showLoader = false;
        });
    }
    redirectToParent() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    onScroll(event) {
        // visible height + pixel scrolled >= total height 
        if (event.target.scrollTop > 0 && event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            if (this.bookData.next) {
                // this.bookUrl = this.bookData.next;
                this.getBookList(this.bookData.next);
            }
        }
    }
    openBookPreview(formats) {
        const url = formats[Object.keys(formats).find((el) => el.startsWith('text'))];
        const newUrl = (url.search('.zip') !== -1) ? ((url + url.substring(url.lastIndexOf('/'))).replace(/.zip/gi, '').replace(/-[0-9]/g, '-h') + '.htm') : url;
        window.open(newUrl, "_self");
    }
}
BookListComponent.ɵfac = function BookListComponent_Factory(t) { return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_list_service__WEBPACK_IMPORTED_MODULE_4__["BookListService"])); };
BookListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookListComponent, selectors: [["app-book-list"]], hostBindings: function BookListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BookListComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 18, vars: 6, consts: [[1, "container-box"], [1, "header"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading2"], ["src", "../../assets/Back.svg", 1, "back-arrow-img", 3, "click"], [1, "form-group", "has-search"], [1, "search-icon"], ["src", "../../assets/Search.svg"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "keyup"], [1, "container", "overflow-auto", 3, "scroll"], ["style", "display: contents;", 4, "ngIf"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [2, "display", "contents"], ["class", "col-md-2 col-sm-2 col-4 book-card", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-sm-2", "col-4", "book-card"], [1, "book-img", 3, "src", "click"], [1, "book-title"], ["class", "book-author", 4, "ngIf"], [1, "book-author"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "no-data"], ["src", "../../assets/search_no_result.png"]], template: function BookListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_Template_img_click_6_listener() { return ctx.redirectToParent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BookListComponent_Template_input_keyup_12_listener($event) { return ctx.keyUp.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BookListComponent_Template_div_scroll_13_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookListComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BookListComponent_div_16_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookListComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.genre));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.booklist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noData && !ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".heading2[_ngcontent-%COMP%] {\n  color: #5E56E7;\n  font-size: 30px;\n  font-family: Montserrat-semi-bold;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1em 0em 1em 0em;\n  margin-bottom: 1em;\n}\n\n.back-arrow-img[_ngcontent-%COMP%] {\n  margin: 0px 7px 3px 0px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n  height: 50px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 6px 0px 0px 13px;\n}\n\n.book-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 63%;\n  max-width: 154px;\n  max-height: 226px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);\n  cursor: pointer;\n}\n\n.overflow-auto[_ngcontent-%COMP%] {\n  max-height: 74%;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.book-card-container[_ngcontent-%COMP%] {\n  justify-content: left;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  max-height: 3em;\n  margin-top: 1em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.book-author[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-size: 12px;\n  max-height: 3em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 0.5em;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #5e56e7 !important;\n  position: absolute;\n  height: 50px;\n  width: 50px;\n  top: 50%;\n  left: 50%;\n  margin-left: -50px;\n  margin-top: -50px;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.no-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #F0F0F6;\n  border: none;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background: #F0F0F6;\n  border: 1px solid #5E56E7 !important;\n  box-shadow: none !important;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 50px auto;\n}\n\n\n\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  margin-top: 1em;\n}\n\n@media (max-width: 768px) and (min-width: 576px) {\n  .book-card[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n\n  .book-author[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n\n@media (max-width: 575px) {\n  .book-card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU9IOztBQUxBO0VBQ0kscUJBQUE7QUFRSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQyxZQUFBO0VBQ0QsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFVSjs7QUFUSTtFQUNJLGFBQUE7RUFDSixXQUFBO0FBV0o7O0FBUEE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFVSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQVdKOztBQVBBLHVDQUFBOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBTkEsNENBQUE7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFKQTtFQUNJO0lBQ0ksbUJBQUE7RUFPTjs7RUFMRTtJQUNJLGVBQUE7RUFRTjtBQUNGOztBQUxBO0VBQ0k7SUFDSSxtQkFBQTtFQU9OO0FBQ0YiLCJmaWxlIjoiYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcye1xuICAgIGNvbG9yOiAjNUU1NkU3O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1zZW1pLWJvbGQ7XG59XG4uaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbSAwZW0gMWVtIDBlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uYmFjay1hcnJvdy1pbWd7XG4gICAgbWFyZ2luOiAwcHggN3B4IDNweCAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWFyY2gtYmFye1xuICAgIHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XG4gICAgaGVpZ2h0IDogNTBweDtcbn1cbi5zZWFyY2gtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiA2cHggMHB4IDBweCAxM3B4O1xufVxuLmJvb2staW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjMlO1xuICAgIG1heC13aWR0aDogMTU0cHg7XG4gICAgbWF4LWhlaWdodDogMjI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjExLCAyMDksIDIzOCwgMC41KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ub3ZlcmZsb3ctYXV0b3tcbiAgIG1heC1oZWlnaHQ6IDc0JTtcbiAgIG92ZXJmbG93LXk6IGF1dG87XG4gICBoZWlnaHQ6IDEwMCU7XG59XG4uYm9vay1jYXJkLWNvbnRhaW5lcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cbn1cblxuLmJvb2stdGl0bGV7XG4gICAgbWF4LWhlaWdodDogM2VtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmJvb2stYXV0aG9ye1xuICAgIGNvbG9yOiAjQTBBMEEwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXgtaGVpZ2h0OiAzZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi50ZXh0LXByaW1hcnl7XG4gICAgY29sb3I6ICM1ZTU2ZTchaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgaGVpZ2h0OiA1MHB4OyBcbiAgICB3aWR0aDogNTBweDsgXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi5uby1kYXRhe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuXG5pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI0YwRjBGNjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5pbnB1dDpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEY2O1xuICAgIGJvcmRlcjoxcHggc29saWQgIzVFNTZFNyAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXG5cbi5tYWluIHtcbiAgICB3aWR0aDogNTAlIDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXG5cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSBhbmQgKG1pbi13aWR0aDo1NzZweCkge1xuICAgIC5ib29rLWNhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5ib29rLWF1dGhvciAuYm9vay10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc1cHgpe1xuICAgIC5ib29rLWNhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-list',
                templateUrl: './book-list.component.html',
                styleUrls: ['./book-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _book_list_service__WEBPACK_IMPORTED_MODULE_4__["BookListService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "pETR":
/*!************************************************!*\
  !*** ./src/app/book-list/book-list.service.ts ***!
  \************************************************/
/*! exports provided: BookListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListService", function() { return BookListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BookListService {
    constructor(http) {
        this.http = http;
    }
    getBookList(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)));
    }
    handleError(err) {
        console.log('failed with error: ', err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
    }
}
BookListService.ɵfac = function BookListService_Factory(t) { return new (t || BookListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BookListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookListService, factory: BookListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-list/book-list.component */ "hmYs");
/* harmony import */ var _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genre-list/genre-list.component */ "eBVg");






const routes = [
    { path: 'home', component: _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_3__["GenreListComponent"] },
    { path: 'home/book-list/:genre', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__["BookListComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
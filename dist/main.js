(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.loggedIn = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/modal/modal.component */ "./src/app/dashboard/modal/modal.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _user_info_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-info/user-summary/user-summary.component */ "./src/app/user-info/user-summary/user-summary.component.ts");
/* harmony import */ var _services_customer_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/customer-data.service */ "./src/app/services/customer-data.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//core/angular modules




//vendor modules


//component imports







//services


var appRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'user', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _dashboard_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"],
                _user_info_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_12__["UserSummaryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_5__["LaddaModule"].forRoot({
                    spinnerColor: "purple",
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_customer_data_service__WEBPACK_IMPORTED_MODULE_13__["CustomerDataService"],
                _services_products_service__WEBPACK_IMPORTED_MODULE_14__["ProductsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 150px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card watermark-wrapper\" style=\"\">\r\n        <div class=\"card-body\">\r\n          <span class=\"fa fa-fw fa-group watermark\"></span>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"input-label mb-3 mt-4\"><span class=\"input-label-text\">Search by <b>User Information</b></span></div>\r\n              <div class=\"input-group icon-prepend mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-at\"></span></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"By Name\" aria-label=\"By Email Address\" aria-describedby=\"basic-addon1\">\r\n              </div>\r\n              <div class=\"row mb-4\">\r\n                <div class=\"col-md-12 text-muted mb-1 mt-1\">\r\n                  Other lookup options:\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"input-group icon-prepend\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-phone\"></span></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"By Phone #\" aria-label=\"By Phone #\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"input-group icon-prepend\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-map-o\"></span></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"by Zip Code\" aria-label=\"by Zip Code\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"input-group icon-prepend\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-users\"></span></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"By Name\" aria-label=\"By Name\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"search-button text-right mb-3\">\r\n                <button class=\"btn btn-rounded btn-outline-info\" (click)=\"getUser($event)\" [ladda]=\"isLoading\">\r\n                  <span class=\"inner-text\">Search <span class=\"fa fa-arrow-right\" ></span></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div class=\"row mt-3 row-2\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-border-orange watermark-wrapper\">\r\n        <div class=\"card-body\">\r\n          <span class=\"fa fa-fw fa-paper-plane-o watermark\"></span>\r\n          <div class=\"input-label\"><span class=\"input-label-text\">Search by <b>tracking</b> number</span></div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" id=\"trackingNumber\" class=\"form-control\" placeholder=\"Tracking #\" required=\"\" autofocus=\"\">\r\n          </div>\r\n          <div class=\"search-button text-right\">\r\n            <button class=\"btn btn-rounded btn-outline-info\" (click)=\"getUser()\">Search <span class=\"fa fa-arrow-right\"></span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-border-purple watermark-wrapper\">\r\n        <div class=\"card-body\">\r\n            <span class=\"fa fa-fw fa-compass watermark\"></span>\r\n          <div class=\"input-label\"><span class=\"input-label-text\">Search by <b>order</b> number</span></div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" id=\"orderNumber\" class=\"form-control\" placeholder=\"Order #\" required=\"\" autofocus=\"\">\r\n          </div>\r\n          <div class=\"search-button text-right\">\r\n            <button class=\"btn btn-rounded btn-outline-info\" (click)=\"getUser()\">Search <span class=\"fa fa-arrow-right\"></span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-border-blue watermark-wrapper\">\r\n        <div class=\"card-body\">\r\n          <span class=\"fa fa-fw fa-check watermark\"></span>\r\n          <div class=\"input-label\"><span class=\"input-label-text\">Search by <b>incident</b> number</span></div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" id=\"incidentNumber\" class=\"form-control\" placeholder=\"Incident #\" required=\"\" autofocus=\"\">\r\n          </div>\r\n          <div class=\"search-button text-right\">\r\n            <button class=\"btn btn-rounded btn-outline-info\" (click)=\"getUser()\">Search <span class=\"fa fa-arrow-right\"></span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-modal *ngIf=\"showModal\"></app-modal>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.row-2 .col-md-4 .card-border-orange {\n  border-top: 5px solid orange;\n}\n.row-2 .col-md-4 .card-border-purple {\n  border-top: 5px solid #583CC3;\n}\n.row-2 .col-md-4 .card-border-blue {\n  border-top: 5px solid #1F7A8C;\n}\n.watermark-wrapper {\n  overflow: hidden;\n}\n.watermark-wrapper .watermark {\n  position: absolute;\n  font-size: 85px;\n  color: #ccc;\n  opacity: 0.5;\n  top: -25px;\n  right: -41px;\n}\n.input-label {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.icon-prepend .input-group-prepend .input-group-text {\n  padding: .375rem 0.25rem .375rem 0.45rem;\n  font-size: 15px;\n  background-color: transparent;\n  border-right: 1px solid transparent;\n}\n.icon-prepend input {\n  border-left: 1px solid transparent;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.isLoading = false;
        this.showModal = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getUser = function ($event) {
        var _this = this;
        var elem = $event.currentTarget;
        elem.getElementsByClassName("inner-text")[0].innerHTML = "Searching...";
        this.isLoading = true;
        setTimeout(function () {
            elem.getElementsByClassName("inner-text")[0].innerHTML = "Search";
            _this.showModal = true;
            _this.isLoading = false;
        }, 5000);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/modal/modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/modal/modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\r\n  <div class=\"mod\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4>Please confirm these details with the customer before proceeding</h4>\r\n        <hr>\r\n        <div class=\"customer-details\">\r\n          <ul class=\"list-unstyled info-list\">\r\n            <li> <b>Email : </b> janine.doe@example.com</li>\r\n            <li> <b>Name : </b> Janine Doe</li>\r\n            <li> <b>Zip Code : </b> 48221</li>\r\n            <li> <b>Phone : </b> 469-744-0000</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 100%\">\r\n          <div class=\"card-body\">\r\n            <div class=\"display-heading\">\r\n              <b>Most Recent Order</b>\r\n            </div>\r\n            <div class=\"row mt-4\">\r\n              <div class=\"col-md-3 pt-3\">\r\n                <img src=\"../../../assets/product1.png\" alt=\"\" width=\"100%\">\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <div class=\"product-title small mb-2\" style=\"line-height: 17px\">\r\n                  <b>Classic Orange Sneakers - ABC Collections - Age12-21, Modern Look</b>\r\n                </div>\r\n                <div class=\"delivery-address text-muted small mb-2\">\r\n                  <span style=\"font-weight: 700\">Shipping Address :</span> <br>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ad.\r\n                </div>\r\n                <div class=\"order-details small mb-2\">\r\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Qty : </span> 1 |\r\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Size : </span> M |\r\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Status : </span> Out for Delivery\r\n                </div>\r\n                <div class=\"order-comments small\">\r\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Comments : </span> Please use the gate code 0202 to get in. Leave at the door.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer mt-4 text-right\">\r\n          <a class=\"btn btn-outline-success\" [routerLink]=\"['/user']\">Details Confirmed</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/modal/modal.component.less":
/*!******************************************************!*\
  !*** ./src/app/dashboard/modal/modal.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 100%;\n  width: 100%;\n  background-color: #333333bd;\n  position: absolute;\n  top: 0px;\n}\n.overlay hr {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n}\n.mod {\n  width: 100%;\n  position: absolute;\n  top: 20%;\n  z-index: 999;\n}\n.mod .card {\n  background-color: #fff;\n  margin: 0px auto;\n  width: 500px;\n}\n.customer-details ul {\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 25px;\n  padding-bottom: 25px;\n}\n.customer-details ul li {\n  margin: 2.5px 0px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/dashboard/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.less */ "./src/app/dashboard/modal/modal.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 100%;\">\n  <div class=\"row justify-content-center\" >\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quasi esse. Excepturi.</p>\n\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n              <button class=\"btn btn-block btn-outline-info\">Log-in</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"./assets/genesco-logo.jpg\" alt=\"\" width=\"30\" height=\"30\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n      </ul>\n      <span class=\"navbar-text\">\n        <span class=\"fa fa-fw fa-user\"></span>\n        Logged in as: <b>John Doester</b>\n      </span>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.less":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 1.1rem;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/navbar/navbar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/customer-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/customer-data.service.ts ***!
  \***************************************************/
/*! exports provided: CustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataService", function() { return CustomerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerDataService = /** @class */ (function () {
    function CustomerDataService() {
    }
    CustomerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomerDataService);
    return CustomerDataService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsService = /** @class */ (function () {
    function ProductsService() {
        this.products = [
            {
                "orderNumber": "78D5G6R8DF6CC45F",
                "tracking": {
                    "service": "FedEx",
                    "number": "A4SD5E7R6GD2C0"
                },
                "title": "Classic Orange Sneakers - ABC Collections - Age12-21, Modern Look",
                "shippingAddress": "34485 Example Street, ExCity, Ohio, 12166",
                "quantity": "1",
                "size": "M",
                "status": "Out For Delivery",
                "payment": {
                    "card": "9854",
                    "provider": "Discover"
                },
                "comments": "Please use the gate code 0202 to get in. Leave at the door."
            },
            {
                "orderNumber": null,
                "tracking": {
                    "service": null,
                    "number": null
                },
                "title": "Grey Solid Tee - ABC Collections - Age12-21, Modern Look",
                "shippingAddress": "34485 Example Street, ExCity, Ohio, 12166",
                "quantity": "1",
                "size": "M",
                "status": "Purchased",
                "payment": {
                    "card": "9854",
                    "provider": "Discover"
                },
                "comments": "Please use the gate code 0202 to get in. Leave at the door."
            },
            {
                "orderNumber": "7S5F8G5T6F9DV1CV",
                "tracking": {
                    "service": "UPS",
                    "number": "A4SD5E7R6GD2C0"
                },
                "title": "Smart Checkered Shirt - ABC Collections - Age12-21, Modern Look",
                "shippingAddress": "34485 Example Street, ExCity, Ohio, 12166",
                "quantity": "1",
                "size": "M",
                "status": "Returned",
                "payment": {
                    "card": "9854",
                    "provider": "Discover"
                },
                "comments": "Please use the gate code 0202 to get in. Leave at the door."
            },
            {
                "orderNumber": "V5H8T9D6F4X2C6",
                "tracking": {
                    "service": "DHL",
                    "number": "A4SD5E7R6GD2C0"
                },
                "title": "Blue printed socks - ABC Collections - Age12-21, Modern Look",
                "shippingAddress": "34485 Example Street, ExCity, Ohio, 12166",
                "quantity": "1",
                "size": "M",
                "status": "Delivered",
                "payment": {
                    "card": "9854",
                    "provider": "Chase"
                },
                "comments": "Please use the gate code 0202 to get in. Leave at the door."
            }
        ];
        this.marketing = [
            {
                "_id": "5b2c00450e47d9d2f4ee4d39",
                "name": {
                    "first": "Jacklyn",
                    "last": "Beach"
                },
                "type": "offer",
                "couponCode": "VISALIA",
                "email": "jacklyn.beach@undefined.us",
                "description": "tempor fugiat sit reprehenderit excepteur voluptate eu officia irure laboris laborum in est adipisicing consectetur",
                "redeemed": "Sun May 17 2015 14:07:09 GMT+0000"
            },
            {
                "_id": "5b2c004543d08c2603d22a10",
                "name": {
                    "first": "Diann",
                    "last": "Dillon"
                },
                "type": "coupon",
                "couponCode": "KOFFEE",
                "email": "diann.dillon@undefined.org",
                "description": "commodo minim fugiat eu culpa dolore excepteur dolore excepteur culpa id qui eiusmod occaecat mollit",
                "redeemed": "Sat Jul 02 2016 06:34:30 GMT+0000"
            },
            {
                "_id": "5b2c004589c1ac0095a7f576",
                "name": {
                    "first": "Collier",
                    "last": "Key"
                },
                "type": "catalog",
                "couponCode": "QABOOS",
                "email": "collier.key@undefined.com",
                "description": "quis dolore labore nostrud eiusmod et dolor exercitation ea exercitation fugiat velit sint sunt id",
                "redeemed": "Wed Apr 25 2018 13:20:25 GMT+0000"
            },
            {
                "_id": "5b2c0045b854eea41381c3f4",
                "name": {
                    "first": "Pate",
                    "last": "Dudley"
                },
                "type": "coupon",
                "couponCode": "EYERIS",
                "email": "pate.dudley@undefined.co.uk",
                "description": "voluptate nisi anim amet nulla fugiat est sunt consequat pariatur sit aliqua nisi excepteur duis",
                "redeemed": "Thu Jan 28 2016 04:36:43 GMT+0000"
            },
            {
                "_id": "5b2c00450b51e1188033e485",
                "name": {
                    "first": "Gordon",
                    "last": "Foley"
                },
                "type": "catalog",
                "couponCode": "KINETICUT",
                "email": "gordon.foley@undefined.io",
                "description": "cillum consequat deserunt officia mollit adipisicing nisi cillum nisi duis et culpa nostrud ipsum dolor",
                "redeemed": "Sun Oct 23 2016 19:28:12 GMT+0000"
            },
            {
                "_id": "5b2c00451612dd973a7db367",
                "name": {
                    "first": "Marcia",
                    "last": "Sims"
                },
                "type": "catalog",
                "couponCode": "QUONATA",
                "email": "marcia.sims@undefined.biz",
                "description": "elit excepteur aliqua duis ex ea Lorem cillum esse magna ad ex est laborum eiusmod",
                "redeemed": "Fri Oct 14 2016 11:52:48 GMT+0000"
            },
            {
                "_id": "5b2c0045890e57c6215bf462",
                "name": {
                    "first": "Savage",
                    "last": "Mcdaniel"
                },
                "type": "catalog",
                "couponCode": "DIGIQUE",
                "email": "savage.mcdaniel@undefined.name",
                "description": "ad culpa sunt excepteur in labore cupidatat laborum ut eu veniam minim consequat laboris anim",
                "redeemed": "Fri Mar 10 2017 06:44:35 GMT+0000"
            }
        ];
        this.incidents = [
            {
                "_id": "5b2c024666b36f0ef37fc14c",
                "type": "bug report",
                "incidentID": "SONGBIRD342497",
                "description": "qui cupidatat non ullamco in qui ex aliquip officia consectetur cillum amet cupidatat culpa cupidatat aliqua ex est voluptate veniam id incididunt qui magna commodo consectetur exercitation magna ea eu",
                "redeemed": "Mon Mar 28 2016 04:50:36 GMT+0000"
            },
            {
                "_id": "5b2c02465af41ec29a7ca9f1",
                "type": "fault report",
                "incidentID": "SKINSERVE122937",
                "description": "nulla irure laborum labore in tempor elit dolore nostrud aliqua est exercitation eiusmod anim pariatur exercitation reprehenderit do reprehenderit sint esse sint voluptate sunt ex consectetur magna pariatur do eiusmod",
                "redeemed": "Fri Oct 24 2014 16:19:22 GMT+0000"
            },
            {
                "_id": "5b2c02467215d61f720f5d2e",
                "type": "failure",
                "incidentID": "EDECINE964030",
                "description": "ex fugiat aliqua voluptate ea Lorem qui exercitation adipisicing eu commodo sint esse exercitation minim est ullamco eiusmod ad officia sint ea laborum exercitation magna est sit labore commodo non",
                "redeemed": "Tue Oct 07 2014 05:32:35 GMT+0000"
            },
            {
                "_id": "5b2c0246278dcb1bc571bb8c",
                "type": "incident",
                "incidentID": "NEUROCELL344625",
                "description": "sit sint sunt culpa reprehenderit magna esse ut sunt ut laboris fugiat qui eiusmod aliquip tempor minim pariatur excepteur Lorem commodo reprehenderit id veniam ullamco cillum eiusmod incididunt eiusmod pariatur",
                "redeemed": "Mon Oct 02 2017 17:30:28 GMT+0000"
            }
        ];
    }
    ProductsService.prototype.getProducts = function () {
        return this.products;
    };
    ProductsService.prototype.getMarketingInfo = function () {
        return this.marketing;
    };
    ProductsService.prototype.getIncidents = function () {
        return this.incidents;
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\n  <app-user-summary></app-user-summary>\n  <div class=\"border-div\"></div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6\">\n      <div class=\"card order-history-card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"custom-card-header\">\n                <span class=\"custom-card-header-text bottomBorder\">Purchase History</span>\n              </div>\n            </div>\n            <div class=\"col-md-6 pt-1\">\n              <div class=\"input-group input-group-sm\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-search\"></span></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"Search  Control1\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"history-list\">\n            <div class=\"row mt-4 mb-2 each-product\" *ngFor=\"let item of products; let i = index\">\n              <div class=\"col-md-3 pt-3\">\n                <img src=\"../../../assets/product{{i+1}}.png\" alt=\"\" width=\"100%\">\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"order-detail small\">\n                  <span class=\"text-muted\">Order # : </span>{{item.orderNumber || \"In-store Purchase\"}}\n                  <!-- <span *ngIf=\"item.status != 'Returned' && item.status != 'Delivered'\" class=\"tag badge badge-primary\">{{item.status}}</span> -->\n                  <!-- <span *ngIf=\"item.status == 'Returned'\" class=\"tag badge badge-warning\">{{item.status}}</span> -->\n                  <!-- <span *ngIf=\"item.status == 'Delivered'\" class=\"tag badge badge-success\">{{item.status}}</span> -->\n                  <span class=\"tag badge\" [ngClass] = \"resolveBadge(item.status)\">{{item.status}}</span>\n                </div>\n                <div class=\"order-detail small mb-1\">\n                  <span class=\"text-muted\">Tracking : </span>{{item.tracking.number || \"In-store Purchase\"}} | {{item.tracking.service || \"\"}}\n                </div>\n                <div class=\"product-title small mb-2\" style=\"line-height: 17px\">\n                  <b>{{item.title}}</b>\n                </div>\n                <div class=\"delivery-address text-muted small mb-2\">\n                  <span style=\"font-weight: 700\">Shipping Address :</span> <br>\n                  {{item.shippingAddress}}\n                </div>\n                <div class=\"order-details small mb-2\">\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Qty : </span> {{item.quantity}} |\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Size : </span> {{item.size}} |\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Status : </span> {{item.status}}\n                </div>\n                <div class=\"order-comments small\">\n                  <span class=\"text-muted\" style=\"font-weight: 700\">Comments : </span> {{item.comments}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"card order-history-card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"custom-card-header\">\n                <span class=\"custom-card-header-text bottomBorder\">Shipping History</span>\n              </div>\n            </div>\n            <div class=\"col-md-6 pt-1\">\n              <div class=\"input-group input-group-sm\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-search\"></span></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"Search  Control1\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"history-list\">\n\n            <div class=\"row-wrapper\" *ngFor=\"let item of products; let i = index\">\n              <div class=\"row mt-4 mb-2 each-product\" *ngIf=\"item.tracking.number\">\n                <div class=\"col-md-4 text-center\">\n                  <div class=\"shipping-service mb-1\">\n                    {{item.tracking.service || \"N/A\"}}\n                  </div>\n                  <div class=\"\">\n                    <span class=\"fa fa-fw fa-barcode\" style=\"font-size: 70px;\"></span>\n                  </div>\n                  <div class=\"small\">\n                    <span class=\"text-muted\">Tracking : </span> <br>{{item.tracking.number || \"N/A\"}}\n                  </div>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"order-detail small\">\n                    <span class=\"text-muted\">Order # : </span>{{item.orderNumber || \"In-store Purchase\"}}\n                    <span class=\"tag badge\" [ngClass] = \"resolveBadge(item.status)\">{{item.status}}</span>\n                  </div>\n                  <div class=\"delivery-address text-muted small mb-2\">\n                    <span style=\"font-weight: 700\">Shipping Address :</span> <br>\n                    {{item.shippingAddress}}\n                  </div>\n\n                  <div class=\"order-comments small\">\n                    <span class=\"text-muted\" style=\"font-weight: 700\">Comments : </span> {{item.comments}}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6\">\n      <div class=\"card order-history-card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"custom-card-header\">\n                <span class=\"custom-card-header-text bottomBorder\">Marketing History</span>\n              </div>\n            </div>\n            <div class=\"col-md-6 pt-1\">\n              <div class=\"input-group input-group-sm\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-search\"></span></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"Search  Control1\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"history-list\">\n\n            <div class=\"row-wrapper\" *ngFor=\"let coupon of marketing; let i = index\">\n              <div class=\"row mt-4 mb-2 each-product\">\n                <div class=\"col-md-1 text-center pt-4\">\n\n                  <div class=\"\">\n                    <span class=\"fa fa-fw\" [ngClass] = \"resolveIcon(coupon.type)\" style=\"font-size: 20px;\"></span>\n                  </div>\n\n                </div>\n                <div class=\"col-md-11\">\n                  <div class=\"order-detail small\">\n                    <span class=\"text-muted capitalize\">{{coupon.type}} Code: </span>{{coupon.couponCode}}\n                  </div>\n                  <div class=\"delivery-address text-muted small mb-2\">\n                    <span style=\"font-weight: 700\" class=\"capitalize\">{{coupon.type}} Details :</span> <br>\n                    {{coupon.description}}\n                  </div>\n\n                  <div class=\"order-comments small\"  *ngIf=\"coupon.type != 'catalog'\">\n                    <span class=\"text-muted\" style=\"font-weight: 700\">Redeemed On : </span> {{coupon.redeemed | date:'mediumDate'}}\n                  </div>\n                  <div class=\"order-comments small\"  *ngIf=\"coupon.type == 'catalog'\">\n                    <span class=\"text-muted\" style=\"font-weight: 700\">Shipped to customer On : </span> {{coupon.redeemed | date:'mediumDate'}}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-6\">\n      <div class=\"card order-history-card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"custom-card-header\">\n                <span class=\"custom-card-header-text bottomBorder\">Incident History</span>\n              </div>\n            </div>\n            <div class=\"col-md-6 pt-1\">\n              <div class=\"input-group input-group-sm\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><span class=\"fa fa-fw fa-search\"></span></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"Search  Control1\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"history-list\">\n\n            <div class=\"row-wrapper\" *ngFor=\"let incident of incidents; let i = index\">\n              <div class=\"row mt-4 mb-2 each-product each-incident\">\n                <div class=\"col-md-1 text-center\">\n                  <div class=\"pt-4 mt-2\">\n                    <span class=\"fa fa-fw\" [ngClass] = \"resolveIcon(incident.type)\" style=\"font-size: 20px;\"></span>\n                  </div>\n                  <!-- <div class=\"small mt-3\">\n                    <a href=\"\">Click to Get Details</a>\n                  </div> -->\n\n                </div>\n                <div class=\"col-md-11\">\n                  <div class=\"order-detail small\">\n                    <span class=\"text-muted\">Incident ID : </span>{{incident.incidentID}}\n                    <span class=\"tag badge\" [ngClass] = \"resolveBadge(incident.type)\">{{incident.type}}</span>\n                  </div>\n                  <div class=\"delivery-address text-muted small mb-2\">\n                    <span style=\"font-weight: 700\">Incident Brief :</span> <br>\n                    {{incident.description}}\n                  </div>\n\n                  <div class=\"order-comments small\">\n                    <span class=\"text-muted\" style=\"font-weight: 700\">Date reported : </span> {{incident.redeemed | date:'mediumDate'}}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.less":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".agent-info .agent-name .edit-button {\n  padding-left: 1em;\n  font-size: 0.7em;\n  position: absolute;\n}\n.agent-info .agent-name .edit-button:hover .text {\n  opacity: 1;\n}\n.agent-info .agent-name .edit-button .text {\n  font-size: 0.5em;\n  font-weight: 500;\n  opacity: 0;\n}\n.agent-info .services-section .badge-brand {\n  font-weight: 500;\n}\n.order-history-card .each-product {\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #ddd;\n}\n.order-history-card .each-product:last-child {\n  border-bottom: 1px dashed transparent;\n}\n.order-history-card .card-header {\n  border-bottom: 1px dashed #ccc;\n}\n.order-history-card .card-header .custom-card-header {\n  font-weight: 500;\n  font-size: 22px;\n  padding-bottom: 10px;\n}\n.order-history-card .card-header .custom-card-header-text {\n  padding-bottom: 5px;\n}\n.order-history-card .order-detail .tag {\n  float: right;\n  margin-right: 15px;\n  font-size: 11px;\n}\n.order-history-card .order-detail .tag.returned {\n  background-color: orange;\n}\n.order-history-card .card-body {\n  height: 500px;\n  overflow-y: scroll;\n}\n.order-history-card .card-body::-webkit-scrollbar {\n  width: 0.3em;\n}\n.order-history-card .card-body::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n.order-history-card .card-body::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n.each-incident:hover {\n  cursor: pointer;\n}\n.each-incident:hover .fa-bug {\n  color: #b753b7;\n}\n.each-incident:hover .fa-exclamation {\n  color: red;\n}\n.each-incident:hover .fa-exclamation-triangle {\n  color: orange;\n}\n.each-incident:hover .fa-info {\n  color: teal;\n}\n.badge-orange {\n  background-color: #ff9007;\n}\n.pointer {\n  cursor: pointer;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.bottomBorder {\n  border-bottom: 3px solid #0d3370;\n}\n.border-div {\n  height: 2px;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,7db9e8+100 */\n  background: #1e5799;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #1e5799 0%, #7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e5799', endColorstr='#7db9e8', GradientType=1);\n  /* IE6-9 */\n}\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(productsService) {
        this.productsService = productsService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.products = this.productsService.getProducts();
        this.marketing = this.productsService.getMarketingInfo();
        this.incidents = this.productsService.getIncidents();
        console.log(this.incidents);
    };
    UserInfoComponent.prototype.resolveBadge = function (status) {
        if (status == 'Returned')
            return 'badge-warning';
        else if (status == 'Purchased')
            return 'badge-info';
        else if (status == 'Out For Delivery')
            return 'badge-primary';
        else if (status == 'Delivered')
            return 'badge-success';
        else if (status == 'incident')
            return 'badge-warning';
        else if (status == 'failure')
            return 'badge-danger';
        else if (status == 'bug report')
            return 'badge-info';
        else if (status == 'fault report')
            return 'badge-orange';
    };
    UserInfoComponent.prototype.resolveIcon = function (type) {
        if (type == 'offer')
            return 'fa-dollar';
        else if (type == 'coupon')
            return 'fa-ticket';
        else if (type == 'catalog')
            return 'fa-book';
        else if (type == 'bug report')
            return 'fa-bug';
        else if (type == 'failure')
            return 'fa-exclamation-triangle';
        else if (type == 'incident')
            return 'fa-info';
        else if (type == 'fault report')
            return 'fa-exclamation';
    };
    UserInfoComponent.prototype.toggleClass = function ($event) {
        $event.currentTarget.classList.toggle("text-disabled");
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.less */ "./src/app/user-info/user-info.component.less")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-summary/user-summary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-info/user-summary/user-summary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row agent-info mt-4\" [ngClass]=\"{'mb-5': userExpanded, 'mb-4': !userExpanded}\">\n  <div class=\"col-md-12\">\n    <div class=\"agent-name pb-2\" [ngClass]=\"{'mb-3': userExpanded}\">\n      <h3 class=\"text-uppercase\">\n        <span class=\"text pb-1\" [ngClass]=\"{'bottomBorder': userExpanded}\">John Doester</span>\n        <span class=\"small pointer edit-button\">\n          <span class=\"fa fa-fw fa-pencil text-muted\"></span> <span class=\"text\">Edit this information  </span>\n        </span>\n      </h3>\n    </div>\n    <div class=\"row text-muted\" *ngIf=\"!userExpanded\">\n      <div class=\"col-md-6\">\n        <span class=\"fa fa-fw fa-map-marker\"></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Dolore, 446556\n      </div>\n      <div class=\"col-md-6\">\n        <span class=\"fa fa-fw fa-phone\"></span> +1 463-211-0000 &nbsp;\n        <span class=\"fa fa-fw fa-envelope\"></span> john.doester@example.com\n      </div>\n      <span class=\"pointer show-more\" (click)=\"userExpanded = !userExpanded\">Show More</span>\n    </div>\n\n    <div class=\"userExpanded\" *ngIf=\"userExpanded\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <span class=\"small text-uppercase text-muted\">Address</span> <br>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Dolore, 446556 <br>\n        </div>\n        <div class=\"col-md-4\">\n          <span class=\"small text-uppercase text-muted\">Contact</span> <br>\n          <span class=\"fa fa-fw fa-envelope-o text-muted small\"></span> john.doester@example.com <br>\n          <span class=\"fa fa-fw fa-phone text-muted small\"></span> +1 469-142-0000\n        </div>\n        <div class=\"col-md-4 services-section\">\n          <div class=\"additional-info\">\n            <span class=\"small text-uppercase text-muted\">Additional Information</span> <br>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-check\"></span> Frequest Customer</span>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-check\"></span> Hearing Impaired</span>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-check\"></span> Gold Club Member</span>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-check\"></span> Business Owner</span>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col-md-8\">\n          <span class=\"small text-uppercase text-muted\">Registered Family Members</span> <br>\n          <a class=\"badge badge-outline\" href=\"#\">Jason Statham</a>\n          <a class=\"badge badge-outline\" href=\"#\">Johny Depp</a>\n          <a class=\"badge badge-outline\" href=\"#\">Jim Carry</a>\n        </div>\n        <div class=\"col-md-4 services-section\">\n          <div class=\"additional-info\">\n            <span class=\"small text-uppercase text-muted\">Social</span> <br>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-facebook\"></span> john.doester</span>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-twitter\"></span> @johndoesterastro</span>\n            <span class=\"badge badge-pill badge-brand pointer\" (click)=\"toggleClass($event)\"> <span class=\"fa fa-fw fa-google\"></span> johndoesterastro</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-info/user-summary/user-summary.component.less":
/*!********************************************************************!*\
  !*** ./src/app/user-info/user-summary/user-summary.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".agent-info .agent-name .edit-button {\n  padding-left: 1em;\n  font-size: 0.7em;\n  position: absolute;\n}\n.agent-info .agent-name .edit-button:hover .text {\n  opacity: 1;\n}\n.agent-info .agent-name .edit-button .text {\n  font-size: 0.5em;\n  font-weight: 500;\n  opacity: 0;\n}\n.agent-info .services-section .badge-brand {\n  font-weight: 500;\n}\n.bottomBorder {\n  border-bottom: 3px solid #0d3370;\n}\n.show-more {\n  position: absolute;\n  top: 0;\n  right: 15px;\n  font-size: 13px;\n}\n.badge-outline {\n  margin: 0px 2px;\n  border: 1px solid #ccc;\n}\n.badge-outline:first-child {\n  margin: 0px 0px;\n}\n.badge-outline:hover {\n  text-decoration: none;\n}\n.pointer {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/user-info/user-summary/user-summary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-info/user-summary/user-summary.component.ts ***!
  \******************************************************************/
/*! exports provided: UserSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryComponent", function() { return UserSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSummaryComponent = /** @class */ (function () {
    function UserSummaryComponent() {
    }
    UserSummaryComponent.prototype.ngOnInit = function () {
    };
    UserSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-summary',
            template: __webpack_require__(/*! ./user-summary.component.html */ "./src/app/user-info/user-summary/user-summary.component.html"),
            styles: [__webpack_require__(/*! ./user-summary.component.less */ "./src/app/user-info/user-summary/user-summary.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSummaryComponent);
    return UserSummaryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\miracleProjects\genesco\genesco-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
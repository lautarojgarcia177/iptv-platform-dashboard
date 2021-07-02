(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: '**', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'nebula-dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_charts_user_platform_user_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/charts/user-platform/user-platform.component */ "./src/app/components/charts/user-platform/user-platform.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_charts_channels_views_channels_views_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/charts/channels-views/channels-views.component */ "./src/app/components/charts/channels-views/channels-views.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _components_charts_most_viewed_channels_most_viewed_channels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/charts/most-viewed-channels/most-viewed-channels.component */ "./src/app/components/charts/most-viewed-channels/most-viewed-channels.component.ts");
/* harmony import */ var _components_charts_device_visualization_device_visualization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/charts/device-visualization/device-visualization.component */ "./src/app/components/charts/device-visualization/device-visualization.component.ts");
/* harmony import */ var _components_charts_most_viewed_channels_now_most_viewed_channels_now_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/charts/most-viewed-channels-now/most-viewed-channels-now.component */ "./src/app/components/charts/most-viewed-channels-now/most-viewed-channels-now.component.ts");
/* harmony import */ var _components_charts_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/charts/total-users/total-users.component */ "./src/app/components/charts/total-users/total-users.component.ts");
/* harmony import */ var _components_charts_most_viewed_programs_most_viewed_programs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/charts/most-viewed-programs/most-viewed-programs.component */ "./src/app/components/charts/most-viewed-programs/most-viewed-programs.component.ts");
/* harmony import */ var _components_charts_devices_usage_devices_usage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/charts/devices-usage/devices-usage.component */ "./src/app/components/charts/devices-usage/devices-usage.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "./node_modules/echarts/index.js", 7))
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _components_charts_user_platform_user_platform_component__WEBPACK_IMPORTED_MODULE_5__["UserPlatformComponent"],
        _components_charts_channels_views_channels_views_component__WEBPACK_IMPORTED_MODULE_8__["ChannelsViewsComponent"],
        _components_charts_most_viewed_channels_most_viewed_channels_component__WEBPACK_IMPORTED_MODULE_10__["MostViewedChannelsComponent"],
        _components_charts_device_visualization_device_visualization_component__WEBPACK_IMPORTED_MODULE_11__["DeviceVisualizationComponent"],
        _components_charts_most_viewed_channels_now_most_viewed_channels_now_component__WEBPACK_IMPORTED_MODULE_12__["MostViewedChannelsNowComponent"],
        _components_charts_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_13__["TotalUsersComponent"],
        _components_charts_most_viewed_programs_most_viewed_programs_component__WEBPACK_IMPORTED_MODULE_14__["MostViewedProgramsComponent"],
        _components_charts_devices_usage_devices_usage_component__WEBPACK_IMPORTED_MODULE_15__["DevicesUsageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _components_charts_user_platform_user_platform_component__WEBPACK_IMPORTED_MODULE_5__["UserPlatformComponent"],
                    _components_charts_channels_views_channels_views_component__WEBPACK_IMPORTED_MODULE_8__["ChannelsViewsComponent"],
                    _components_charts_most_viewed_channels_most_viewed_channels_component__WEBPACK_IMPORTED_MODULE_10__["MostViewedChannelsComponent"],
                    _components_charts_device_visualization_device_visualization_component__WEBPACK_IMPORTED_MODULE_11__["DeviceVisualizationComponent"],
                    _components_charts_most_viewed_channels_now_most_viewed_channels_now_component__WEBPACK_IMPORTED_MODULE_12__["MostViewedChannelsNowComponent"],
                    _components_charts_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_13__["TotalUsersComponent"],
                    _components_charts_most_viewed_programs_most_viewed_programs_component__WEBPACK_IMPORTED_MODULE_14__["MostViewedProgramsComponent"],
                    _components_charts_devices_usage_devices_usage_component__WEBPACK_IMPORTED_MODULE_15__["DevicesUsageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "./node_modules/echarts/index.js", 7))
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/charts/channels-views/channels-views.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/charts/channels-views/channels-views.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChannelsViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsViewsComponent", function() { return ChannelsViewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



class ChannelsViewsComponent {
    constructor() {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}</br>{a}</br> {c} Usuarios',
            },
            legend: {
                data: ['El trece', 'ESPN 2', 'America', 'Telefe']
            },
            xAxis: {
                type: 'category',
                name: 'Hora',
                boundaryGap: false,
                data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24']
            },
            yAxis: {
                type: 'value',
                name: 'Total de usuarios'
            },
            series: [
                {
                    name: 'El trece',
                    data: [125, 100, 70, 75, 80, 75, 70, 80, 86, 92, 102, 130, 50, 45, 90, 85, 30, 15, 16, 10, 5, 4, 12, 40],
                    type: 'line',
                    stack: 'El trece',
                },
                {
                    name: 'ESPN 2',
                    data: [50, 20, 90, 85, 30, 15, 16, 20, 35, 34, 32, 40, 100, 90, 70, 20, 25, 15, 11, 12, 11, 9, 2, 8],
                    type: 'line',
                    stack: 'ESPN 2',
                },
                {
                    name: 'America',
                    data: [60, 70, 70, 50, 40, 40, 31, 32, 31, 29, 32, 28, 20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17],
                    type: 'line',
                    stack: 'America'
                },
                {
                    name: 'Telefe',
                    data: [20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17, 20, 20, 30, 20, 10, 10, 11, 12, 11, 9, 4, 8],
                    type: 'line',
                    stack: 'Telefe'
                }
            ]
        };
    }
}
ChannelsViewsComponent.ɵfac = function ChannelsViewsComponent_Factory(t) { return new (t || ChannelsViewsComponent)(); };
ChannelsViewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelsViewsComponent, selectors: [["app-channels-views"]], decls: 1, vars: 1, consts: [["echarts", "", 3, "options"]], template: function ChannelsViewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2NoYW5uZWxzLXZpZXdzL2NoYW5uZWxzLXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsViewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channels-views',
                templateUrl: './channels-views.component.html',
                styleUrls: ['./channels-views.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/charts/device-visualization/device-visualization.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/charts/device-visualization/device-visualization.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeviceVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceVisualizationComponent", function() { return DeviceVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



class DeviceVisualizationComponent {
    constructor() {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}</br>{a}</br> {c} Usuarios',
            },
            legend: {
                data: ['App Android STB', 'App Android Mobile', 'Browser PC', 'Browser iPad']
            },
            xAxis: {
                type: 'category',
                name: 'Hora',
                boundaryGap: false,
                data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24']
            },
            yAxis: {
                type: 'value',
                name: 'Total de usuarios'
            },
            series: [
                {
                    name: 'App Android STB',
                    data: [125, 100, 70, 75, 80, 75, 70, 80, 86, 92, 102, 130, 50, 45, 90, 85, 30, 15, 16, 10, 5, 4, 12, 40],
                    type: 'line',
                    stack: 'App Android STB',
                },
                {
                    name: 'App Android Mobile',
                    data: [50, 20, 90, 85, 30, 15, 16, 20, 35, 34, 32, 40, 100, 90, 70, 20, 25, 15, 11, 12, 11, 9, 2, 8],
                    type: 'line',
                    stack: 'App Android Mobile',
                },
                {
                    name: 'Browser PC',
                    data: [60, 70, 70, 50, 40, 40, 31, 32, 31, 29, 32, 28, 20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17],
                    type: 'line',
                    stack: 'Browser PC'
                },
                {
                    name: 'Browser iPad',
                    data: [20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17, 20, 20, 30, 20, 10, 10, 11, 12, 11, 9, 4, 8],
                    type: 'line',
                    stack: 'Browser iPad'
                }
            ]
        };
    }
    ngOnInit() {
    }
}
DeviceVisualizationComponent.ɵfac = function DeviceVisualizationComponent_Factory(t) { return new (t || DeviceVisualizationComponent)(); };
DeviceVisualizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviceVisualizationComponent, selectors: [["app-device-visualization"]], decls: 1, vars: 1, consts: [["echarts", "", 3, "options"]], template: function DeviceVisualizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2RldmljZS12aXN1YWxpemF0aW9uL2RldmljZS12aXN1YWxpemF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceVisualizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-device-visualization',
                templateUrl: './device-visualization.component.html',
                styleUrls: ['./device-visualization.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/devices-usage/devices-usage.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/charts/devices-usage/devices-usage.component.ts ***!
  \****************************************************************************/
/*! exports provided: DevicesUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesUsageComponent", function() { return DevicesUsageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



class DevicesUsageComponent {
    constructor() {
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color: ['#003366', '#006699', '#4cabce', '#e5323e', '#e5323e', '#e5323e', '#e5323e'],
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['App Android Mobile', 'App Android STB', 'Browser PC', 'Browser Smart TV', 'Browser Android', 'Browser iPad', 'Browser iPhone']
            },
            series: [
                {
                    name: 'total',
                    type: 'bar',
                    data: [
                        { value: 138, itemStyle: { color: 'blue' } },
                        { value: 82, itemStyle: { color: 'red' } },
                        { value: 53, itemStyle: { color: 'green' } },
                        { value: 40, itemStyle: { color: 'cyan' } },
                        { value: 32, itemStyle: { color: 'magenta' } },
                        { value: 21, itemStyle: { color: 'gray' } },
                        { value: 10, itemStyle: { color: 'brown' } },
                    ],
                },
            ]
        };
    }
    ngOnInit() {
    }
}
DevicesUsageComponent.ɵfac = function DevicesUsageComponent_Factory(t) { return new (t || DevicesUsageComponent)(); };
DevicesUsageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevicesUsageComponent, selectors: [["app-devices-usage"]], decls: 1, vars: 1, consts: [["echarts", "", 3, "options"]], template: function DevicesUsageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2RldmljZXMtdXNhZ2UvZGV2aWNlcy11c2FnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesUsageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-devices-usage',
                templateUrl: './devices-usage.component.html',
                styleUrls: ['./devices-usage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/most-viewed-channels-now/most-viewed-channels-now.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/charts/most-viewed-channels-now/most-viewed-channels-now.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MostViewedChannelsNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostViewedChannelsNowComponent", function() { return MostViewedChannelsNowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MostViewedChannelsNowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", program_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", program_r1.startTime, " - ", program_r1.duration, "min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r1.users);
} }
class MostViewedChannelsNowComponent {
    constructor() {
        this.data = [
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Los ángeles de la mañana', startTime: '11:00', duration: 119, users: 14 },
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/2_20200526130759.png', name: 'Canal 13 La Rioja', startTime: '12:00', duration: 59, users: 7 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628173607.png', name: 'Informados de todo', startTime: '11:00', duration: 149, users: 7 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'SportsCenter - Mediadía', startTime: '9:00', duration: 269, users: 6 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: '30 años juntos: Avenida Brasil', startTime: '12:00', duration: 59, users: 5 },
        ];
    }
    ngOnInit() {
    }
}
MostViewedChannelsNowComponent.ɵfac = function MostViewedChannelsNowComponent_Factory(t) { return new (t || MostViewedChannelsNowComponent)(); };
MostViewedChannelsNowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostViewedChannelsNowComponent, selectors: [["app-most-viewed-channels-now"]], decls: 9, vars: 1, consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "src"]], template: function MostViewedChannelsNowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MostViewedChannelsNowComponent_tr_8_Template, 8, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydHMvbW9zdC12aWV3ZWQtY2hhbm5lbHMtbm93L21vc3Qtdmlld2VkLWNoYW5uZWxzLW5vdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL21vc3Qtdmlld2VkLWNoYW5uZWxzLW5vdy9tb3N0LXZpZXdlZC1jaGFubmVscy1ub3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDJyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostViewedChannelsNowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-most-viewed-channels-now',
                templateUrl: './most-viewed-channels-now.component.html',
                styleUrls: ['./most-viewed-channels-now.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/most-viewed-channels/most-viewed-channels.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/charts/most-viewed-channels/most-viewed-channels.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MostViewedChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostViewedChannelsComponent", function() { return MostViewedChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MostViewedChannelsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", channel_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.users);
} }
class MostViewedChannelsComponent {
    constructor() {
        this.data = [
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'El trece', startTime: '11:00', duration: 119, users: 104 },
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/2_20200526130759.png', name: 'Canal 13', startTime: '12:00', duration: 59, users: 70 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628173607.png', name: 'América', startTime: '11:00', duration: 149, users: 70 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'ESPN', startTime: '9:00', duration: 269, users: 60 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: 'Telefe', startTime: '12:00', duration: 59, users: 55 },
        ];
    }
    ngOnInit() {
    }
}
MostViewedChannelsComponent.ɵfac = function MostViewedChannelsComponent_Factory(t) { return new (t || MostViewedChannelsComponent)(); };
MostViewedChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostViewedChannelsComponent, selectors: [["app-most-viewed-channels"]], decls: 10, vars: 1, consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "src"]], template: function MostViewedChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MostViewedChannelsComponent_tr_9_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydHMvbW9zdC12aWV3ZWQtY2hhbm5lbHMvbW9zdC12aWV3ZWQtY2hhbm5lbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9tb3N0LXZpZXdlZC1jaGFubmVscy9tb3N0LXZpZXdlZC1jaGFubmVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1heC13aWR0aDogMnJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostViewedChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-most-viewed-channels',
                templateUrl: './most-viewed-channels.component.html',
                styleUrls: ['./most-viewed-channels.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/most-viewed-programs/most-viewed-programs.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/charts/most-viewed-programs/most-viewed-programs.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MostViewedProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostViewedProgramsComponent", function() { return MostViewedProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MostViewedProgramsComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", program_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", program_r1.startTime, " - ", program_r1.duration, "min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r1.users);
} }
class MostViewedProgramsComponent {
    constructor() {
        this.data = [
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'CONMEBOL Libertadores', startTime: '21:00', duration: 149, users: 64 },
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Cantando 2020', startTime: '12:00', duration: 59, users: 7 },
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Noticiero 13', startTime: '11:00', duration: 149, users: 7 },
            { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: 'Jesús', startTime: '9:00', duration: 269, users: 6 },
            { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Los ángeles de la mañana', startTime: '12:00', duration: 59, users: 5 },
        ];
    }
    ngOnInit() {
    }
}
MostViewedProgramsComponent.ɵfac = function MostViewedProgramsComponent_Factory(t) { return new (t || MostViewedProgramsComponent)(); };
MostViewedProgramsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostViewedProgramsComponent, selectors: [["app-most-viewed-programs"]], decls: 9, vars: 1, consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "src"]], template: function MostViewedProgramsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MostViewedProgramsComponent_tr_8_Template, 8, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydHMvbW9zdC12aWV3ZWQtcHJvZ3JhbXMvbW9zdC12aWV3ZWQtcHJvZ3JhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9tb3N0LXZpZXdlZC1wcm9ncmFtcy9tb3N0LXZpZXdlZC1wcm9ncmFtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1heC13aWR0aDogMnJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostViewedProgramsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-most-viewed-programs',
                templateUrl: './most-viewed-programs.component.html',
                styleUrls: ['./most-viewed-programs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/total-users/total-users.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/charts/total-users/total-users.component.ts ***!
  \************************************************************************/
/*! exports provided: TotalUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalUsersComponent", function() { return TotalUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



class TotalUsersComponent {
    constructor() {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: 'Rango horario {b}, {c} {a} totales',
            },
            xAxis: {
                type: 'category',
                name: 'Hora',
                boundaryGap: false,
                data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24']
            },
            yAxis: {
                type: 'value',
                name: 'Total de usuarios'
            },
            series: [{
                    name: 'Rangos horarios',
                    data: [125, 100, 90, 85, 80, 75, 70, 80, 86, 92, 102, 130, 120, 110, 100, 103, 107, 115, 120, 140, 141, 132, 124, 120],
                    type: 'line',
                    areaStyle: {}
                }]
        };
    }
    ngOnInit() {
    }
}
TotalUsersComponent.ɵfac = function TotalUsersComponent_Factory(t) { return new (t || TotalUsersComponent)(); };
TotalUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotalUsersComponent, selectors: [["app-total-users"]], decls: 1, vars: 1, consts: [["echarts", "", 3, "options"]], template: function TotalUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL3RvdGFsLXVzZXJzL3RvdGFsLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-total-users',
                templateUrl: './total-users.component.html',
                styleUrls: ['./total-users.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/charts/user-platform/user-platform.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/charts/user-platform/user-platform.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserPlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlatformComponent", function() { return UserPlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



class UserPlatformComponent {
    constructor() {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['App Android Mobile', 'Browser PC', 'App Android STB'],
            },
            series: [
                {
                    name: 'Dispositivo',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    animation: false,
                    data: [
                        { value: 1, name: 'App Android Mobile' },
                        { value: 7, name: 'Browser PC' },
                        { value: 58, name: 'App Android STB' },
                    ],
                },
            ],
        };
    }
}
UserPlatformComponent.ɵfac = function UserPlatformComponent_Factory(t) { return new (t || UserPlatformComponent)(); };
UserPlatformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPlatformComponent, selectors: [["app-user-platform"]], decls: 1, vars: 2, consts: [["echarts", "", 3, "options", "theme"]], template: function UserPlatformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("theme", "macarons");
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL3VzZXItcGxhdGZvcm0vdXNlci1wbGF0Zm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPlatformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-platform',
                templateUrl: './user-platform.component.html',
                styleUrls: ['./user-platform.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_charts_user_platform_user_platform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/charts/user-platform/user-platform.component */ "./src/app/components/charts/user-platform/user-platform.component.ts");
/* harmony import */ var _components_charts_most_viewed_channels_now_most_viewed_channels_now_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/charts/most-viewed-channels-now/most-viewed-channels-now.component */ "./src/app/components/charts/most-viewed-channels-now/most-viewed-channels-now.component.ts");
/* harmony import */ var _components_charts_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/charts/total-users/total-users.component */ "./src/app/components/charts/total-users/total-users.component.ts");
/* harmony import */ var _components_charts_channels_views_channels_views_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/charts/channels-views/channels-views.component */ "./src/app/components/charts/channels-views/channels-views.component.ts");
/* harmony import */ var _components_charts_device_visualization_device_visualization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/charts/device-visualization/device-visualization.component */ "./src/app/components/charts/device-visualization/device-visualization.component.ts");
/* harmony import */ var _components_charts_most_viewed_programs_most_viewed_programs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/charts/most-viewed-programs/most-viewed-programs.component */ "./src/app/components/charts/most-viewed-programs/most-viewed-programs.component.ts");
/* harmony import */ var _components_charts_most_viewed_channels_most_viewed_channels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/charts/most-viewed-channels/most-viewed-channels.component */ "./src/app/components/charts/most-viewed-channels/most-viewed-channels.component.ts");
/* harmony import */ var _components_charts_devices_usage_devices_usage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/charts/devices-usage/devices-usage.component */ "./src/app/components/charts/devices-usage/devices-usage.component.ts");










class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 45, vars: 0, consts: [[1, "container", "mt-3"], [1, "row"], [1, "col", "pr-3"], [1, "col"], [1, "card-title"], [1, "mb-2", "text-muted"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cantidad de usuarios conectados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user-platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Programas mas vistos en este momento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-most-viewed-channels-now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total de usuarios por hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cantidad de usuarios viendo TV por hora el d\u00EDa Mi\u00E9rcoles 23 de Septiembre de 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-total-users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Canales m\u00E1s vistos por hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Usuarios por hora de los 10 canales m\u00E1s vistos el d\u00EDa Mi\u00E9rcoles 23 de Septiembre de 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-channels-views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Visualizaciones por dispositivo por hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Usuarios por hora que vieron en los diferentes dispositivos el d\u00EDa Mi\u00E9rcoles 23 de Septiembre de 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-device-visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Programas mas vistos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-most-viewed-programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Canales mas vistos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-most-viewed-channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Uso de dispositivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-devices-usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_charts_user_platform_user_platform_component__WEBPACK_IMPORTED_MODULE_1__["UserPlatformComponent"], _components_charts_most_viewed_channels_now_most_viewed_channels_now_component__WEBPACK_IMPORTED_MODULE_2__["MostViewedChannelsNowComponent"], _components_charts_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_3__["TotalUsersComponent"], _components_charts_channels_views_channels_views_component__WEBPACK_IMPORTED_MODULE_4__["ChannelsViewsComponent"], _components_charts_device_visualization_device_visualization_component__WEBPACK_IMPORTED_MODULE_5__["DeviceVisualizationComponent"], _components_charts_most_viewed_programs_most_viewed_programs_component__WEBPACK_IMPORTED_MODULE_6__["MostViewedProgramsComponent"], _components_charts_most_viewed_channels_most_viewed_channels_component__WEBPACK_IMPORTED_MODULE_7__["MostViewedChannelsComponent"], _components_charts_devices_usage_devices_usage_component__WEBPACK_IMPORTED_MODULE_8__["DevicesUsageComponent"]], styles: [".col[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    margin-left: 0.5rem;\r\n    margin-right: 0.5rem;\r\n    border: 2px solid gray;\r\n    border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Qvix\iptv dashboard\iptv-platform-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-title {\r\n\ttext-align:center\r\n}\r\n\r\n.graph-div {\r\n\twidth: 60%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.calculator-div {\r\n\tdisplay: inline-block;\r\n    position: absolute;\r\n}\r\n\r\n.convertions-val h1 {\r\n\tdisplay: inline-block;\r\n    margin-left: 20%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"dashboard-title\">\n    {{title}}\n  </h1>\n</div>\n\n<div class=\"first-row\">\n\t<div class=\"graph-div\">\n\t\t<app-graph></app-graph>\n\t</div>\n\t<div class=\"calculator-div\">\n\t\t<app-calculator [currencies]=\"currencies\"></app-calculator>\n\t</div>\n</div>\n\n<div class=\"convertions-val\">\n\t<h1>1 BTC = {{btc_usd.USD}} </h1>\n\t<h1>1 ETH = {{eth_usd.USD}} </h1>\n</div>\n\n<app-tables></app-tables>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__ = __webpack_require__("./src/app/calculator/calculator.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.title = 'CryptoCurrency Dashboard';
        this.currencies = null;
        this.btc_usd = 0;
        this.eth_usd = 0;
        this.dataService.updateCurrencies();
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(10000).subscribe(function (x) {
            _this.dataService.updateCurrencies();
            _this.currencies = _this.dataService.getCurrencies();
            _this.btc_usd = _this.currencies['BTC'];
            _this.eth_usd = _this.currencies['ETH'];
        });
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__["a" /* CalculatorComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__["a" /* CalculatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__["a" /* CalculatorComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "childCalculator", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_middleware_service__ = __webpack_require__("./src/app/shared/services/middleware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calculator_calculator_component__ = __webpack_require__("./src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tables_tables_component__ = __webpack_require__("./src/app/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tables_table_btc_table_btc_component__ = __webpack_require__("./src/app/tables/table-btc/table-btc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tables_table_eth_table_eth_component__ = __webpack_require__("./src/app/tables/table-eth/table-eth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graph_graph_component__ = __webpack_require__("./src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__calculator_calculator_component__["a" /* CalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tables_tables_component__["a" /* TablesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tables_table_btc_table_btc_component__["a" /* TableBTCComponent */],
            __WEBPACK_IMPORTED_MODULE_13__tables_table_eth_table_eth_component__["a" /* TableETHComponent */],
            __WEBPACK_IMPORTED_MODULE_14__graph_graph_component__["a" /* GraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_services_middleware_service__["a" /* MiddlewareService */], __WEBPACK_IMPORTED_MODULE_9__shared_services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n <mat-form-field>\n    <input matInput name=\"target\" type=\"number\" value=\"{{target | number:'1.2-2'}}\" [(ngModel)]=\"calculatorForm.target\" (keyup)=\"calcExchange('TargetToBase')\">\n </mat-form-field>\n\n<mat-form-field>\n  <mat-select [(ngModel)]=\"calculatorForm.selectedTarget\" (change)=\"calcExchange('TargetToBase')\">\n    <mat-option *ngFor=\"let currencyT of currenciesTarget\" [value]=\"currencyT\">\n      {{ currencyT }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n\n<div>\n<mat-form-field>\n    <input matInput name=\"base\" type=\"number\" value=\"{{base | number:'1.2-2'}}\" [(ngModel)]=\"calculatorForm.base\" (keyup)=\"calcExchange('BaseToTarget')\">\n </mat-form-field>\n\n<mat-form-field>\n  <mat-select [(ngModel)]=\"calculatorForm.selectedBase\" (change)=\"calcExchange('BaseToTarget')\">\n    <mat-option *ngFor=\"let currenciesB of currenciesBase\" [value]=\"currenciesB\">\n      {{ currenciesB }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n\n{{currenciesVal| json}}"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_helper_currencies_model__ = __webpack_require__("./src/app/shared/helper/currencies.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatorComponent = (function () {
    function CalculatorComponent(ref) {
        this.ref = ref;
        this.currenciesTarget = ['USD', 'EUR'];
        this.currenciesBase = ['BTC', 'ETH'];
        this.calculatorForm = { target: 0, base: 0, selectedTarget: 'USD', selectedBase: 'BTC' };
    }
    CalculatorComponent.prototype.calcExchange = function (order) {
        if (this.currencies) {
            if (order === 'BaseToTarget') {
                var baseSelected = this.calculatorForm.selectedBase;
                var targetSelected = this.calculatorForm.selectedTarget;
                var target = this.currencies[baseSelected];
                this.calculatorForm.target = this.calculatorForm.base * target[targetSelected];
            }
            if (order === 'TargetToBase') {
                var targetSelected = this.calculatorForm.selectedTarget;
                var baseSelected = this.calculatorForm.selectedBase;
                var base = this.currencies[baseSelected];
                var baseConverted = 1 / base[targetSelected];
                this.calculatorForm.base = this.calculatorForm.target * baseConverted;
            }
        }
    };
    return CalculatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_helper_currencies_model__["a" /* Currencies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_helper_currencies_model__["a" /* Currencies */]) === "function" && _a || Object)
], CalculatorComponent.prototype, "currencies", void 0);
CalculatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__("./src/app/calculator/calculator.component.html"),
        styles: [__webpack_require__("./src/app/calculator/calculator.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], CalculatorComponent);

var _a, _b;
//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ "./src/app/graph/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return multi; });
var single = [];
var multi = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-charts-line-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-line-chart>\n"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("./src/app/graph/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = (function () {
    function GraphComponent(dataService) {
        this.dataService = dataService;
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Currency';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        var lastValues = this.dataService.getLastValues();
        console.log(lastValues);
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__data__["a" /* single */], multi: __WEBPACK_IMPORTED_MODULE_1__data__["b" /* multi */] });
    }
    GraphComponent.prototype.onSelect = function (event) {
        // console.log(event);
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph',
        template: __webpack_require__("./src/app/graph/graph.component.html"),
        styles: [__webpack_require__("./src/app/graph/graph.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], GraphComponent);

var _a;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "./src/app/shared/helper/currencies.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currencies; });
var Currencies = (function () {
    function Currencies() {
    }
    return Currencies;
}());

//# sourceMappingURL=currencies.model.js.map

/***/ }),

/***/ "./src/app/shared/helper/graphData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphData; });
var GraphData = (function () {
    function GraphData() {
    }
    return GraphData;
}());

//# sourceMappingURL=graphData.model.js.map

/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_middleware_service__ = __webpack_require__("./src/app/shared/services/middleware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_currencies_model__ = __webpack_require__("./src/app/shared/helper/currencies.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_graphData_model__ = __webpack_require__("./src/app/shared/helper/graphData.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(middlewareService) {
        this.middlewareService = middlewareService;
        this.currencies = null;
        this.currenciesBTC = null;
        this.currenciesETH = null;
        this.dataBTC = new __WEBPACK_IMPORTED_MODULE_3__helper_graphData_model__["a" /* GraphData */]();
        this.dataETH = new __WEBPACK_IMPORTED_MODULE_3__helper_graphData_model__["a" /* GraphData */]();
        this.allData = [];
        this.currenciesArrBTC = [];
        this.currenciesArrETH = [];
        this.lastValues = [];
        this.dataBTC.name = 'BTC';
        this.dataETH.name = 'ETH';
        this.dataBTC.series = [{ name: 'T', value: 0 }];
        this.dataETH.series = [{ name: 'T', value: 0 }];
    }
    DataService.prototype.updateCurrencies = function () {
        var _this = this;
        return this.middlewareService.getRequest('https://min-api.cryptocompare.com/data/pricemulti', 'fsyms=ETH,BTC&tsyms=USD,EUR,BTC')
            .then(function (response) {
            _this.setCurrencies(response);
            return response;
        });
    };
    DataService.prototype.setCurrencies = function (data) {
        var time = new Date();
        var BTC = new __WEBPACK_IMPORTED_MODULE_2__helper_currencies_model__["a" /* Currencies */]();
        var ETH = new __WEBPACK_IMPORTED_MODULE_2__helper_currencies_model__["a" /* Currencies */]();
        this.currencies = data ? data : {};
        this.currencies.timestamp = time;
        this.updateLastValues(data);
        BTC.base = data.BTC ? data.BTC : {};
        BTC.timestamp = time;
        ETH.base = data.ETH ? data.ETH : {};
        ETH.timestamp = time;
        this.pushArray(BTC, ETH);
    };
    DataService.prototype.getCurrencies = function () {
        if (this.currencies) {
            return this.currencies;
        }
        return null;
    };
    DataService.prototype.pushArray = function (currencyBTC, currencyETH) {
        this.currenciesArrBTC.push(currencyBTC);
        this.currenciesArrETH.push(currencyETH);
    };
    DataService.prototype.getArrayBTC = function () {
        return this.currenciesArrBTC;
    };
    DataService.prototype.getArrayETH = function () {
        return this.currenciesArrETH;
    };
    DataService.prototype.updateLastValues = function (data) {
        if (data) {
            if (this.lastValues.length < 10) {
                this.lastValues.push(data);
                return;
            }
            if (this.lastValues.length === 10) {
                this.lastValues.shift();
                this.lastValues.push(data);
                return;
            }
        }
    };
    DataService.prototype.getLastValues = function () {
        var _this = this;
        this.lastValues.forEach(function (currentValue, index, array) {
            var time = 'T' + index;
            console.log(_this.dataBTC.series);
            _this.dataBTC.series.push({ name: time, value: currentValue['BTC'].USD });
            _this.dataETH.series.push({ name: time, value: currentValue['ETH'].USD });
            console.log(_this.dataBTC);
        });
        this.allData.push(this.dataBTC);
        this.allData.push(this.dataETH);
        console.log(this.allData);
        return this.allData;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_middleware_service__["a" /* MiddlewareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_middleware_service__["a" /* MiddlewareService */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/app/shared/services/middleware.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiddlewareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MiddlewareService = (function () {
    function MiddlewareService(http, injector) {
        this.http = http;
        this.injector = injector;
    }
    MiddlewareService.prototype.getRequest = function (url, data, options) {
        return this._builtedRequest('GET', url, data, options);
    };
    MiddlewareService.prototype._builtedRequest = function (requestType, url, data, options) {
        var requestURL = url;
        var requestOptions = Object.assign({}, options);
        requestOptions['method'] = requestType || 'GET';
        requestOptions['search'] = data;
        return this.http.request(requestURL, requestOptions)
            .toPromise()
            .then(this._parseReponse.bind(this))
            .catch(this._handleError.bind(this));
    };
    MiddlewareService.prototype._parseReponse = function (response) {
        var data = response ? response.json() : {};
        if (data.success) {
            return Promise.reject(data);
        }
        return data || data.error || {};
    };
    MiddlewareService.prototype._handleError = function (error) {
        var errorMessage;
        errorMessage = { success: false, error: "An error ocurred" };
        return Promise.reject(errorMessage);
    };
    return MiddlewareService;
}());
MiddlewareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], MiddlewareService);

var _a, _b;
//# sourceMappingURL=middleware.service.js.map

/***/ }),

/***/ "./src/app/tables/table-btc/table-btc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tables/table-btc/table-btc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    \n    <ng-container matColumnDef=\"timestamp\">\n      <mat-header-cell *matHeaderCellDef> Time </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.timestamp | date:'medium'}} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"USD\">\n      <mat-header-cell *matHeaderCellDef> USD </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.base.USD}}</mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"EUR\">\n      <mat-header-cell *matHeaderCellDef> EUR </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.base.EUR}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "./src/app/tables/table-btc/table-btc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableBTCComponent; });
/* unused harmony export TableDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TableBTCComponent = (function () {
    function TableBTCComponent(dataService, ref) {
        this.dataService = dataService;
        this.ref = ref;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.displayedColumns = ['timestamp', 'USD', 'EUR'];
        this.currenciesComplete = null;
    }
    Object.defineProperty(TableBTCComponent.prototype, "currency", {
        get: function () { return this.dataChange.value; },
        set: function (_currency) { this.dataChange.next(_currency); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TableBTCComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.detach();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(10000).subscribe(function (x) {
            _this.currencies = _this.dataService.getArrayBTC();
            _this.dataSource = new TableDataSource(_this.currencies);
            _this.ref.detectChanges();
        });
    };
    return TableBTCComponent;
}());
TableBTCComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-btc',
        template: __webpack_require__("./src/app/tables/table-btc/table-btc.component.html"),
        styles: [__webpack_require__("./src/app/tables/table-btc/table-btc.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], TableBTCComponent);

var TableDataSource = (function (_super) {
    __extends(TableDataSource, _super);
    function TableDataSource(_currency) {
        var _this = _super.call(this) || this;
        _this._currency = _currency;
        _this.filteredData = [];
        _this.renderedData = [];
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    TableDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._currency,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this._currency.slice();
            return data;
        });
    };
    TableDataSource.prototype.disconnect = function () { };
    return TableDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["d" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=table-btc.component.js.map

/***/ }),

/***/ "./src/app/tables/table-eth/table-eth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tables/table-eth/table-eth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    \n    <ng-container matColumnDef=\"timestamp\">\n      <mat-header-cell *matHeaderCellDef> Time </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.timestamp | date:'medium'}} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"USD\">\n      <mat-header-cell *matHeaderCellDef> USD </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.base.USD}}</mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"EUR\">\n      <mat-header-cell *matHeaderCellDef> EUR </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.base.EUR}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"BTC\">\n      <mat-header-cell *matHeaderCellDef> BTC </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.base.BTC}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-eth/table-eth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableETHComponent; });
/* unused harmony export TableDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TableETHComponent = (function () {
    function TableETHComponent(dataService, ref) {
        this.dataService = dataService;
        this.ref = ref;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.displayedColumns = ['timestamp', 'USD', 'EUR', 'BTC'];
        this.currenciesComplete = null;
    }
    Object.defineProperty(TableETHComponent.prototype, "currency", {
        get: function () { return this.dataChange.value; },
        set: function (_currency) { this.dataChange.next(_currency); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TableETHComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.detach();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(10000).subscribe(function (x) {
            _this.currencies = _this.dataService.getArrayETH();
            _this.dataSource = new TableDataSource(_this.currencies);
            _this.ref.detectChanges();
        });
    };
    return TableETHComponent;
}());
TableETHComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-eth',
        template: __webpack_require__("./src/app/tables/table-eth/table-eth.component.html"),
        styles: [__webpack_require__("./src/app/tables/table-eth/table-eth.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], TableETHComponent);

var TableDataSource = (function (_super) {
    __extends(TableDataSource, _super);
    function TableDataSource(_currency) {
        var _this = _super.call(this) || this;
        _this._currency = _currency;
        _this.filteredData = [];
        _this.renderedData = [];
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    TableDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._currency,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this._currency.slice();
            return data;
        });
    };
    TableDataSource.prototype.disconnect = function () { };
    return TableDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["d" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=table-eth.component.js.map

/***/ }),

/***/ "./src/app/tables/tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-div {\r\n    width: 35%;\r\n    display: inline-block;\r\n    margin-left: 10%;\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tables-row\">\n\t<div class=\"table-div\">\n\t\t<app-table-btc></app-table-btc>\n\t</div>\n\t<div class=\"table-div\">\n\t\t<app-table-eth></app-table-eth>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__("./src/app/tables/tables.component.html"),
        styles: [__webpack_require__("./src/app/tables/tables.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);

//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
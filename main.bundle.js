webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(403);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.indexcount = 1;
        this.paddingcount = 1;
        this.modalAction = 'add';
        this.currentAmount = 100;
        this.newchain = new Blockchain();
        this.blockchain = this.newchain.chain;
    }
    AppComponent.prototype.ngOnInit = function () {
        AppHelper.PopOver();
    };
    AppComponent.prototype.ValidIS = function () {
        console.log(this.newchain.isChainValid());
    };
    AppComponent.prototype.addblock = function () {
        this.newchain.addBlock(new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount }));
        var parent = AppHelper.StringNumber("#block-", this.indexcount - 1);
        var child = AppHelper.StringNumber("#block-", this.indexcount);
        var self = this;
        setTimeout(function () {
            if (self.paddingcount == 7) {
                AppHelper.PadBlock(child);
                self.paddingcount = 1;
            }
            var color = AppHelper.getRandomColor();
            AppHelper.ColorBlock(child, color);
            jqSimpleConnect.connect(parent, child, {
                color: color,
                anchorA: 'vertical',
                anchorB: 'horizontal'
            });
            AppHelper.PopOver();
            //End Settimeout
        }, 30);
        this.indexcount += 1;
        this.paddingcount += 1;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(461),
            styles: [__webpack_require__(457)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_blocks_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_menu_left_menu_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blocks_blocks_component__["a" /* BlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__left_menu_left_menu_component__["a" /* LeftMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlocksComponent = (function () {
    function BlocksComponent() {
        this.currentBlock = 0;
    }
    BlocksComponent.prototype.ngOnInit = function () {
        // this.currentBlock = this.blockchain;
    };
    BlocksComponent.prototype.SetCurrentBlock = function (index) {
        this.currentBlock = index;
    };
    BlocksComponent.prototype.SetModalAction = function (action) {
        this.modalAction = action;
    };
    BlocksComponent.prototype.BlockChange = function (index) {
        this.chain.isChainValid();
        //this.blockchain[index].hash =this.blockchain[index].calculateHash();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BlocksComponent.prototype, "blockchain", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BlocksComponent.prototype, "chain", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BlocksComponent.prototype, "modalAction", void 0);
    BlocksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-blocks',
            template: __webpack_require__(462),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlocksComponent);
    return BlocksComponent;
}());
//# sourceMappingURL=blocks.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftMenuComponent = (function () {
    function LeftMenuComponent() {
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
    };
    LeftMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-left-menu',
            template: __webpack_require__(463),
            styles: [__webpack_require__(459)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());
//# sourceMappingURL=left-menu.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row top-nav \">\n        <div class=\"col-md-3\">\n            <img src=\"assets/images/logo.png\" width=\"200\" />\n        </div>\n        <div class=\"col-md-9 menu-wrapper\">\n            <button class=\"btn \" data-toggle=\"popover\" data-html=\"true\" title=\"Coming Soon\" data-trigger=\"focus\" data-content=\"This feature is still cooking. We currently only support creating basic blocks\">Demos</button>\n\n            <a href=\"#modal-container-welcome\" class=\"btn\" data-toggle=modal>Help</a>\n        </div>\n    </div>\n    <div class=\"row blocks-container\">\n        <div class=\"col-md-2 left-menu\">\n            <app-left-menu></app-left-menu>\n        </div>\n        <div class=\"col-md-10\">\n            <app-blocks [blockchain]=\"blockchain\" [chain]=\"newchain\" [modalAction]=\"modalAction\"></app-blocks>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"modal-container-920512\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"add-data \">\n                <div class=\"modal-header\">\n\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                    ×\n                                </button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">\n                        Block Data\n                    </h4>\n                </div>\n\n                <div class=\"modal-body\">\n                    <div class=\"info\">Each block in a blockchain contains a ledger with some kind of data. in version 1 of BlockPlay we only support a basic amount value for each block but in feature releases you will be able to store what ever kind of data you want eg\n                        votes\n                    </div>\n                    <div>Enter new amount Below</div>\n\n                    <input [(ngModel)]=\"currentAmount\">\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" id=\"create-block\" (click)=\"addblock()\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                                Create Block\n                            </button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                                    Close\n                                </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal fade\" id=\"modal-container-welcome\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                                ×\n                                            </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"col-md-12 top-container\">\n                    <div class=\"logo-large\"> </div>\n                    <div id=\"video\">\n                        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SSo_EIwHSd4?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                    </div>\n                    <div id=\"intro\">\n                        Blockplay is a virtual block chain builder for non developers. Blockplay helps you understand how blockchains works under the hood by giving you a virtual enviroment to build you own block chain with writing a single line of code\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"wel-watch\"> </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"wel-learn\"> </div>\n                </div>\n\n                <p> &nbsp;</p>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<div class=\"template2\">\n    <div class=\"col-md-2\" *ngFor=\"let block of blockchain\" id=\"block-{{block.index}}\">\n        <div class=\"wrapper\" id=\"guy\" (click)=\"SetCurrentBlock(block.index)\">\n            <div class=\"cube\" data-toggle=\"popover\" data-html=\"true\" title=\"{{ (block.index==0)?'Genesis Block':'Block '+block.index}}\" [attr.data-content]=\"'<span><b>Timestamp:</b> '+block.timestamp+'</span><span><b>Previous Hash:</b> '+(block.previousHash | slice:0:10) +'</span><span><b>Hash:</b> '+  (block.hash | slice:0:10) +' </span><span class=block-data>Amount: '+ block.data.amount+' <a href=#modal-container-editblock  data-toggle=modal>Edit</a></span> '\">\n                <b class=\"front\">{{block.index}}</b>\n                <b class=\"back\"></b>\n                <b class=\"top\"></b>\n                <b class=\"bottom\"></b>\n                <b class=\"left\">{{block.index}}</b>\n                <b class=\"right\"></b>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Modal Window -->\n<div class=\"modal fade\" id=\"modal-container-editblock\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"Edit-data\">\n                <div class=\"modal-header\">\n\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                            ×\n                                        </button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">\n                        Edit {{ (blockchain[currentBlock].index==0)?'Genesis Block':'Block '+blockchain[currentBlock].index}} data\n                    </h4>\n                </div>\n                <div class=\"modal-body\">\n                    Amount:\n                    <input (change)=\"BlockChange(currentBlock)\" [(ngModel)]=\"blockchain[currentBlock].data.amount\">\n                </div>\n                <div class=\"modal-footer\">\n\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                                            Close\n                                        </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<p>\n    <a href=#modal-container-920512 class=\"btn btn-sucess\" id=\"add-block\" data-toggle=modal>Create Block</a>\n    <button class=\"btn \" id=\"add-transaction\" data-toggle=\"popover\" data-html=\"true\" title=\"Coming Soon\" data-trigger=\"focus\" data-content=\"This feature is still cooking. We currently only support creating basic blocks\"></button>\n    <button class=\"btn \" id=\"proof-of-work\" data-toggle=\"popover\" data-html=\"true\" title=\"Coming Soon\" data-trigger=\"focus\" data-content=\"This feature is still cooking. We currently only support creating basic blocks\"></button>\n    <button class=\"btn \" id=\"miners\" data-toggle=\"popover\" data-html=\"true\" title=\"Coming Soon\" data-trigger=\"focus\" data-content=\"This feature is still cooking. We currently only support creating basic blocks\"></button>\n</p>"

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[486]);
//# sourceMappingURL=main.bundle.js.map
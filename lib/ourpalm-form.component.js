"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
require("jquery-form");
var ourpalm_form_config_service_1 = require("./ourpalm-form-config.service");
var OurpalmFormComponent = (function () {
    function OurpalmFormComponent(el, config) {
        this.el = el;
        this.config = config;
        this.options = {};
    }
    OurpalmFormComponent.prototype.ngAfterViewInit = function () {
        this.$el = $(this.el.nativeElement);
        this.$el.ajaxForm(Object.assign({}, this.config.options, this.options));
    };
    OurpalmFormComponent.prototype.formSerialize = function () {
        return this.$el.formSerialize();
    };
    OurpalmFormComponent.prototype.fieldSerialize = function (selector) {
        return selector ? this.$el.find(selector).fieldSerialize() : this.$el.fieldSerialize();
    };
    OurpalmFormComponent.prototype.fieldValue = function (selector) {
        return selector ? this.$el.find(selector).fieldValue() : [];
    };
    OurpalmFormComponent.prototype.resetForm = function () {
        this.$el.resetForm();
    };
    OurpalmFormComponent.prototype.clearForm = function () {
        this.$el.clearForm();
    };
    OurpalmFormComponent.prototype.clearFields = function (selector) {
        this.$el.find(selector).clearFields();
    };
    OurpalmFormComponent.prototype.ajaxSubmit = function (options) {
        if (options === void 0) { options = {}; }
        this.$el.ajaxSubmit(Object.assign({}, this.config.options, this.options, options));
    };
    OurpalmFormComponent.prototype.ajaxForm = function (options) {
        if (options === void 0) { options = {}; }
        this.$el.ajaxForm(Object.assign({}, this.config.options, this.options, options));
    };
    return OurpalmFormComponent;
}());
__decorate([
    core_1.Input('ourpalm-form'),
    __metadata("design:type", Object)
], OurpalmFormComponent.prototype, "options", void 0);
OurpalmFormComponent = __decorate([
    core_1.Directive({
        selector: '[ourpalm-form]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, ourpalm_form_config_service_1.OurpalmFormConfig])
], OurpalmFormComponent);
exports.OurpalmFormComponent = OurpalmFormComponent;
//# sourceMappingURL=ourpalm-form.component.js.map
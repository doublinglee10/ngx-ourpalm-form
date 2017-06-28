"use strict";
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
OurpalmFormComponent.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ourpalm-form]'
            },] },
];
OurpalmFormComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: ourpalm_form_config_service_1.OurpalmFormConfig, },
]; };
OurpalmFormComponent.propDecorators = {
    'options': [{ type: core_1.Input, args: ['ourpalm-form',] },],
};
exports.OurpalmFormComponent = OurpalmFormComponent;
//# sourceMappingURL=ourpalm-form.component.js.map
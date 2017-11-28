import { Directive, ElementRef, Input } from "@angular/core";
import { OurpalmFormConfig } from "./ourpalm-form-config.service";
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
export { OurpalmFormComponent };
OurpalmFormComponent.decorators = [
    { type: Directive, args: [{
                selector: '[ourpalm-form]',
                exportAs: 'ourpalmForm'
            },] },
];
OurpalmFormComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: OurpalmFormConfig, },
]; };
OurpalmFormComponent.propDecorators = {
    'options': [{ type: Input, args: ['ourpalm-form',] },],
};
//# sourceMappingURL=ourpalm-form.component.js.map
import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";
import {OurpalmFormConfig} from "./ourpalm-form-config.service";

@Directive({
    selector: '[ourpalm-form]'
})
export class OurpalmFormComponent implements AfterViewInit {

    @Input('ourpalm-form') options: any = {};

    protected $el: any;

    constructor(protected el: ElementRef, protected config: OurpalmFormConfig) {
    }

    ngAfterViewInit(): void {
        this.$el = $(this.el.nativeElement);
        this.$el.ajaxForm(Object.assign({}, this.config.options, this.options));
    }

    formSerialize() {
        return this.$el.formSerialize();
    }

    fieldSerialize(selector) {
        return selector ? this.$el.find(selector).fieldSerialize() : this.$el.fieldSerialize();
    }

    fieldValue(selector) {
        return selector ? this.$el.find(selector).fieldValue() : [];
    }

    resetForm() {
        this.$el.resetForm();
    }

    clearForm() {
        this.$el.clearForm();
    }

    clearFields(selector) {
        this.$el.find(selector).clearFields();
    }

    ajaxSubmit(options: any = {}) {
        this.$el.ajaxSubmit(Object.assign({}, this.config.options, this.options, options));
    }

    ajaxForm(options: any = {}) {
        this.$el.ajaxForm(Object.assign({}, this.config.options, this.options, options));
    }
}
import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {OurpalmFormComponent} from "../ourpalm-form";

@Component({
    selector: 'test-ajax-form',
    templateUrl: './ajax-form.component.html'
})
export class TestAjaxFormComponent implements AfterViewInit {
    @ViewChild(OurpalmFormComponent)
    ajaxForm: OurpalmFormComponent;

    ngAfterViewInit(): void {
        console.info(this.ajaxForm instanceof OurpalmFormComponent);
        console.info(typeof this.ajaxForm);
        console.info(this.ajaxForm);
    }

    formSerialize() {
        console.info(this.ajaxForm.formSerialize());
    }

    fieldSerialize() {
        console.info(this.ajaxForm.fieldSerialize('textarea'));
    }

    fieldValue() {
        console.info(this.ajaxForm.fieldValue('textarea'));
    }

    resetForm() {
        console.info(this.ajaxForm.resetForm());
    }

    clearForm() {
        console.info(this.ajaxForm.clearForm());
    }

    clearFields() {
        console.info(this.ajaxForm.clearFields('textarea'));
    }

    submitMethod() {
        this.ajaxForm.ajaxSubmit();
    }
}
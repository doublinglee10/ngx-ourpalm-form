import { AfterViewInit, ElementRef } from "@angular/core";
import * as $ from "jquery";
import "jquery-form";
import { OurpalmFormConfig } from "./ourpalm-form-config.service";
export declare class OurpalmFormComponent implements AfterViewInit {
    protected el: ElementRef;
    protected config: OurpalmFormConfig;
    options: any;
    protected $el: $;
    constructor(el: ElementRef, config: OurpalmFormConfig);
    ngAfterViewInit(): void;
    formSerialize(): any;
    fieldSerialize(selector: any): any;
    fieldValue(selector: any): any;
    resetForm(): void;
    clearForm(): void;
    clearFields(selector: any): void;
    ajaxSubmit(options?: any): void;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ourpalm_form_config_service_1 = require("./ourpalm-form-config.service");
var ourpalm_form_component_1 = require("./ourpalm-form.component");
var OurpalmFormModule = (function () {
    function OurpalmFormModule() {
    }
    return OurpalmFormModule;
}());
OurpalmFormModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                declarations: [
                    ourpalm_form_component_1.OurpalmFormComponent
                ],
                exports: [
                    ourpalm_form_component_1.OurpalmFormComponent
                ],
                providers: [
                    ourpalm_form_config_service_1.OurpalmFormConfig
                ]
            },] },
];
OurpalmFormModule.ctorParameters = function () { return []; };
exports.OurpalmFormModule = OurpalmFormModule;
//# sourceMappingURL=ourpalm-form.module.js.map
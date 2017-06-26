"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ourpalm_form_config_service_1 = require("./ourpalm-form-config.service");
var ourpalm_form_component_1 = require("./ourpalm-form.component");
var OurpalmFormModule = (function () {
    function OurpalmFormModule() {
    }
    return OurpalmFormModule;
}());
OurpalmFormModule = __decorate([
    core_1.NgModule({
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
    })
], OurpalmFormModule);
exports.OurpalmFormModule = OurpalmFormModule;
//# sourceMappingURL=ourpalm-form.module.js.map
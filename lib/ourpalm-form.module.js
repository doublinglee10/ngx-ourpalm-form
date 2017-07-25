import { NgModule } from "@angular/core";
import { OurpalmFormConfig } from "./ourpalm-form-config.service";
import { OurpalmFormComponent } from "./ourpalm-form.component";
var OurpalmFormModule = (function () {
    function OurpalmFormModule() {
    }
    return OurpalmFormModule;
}());
export { OurpalmFormModule };
OurpalmFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    OurpalmFormComponent
                ],
                exports: [
                    OurpalmFormComponent
                ],
                providers: [
                    OurpalmFormConfig
                ]
            },] },
];
OurpalmFormModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ourpalm-form.module.js.map
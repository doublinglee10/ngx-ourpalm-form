import {NgModule} from "@angular/core";
import {OurpalmFormConfig} from "./ourpalm-form-config.service";
import {OurpalmFormComponent} from "./ourpalm-form.component";
@NgModule({
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
})
export class OurpalmFormModule {
}
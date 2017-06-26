import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {OurpalmFormModule} from "./ourpalm-form";
import {TestAjaxFormComponent} from "./test-ajax-form/ajax-form.component";

@NgModule({
    declarations: [
        AppComponent,
        TestAjaxFormComponent
    ],
    imports: [
        BrowserModule,
        OurpalmFormModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

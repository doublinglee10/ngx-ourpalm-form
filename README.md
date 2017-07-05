# NgxOurpalmForm

Angular 2 Port for the Jquery Form [http://malsup.com/jquery/form/](http://malsup.com/jquery/form/)

## Installation

```
npm install ngx-ourpalm-form --save
```

## Example

import the `OurpalmFormModule` module in your application module

```javascript
import { OurpalmFormModule } from "ngx-ourpalm-form";

@NgModule({
    imports: [OurpalmFormModule]
})
```

```
// app.component.ts
import { Component } from '@angular/core';
import { OurpalmFormComponent } from "ngx-ourpalm-form";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(OurpalmFormComponent) form: OurpalmFormComponent;

  submitForm() {
    this.form.ajaxSubmit({
      url: 'http://hostname:port/path/xxx',
      success: (result) => {
          console.info(result);
      },
      error: (result) => {
        console.info(result);
      }
    });
  }
}

```

```
// app.component.html
<form ourpalm-form>
    <input type="text" name="username"/>
    <input type="text" name="password"/>
    <input type="file" name="file"/>
    <button (click)="submitForm()">submit</button>
</form>
```

or

```
<form ourpalm-form #form action="http://hostname:port/path/xxx" method="post" enctype="multipart/form-data">
    <input type="text" name="username"/>
    <input type="text" name="password"/>
    <input type="file" name="file"/>
    <button (click)="form.submitForm()">submit</button>
</form>
```

You can pass global settings that can be overloaded by the `options` object in the `OurpalmFormComponent` instances. Use the `OurpalmFormConfig` service to do so. The service provider is set in the `OurpalmFormModule` module.

```
import { OurpalmFormConfig } from 'ngx-ourpalm-form';

@Component({
    selector:'my-app',
    template:'<h3>Component Template</h3>'
})
export class AppComponent {

    constructor(private config: OurpalmFormConfig) {
        this.config.options = {
            xhrFields: {
                withCredentials: true
            }
        };
    }
}
```


## Method

|	method				  |	 param 		      | 	            	desc 					|
|-------------------------|-------------------|-------------------------------------------------|
|	formSerialize         |                   |      Serializes the form into a query string. This method will return a string in the format: name1=value1&name2=value2  |
|	fieldSerialize        |    cssSelector    |		 Serializes field elements into a query string				   |
|	fieldValue            |    cssSelector    |		 Returns the value(s) of the element(s) in the matched set in an array				   |
|	resetForm             |                   |		 Resets the form to its original state by invoking the form element's native DOM method.				   |
|	clearForm             |                   |		 Clears the form elements.  |
|	clearFields           |    cssSelector    |		 Clears field elements.   |
|	ajaxSubmit            |    options        |		 Immediately submits the form via AJAX.  |
|	ajaxForm              |    options        |		 Prepares a form to be submitted via AJAX by adding all of the necessary event listeners. It does not submit the form.   |


[demo](./src/app/text-ajax-form)


Below is the link to the original project, there's more info regarding the jquery form there. [http://malsup.com/jquery/form/](http://malsup.com/jquery/form/)


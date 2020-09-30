import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRouting} from './form.routing';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormComponent} from './components/reactive/reactive-form';
import {TemplateFormComponent} from './components/template/template-form.component';
import {DynamicFormComponent} from './components/dynamic/dynamic-form.component';
import {DynamicFormQuestionComponent} from './components/dynamic/dynamic-form-question.component';

import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRouting,
    FormsModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule
  ],
  declarations: [
    FormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})

export class FormModule {
}

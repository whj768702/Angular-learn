import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRouting} from './form.routing';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormComponent} from './components/reactive/reactive-form';
import {TemplateFormComponent} from './components/template/template-form.component';
import {DynamicFormComponent} from './components/dynamic/dynamic-form.component';
import {DynamicFormQuestionComponent} from './components/dynamic/dynamic-form-question.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRouting,
    FormsModule
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

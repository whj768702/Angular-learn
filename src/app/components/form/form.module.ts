import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRouting} from './form.routing';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormComponent} from './components/reactive/reactiveForm';
import {TemplateFormComponent} from './components/template/templateForm.component';

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
    TemplateFormComponent
  ]
})

export class FormModule {
}

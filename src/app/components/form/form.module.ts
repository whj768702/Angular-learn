import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormRouting} from './form.routing';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormComponent} from './components/reactive/reactiveForm';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRouting
  ],
  declarations: [
    FormComponent,
    ReactiveFormComponent
  ]
})

export class FormModule {
}

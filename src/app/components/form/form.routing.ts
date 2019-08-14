import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form.component';
import {ReactiveFormComponent} from './components/reactive/reactive-form';
import {TemplateFormComponent} from './components/template/template-form.component';
import {DynamicFormComponent} from './components/dynamic/dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'reactive', component: ReactiveFormComponent},
      {path: 'template', component: TemplateFormComponent},
      {path: 'dynamic', component: DynamicFormComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FormRouting {
}

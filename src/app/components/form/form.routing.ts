import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form.component';
import {ReactiveFormComponent} from './components/reactive/reactiveForm';
import {TemplateFormComponent} from './components/template/templateForm.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'reactive', component: ReactiveFormComponent},
      {path: 'template', component: TemplateFormComponent}
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
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form.component';
import {ReactiveFormComponent} from './components/reactive/reactiveForm';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'reactive', component: ReactiveFormComponent}
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

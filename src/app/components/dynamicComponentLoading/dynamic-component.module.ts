import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentComponent} from './dynamic-component.component';
import {DynamicComponentRouting} from './dynamic-component.routing';
import {OneComponent} from './components/one.component';
import {TwoComponent} from './components/two.component';
import {DynamicComponentDirective} from './dynamic-component.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentRouting
  ],
  declarations: [
    DynamicComponentComponent,
    OneComponent,
    TwoComponent,
    DynamicComponentDirective
  ],
  entryComponents: [
    OneComponent,
    TwoComponent
  ]
})

export class DynamicComponentModule {
}

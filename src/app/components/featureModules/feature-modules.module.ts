import {NgModule} from '@angular/core';
import {TestComponent} from './test/test.component';
import {CommonModule} from '@angular/common';
import {FeatureModulesComponent} from './feature-modules.component';
import {FeatureModulesRouting} from './feature-modules.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureModulesRouting
  ],
  declarations: [
    TestComponent,
    FeatureModulesComponent
  ]
})
export class FeatureModulesModule {
}

import {NgModule} from '@angular/core';
import {TestComponent} from './test/test.component';
import {CommonModule} from '@angular/common';
import {FeatureModulesComponent} from './featureModules.component';
import {FeatureModulesRouting} from './featureModules.routing';

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

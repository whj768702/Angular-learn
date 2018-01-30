import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentComponent} from './dynamicComponent.component';
import {DynamicComponentRouting} from './dynamicComponent.routing';
import {OneComponent} from './components/one.component';
import {TwoComponent} from './components/two.component';
import {DynamicComponentDirective} from './dynamicComponent.directive';

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

export class DynamicComponentModule{}
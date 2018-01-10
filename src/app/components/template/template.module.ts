import {NgModule} from '@angular/core';
import {TemplateComponent} from './template.component';
import {TestComponent} from './test/test.component';
import {templateRoute} from './template.routing';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        templateRoute
    ],
    declarations: [
        TemplateComponent,
        TestComponent
    ]
})
export class TemplateModule{}
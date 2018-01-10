import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from './template.component';
import {TestComponent} from './test/test.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        children: [
            {path: 'test', component: TestComponent}
        ]
    }
];
export const templateRoute: ModuleWithProviders = RouterModule.forChild(routes);
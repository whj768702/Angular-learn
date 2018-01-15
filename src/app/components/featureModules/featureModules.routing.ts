import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {NgModule} from '@angular/core';
import {FeatureModulesComponent} from './featureModules.component';

const routes: Routes = [
    {
        path: '',
        component: FeatureModulesComponent,
        children: [
            {path: 'test', component: TestComponent}
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

export class FeatureModulesRouting{}

import {RouterModule, Routes} from '@angular/router';
import {ComponentInteractionComponent} from './componentInteraction.component';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParentComponent2} from './countdown/countdown-parent.component2';
import {NgModule} from '@angular/core';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentInteractionComponent,
        children: [
            {path: 'localVariable', component: CountdownParentComponent},
            {path: 'viewChild', component: CountdownParentComponent2},
            {path: 'service', component: MissioncontrolComponent}
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

export class ComponentInteractionRouting{}
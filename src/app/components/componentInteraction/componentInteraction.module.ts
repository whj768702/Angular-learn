import {NgModule} from '@angular/core';
import {ComponentInteractionRouting} from './componentInteraction.routing';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParentComponent2} from './countdown/countdown-parent.component2';
import {CountdownTimerComponent} from './countdown/countdown-timer.component';
import {ComponentInteractionComponent} from './componentInteraction.component';
import {AstronautComponent} from './communicate-service/astronaut.component';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ComponentInteractionRouting
    ],
    declarations: [
        CountdownParentComponent,
        CountdownParentComponent2,
        CountdownTimerComponent,
        AstronautComponent,
        MissioncontrolComponent,
        ComponentInteractionComponent
    ]
})
export class ComponentInteractionModule{}
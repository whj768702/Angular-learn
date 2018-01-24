import {NgModule} from '@angular/core';
import {ComponentInteractionRouting} from './componentInteraction.routing';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParentComponent2} from './countdown/countdown-parent.component2';
import {CountdownTimerComponent} from './countdown/countdown-timer.component';
import {ComponentInteractionComponent} from './componentInteraction.component';

@NgModule({
    imports: [
        ComponentInteractionRouting
    ],
    declarations: [
        CountdownParentComponent,
        CountdownParentComponent2,
        CountdownTimerComponent,
        ComponentInteractionComponent
    ]
})
export class ComponentInteractionModule{}
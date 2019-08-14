import {NgModule} from '@angular/core';
import {ComponentInteractionRouting} from './component-interaction.routing';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParent2Component} from './countdown/countdown-parent2.component';
import {CountdownTimerComponent} from './countdown/countdown-timer.component';
import {ComponentInteractionComponent} from './component-interaction.component';
import {AstronautComponent} from './communicate-service/astronaut.component';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';
import {CommonModule} from '@angular/common';
import {ParentComponentComponent} from './input/parent-component.component';
import {ChildComponentComponent} from './input/child-component.component';
import {FormsModule} from '@angular/forms';
import {ChildComponentSetComponent} from './input/child-component-set.component';
import {ParentComponentOnChangesComponent} from './OnChanges/parent-component.component';
import {ChildComponentOnChangesComponent} from './OnChanges/child-component.component';
import {ParentListenComponent} from './child-event/parent-listen.component';
import {ChildSendComponent} from './child-event/child-send.component';
import {ChildSendStringComponent} from './child-event/child-send-string.component';
import {EventService} from './child-event/event.service';
import {ChildEventComponent} from './child-event/child-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentInteractionRouting
  ],
  declarations: [
    ParentComponentComponent,
    ChildComponentComponent,
    ChildComponentSetComponent,
    CountdownParentComponent,
    CountdownParent2Component,
    CountdownTimerComponent,
    AstronautComponent,
    MissioncontrolComponent,
    ComponentInteractionComponent,
    ParentComponentOnChangesComponent,
    ChildComponentOnChangesComponent,
    ParentListenComponent,
    ChildSendComponent,
    ChildSendStringComponent,
    ChildEventComponent
  ],
  providers: [EventService]
})
export class ComponentInteractionModule {
}

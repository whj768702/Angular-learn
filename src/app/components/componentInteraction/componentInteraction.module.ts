import {NgModule} from '@angular/core';
import {ComponentInteractionRouting} from './componentInteraction.routing';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParent2Component} from './countdown/countdown-parent2.component';
import {CountdownTimerComponent} from './countdown/countdown-timer.component';
import {ComponentInteractionComponent} from './componentInteraction.component';
import {AstronautComponent} from './communicate-service/astronaut.component';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';
import {CommonModule} from '@angular/common';
import {ParentComponentComponent} from './input/parentComponent.component';
import {ChildComponentComponent} from './input/childComponent.component';
import {FormsModule} from '@angular/forms';
import {ChildComponentSetComponent} from './input/childComponent-set.component';
import {ParentComponentOnChangesComponent} from './OnChanges/parentComponent.component';
import {ChildComponentOnChangesComponent} from './OnChanges/childComponent.component';
import {ParentListenComponent} from './child-event/parentListen.component';
import {ChildSendComponent} from './child-event/childSend.component';
import {ChildSendStringComponent} from './child-event/childSendString.component';
import {EventService} from './child-event/event.service';
import {ChildEventComponent} from './child-event/childEvent.component';

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

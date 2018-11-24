import {RouterModule, Routes} from '@angular/router';
import {ComponentInteractionComponent} from './componentInteraction.component';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParent2Component} from './countdown/countdown-parent2.component';
import {NgModule} from '@angular/core';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';
import {ParentComponentComponent} from './input/parentComponent.component';
import {ChildComponentSetComponent} from './input/childComponent-set.component';
import {ParentComponentOnChangesComponent} from './OnChanges/parentComponent.component';
import {ParentListenComponent} from './child-event/parentListen.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentInteractionComponent,
    children: [
      {path: 'input', component: ParentComponentComponent},
      {path: 'input-set', component: ChildComponentSetComponent},
      {path: 'localVariable', component: CountdownParentComponent},
      {path: 'viewChild', component: CountdownParent2Component},
      {path: 'service', component: MissioncontrolComponent},
      {path: 'onChanges', component: ParentComponentOnChangesComponent},
      {path: 'eventEmitter', component: ParentListenComponent}
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

export class ComponentInteractionRouting {
}

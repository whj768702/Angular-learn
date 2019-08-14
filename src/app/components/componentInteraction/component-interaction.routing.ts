import {RouterModule, Routes} from '@angular/router';
import {ComponentInteractionComponent} from './component-interaction.component';
import {CountdownParentComponent} from './countdown/countdown-parent.component';
import {CountdownParent2Component} from './countdown/countdown-parent2.component';
import {NgModule} from '@angular/core';
import {MissioncontrolComponent} from './communicate-service/missioncontrol.component';
import {ParentComponentComponent} from './input/parent-component.component';
import {ChildComponentSetComponent} from './input/child-component-set.component';
import {ParentComponentOnChangesComponent} from './OnChanges/parent-component.component';
import {ParentListenComponent} from './child-event/parent-listen.component';

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

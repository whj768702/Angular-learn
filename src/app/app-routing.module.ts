import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroesComponent} from './components/hero/heroes.component';
import {HeroDetailComponent} from './components/hero/hero-detail.component';
import {CrisisCenterComponent} from './components/crisis/crisis-center.component';
import {CrisisDetailComponent} from './components/crisis/crisis-detail.component';
import {HighlightDisplayComponent} from './components/attribute-directives/highlight-display.component';
import {MyUnlessComponent} from './components/structural-directive/my-unless.component';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks';
import {PipeComponent} from './components/pipes/pipe.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'crisis', component: CrisisCenterComponent},
  {path: 'crisis-detail/:id', component: CrisisDetailComponent},
  {path: 'show-highlight', component: HighlightDisplayComponent},
  {path: 'structural-directive', component: MyUnlessComponent},
  {path: 'lifecycle-hooks', component: LifecycleHooksComponent},
  {path: 'pipe', component: PipeComponent},
  {
    path: 'template',
    loadChildren: './components/featureModules/featureModules.module#FeatureModulesModule'
  },
  {
    path: 'component-interaction',
    loadChildren: './components/componentInteraction/componentInteraction.module#ComponentInteractionModule'
  },
  {
    path: 'dynamic-component-loading',
    loadChildren: './components/dynamicComponentLoading/dynamicComponent.module#DynamicComponentModule'
  },
  {
    path: 'form',
    loadChildren: './components/form/form.module#FormModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


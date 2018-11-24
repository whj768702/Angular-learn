import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HeroesComponent} from './components/hero/heroes.component';
import {HeroDetailComponent} from './components/hero/hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './services/hero.service';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import './rxjs-extensions';
import {HeroSearchComponent} from './components/hero/hero-search.component';
import {CrisisCenterComponent} from './components/crisis/crisis-center.component';
import {CrisisDetailComponent} from './components/crisis/crisis-detail.component';

import {MissionService} from './services/mission.service';
import {HighlightDirective} from './components/attribute-directives/highlight.directive';
import {HighlightDisplayComponent} from './components/attribute-directives/highlight-display.component';
import {topBarComponent} from './components/top-bar/top-bar.component';
import {sideBarComponent} from './components/side-bar/side-bar.component';
import {contentComponent} from './components/content-wrapper/content.component';
import {UnlessDirective} from './components/structural-directive/unless.directive';
import {MyUnlessComponent} from './components/structural-directive/myUnless.component';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks';
import {OnChangesComponent} from './components/lifecycle-hooks/OnChanges/onchanges.component';
import {RouterModule} from '@angular/router';
import {FeatureModulesModule} from './components/featureModules/featureModules.module';
import {ComponentInteractionModule} from './components/componentInteraction/componentInteraction.module';
import {DynamicComponentModule} from './components/dynamicComponentLoading/dynamicComponent.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeComponent} from './components/pipes/pipe.component';
import {NumberPipe} from './components/pipes/number.pipe';
import {FormModule} from './components/form/form.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FeatureModulesModule,
    ComponentInteractionModule,
    DynamicComponentModule,
    RouterModule,
    AppRoutingModule,
    FormModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    HighlightDisplayComponent,
    HighlightDirective,
    MyUnlessComponent,
    UnlessDirective,
    HighlightDirective,
    topBarComponent,
    sideBarComponent,
    contentComponent,
    LifecycleHooksComponent,
    OnChangesComponent,
    PipeComponent,
    NumberPipe
  ],
  providers: [HeroService, MissionService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  crises: any;

  constructor() {
  }

  ngOnInit(): void {

  }
}

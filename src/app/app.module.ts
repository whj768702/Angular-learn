import {NgModule, OnInit} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

// ng-zorro-antd
// import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzListModule} from "ng-zorro-antd/list";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";

import {HeroesComponent} from './components/hero/heroes.component';
import {HeroDetailComponent} from './components/hero/hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './services/hero.service';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

import {HeroSearchComponent} from './components/hero/hero-search.component';
import {CrisisCenterComponent} from './components/crisis/crisis-center.component';
import {CrisisDetailComponent} from './components/crisis/crisis-detail.component';

import {MissionService} from './services/mission.service';
import {HighlightDirective} from './components/attribute-directives/highlight.directive';
import {HighlightDisplayComponent} from './components/attribute-directives/highlight-display.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {ContentWrapComponent} from './components/content-wrapper/content.component';
import {UnlessDirective} from './components/structural-directive/unless.directive';
import {MyUnlessComponent} from './components/structural-directive/my-unless.component';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks';
import {OnChangesComponent} from './components/lifecycle-hooks/OnChanges/onchanges.component';
import {RouterModule} from "@angular/router";
import {FeatureModulesModule} from './components/featureModules/feature-modules.module';
import {ComponentInteractionModule} from './components/componentInteraction/component-interaction.module';
import {DynamicComponentModule} from './components/dynamicComponentLoading/dynamic-component.module';
import {HttpClientModule} from "@angular/common/http";
import {PipeComponent} from './components/pipes/pipe.component';
import {NumberPipe} from './components/pipes/number.pipe';
import {FormModule} from './components/form/form.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FeatureModulesModule,
    ComponentInteractionModule,
    DynamicComponentModule,
    RouterModule,
    AppRoutingModule,
    FormModule,
    // NgZorroAntdModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpinModule,
    NzListModule,
    NzInputNumberModule,
    // NzLayoutModule
  ],
  declarations: [
    // NzLayoutModule,
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
    TopBarComponent,
    SideBarComponent,
    ContentWrapComponent,
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

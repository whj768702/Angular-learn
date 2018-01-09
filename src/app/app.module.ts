import {NgModule, OnInit} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './components/hero/heroes.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { AppComponent } from "./components/app.component";
import { HeroService } from "./services/hero.service";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppRoutingModule } from "./router/app-routing.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import './rxjs-extensions';
import { HeroSearchComponent } from "./components/hero/hero-search.component";
import { CrisisCenterComponent } from "./components/crisis/crisis-center.component";
import {CrisisDetailComponent} from "./components/crisis/crisis-detail.component";

import { CountdownParentComponent } from "./components/countdown/countdown-parent.component";
import { CountdownTimerComponent} from "./components/countdown/countdown-timer.component";
import {CountdownParentComponent2} from "./components/countdown/countdown-parent.component2";
import {AstronautComponent} from "./components/communicate-service/astronaut.component";
import {MissioncontrolComponent} from "./components/communicate-service/missioncontrol.component";
import {MissionService} from "./services/mission.service";
import {HighlightDirective} from "./components/attribute-directives/highlight.directive";
import {HighlightDisplayComponent} from "./components/attribute-directives/highlight-display.component";
import {topBarComponent} from "./components/top-bar/top-bar.component";
import {sideBarComponent} from "./components/side-bar/side-bar.component";
import {contentComponent} from "./components/content-wrapper/content.component";
import {UnlessDirective} from "./components/structural-directive/unless.directive";
import {MyUnlessComponent} from "./components/structural-directive/myUnless.component";
import {lifecycleHookToNodeFlag} from '@angular/compiler/src/view_compiler/provider_compiler';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks';
import {OnChangesComponent} from './components/lifecycle-hooks/OnChanges/onchanges.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent,
        CrisisCenterComponent,
        CrisisDetailComponent,
        CountdownParentComponent,
        CountdownTimerComponent,
        CountdownParentComponent2,
        AstronautComponent,
        MissioncontrolComponent,
        HighlightDisplayComponent,
        HighlightDirective,
        MyUnlessComponent,
        UnlessDirective,
        HighlightDirective,
        topBarComponent,
        sideBarComponent,
        contentComponent,
        LifecycleHooksComponent,
        OnChangesComponent
    ],
    providers: [ HeroService, MissionService ],
    bootstrap: [ AppComponent ]
})
export class AppModule implements OnInit{
    crises: any;

    constructor(){}

    ngOnInit(): void{

    }
}

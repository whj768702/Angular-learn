import {Component} from '@angular/core';

@Component({
    selector: 'feature-modules',
    template: `
        <h1>hello from feature modules</h1>
        <span>
            <a routerLink="./test">test</a>
        </span>
        <router-outlet></router-outlet>
    `
})
export class FeatureModulesComponent{
    constructor(){}
}
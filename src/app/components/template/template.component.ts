import {Component} from '@angular/core';

@Component({
    selector: 'template',
    template: `
        <h1>hello from template</h1>
        <span>
            <a class="ziti" routerLink="/test">test</a>
        </span>
        <router-outlet></router-outlet>
    `,
    styles: ['.ziti{color: red;font-size: 24px;}']
})
export class TemplateComponent{
    constructor(){}
}
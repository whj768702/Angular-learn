import {Component} from '@angular/core';

@Component({
    selector: 'one-component',
    template: `
        <div>
            <h4>这是动态加载的组件一</h4>
        </div>
    `
})

export class OneComponent{
    constructor(){}
}
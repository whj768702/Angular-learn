import {Component} from '@angular/core';

@Component({
    selector: 'two-component',
    template: `
        <div>
            <h4>这当然是动态加载的组件二</h4>
        </div>
    `
})

export class TwoComponent{
    constructor(){}
}
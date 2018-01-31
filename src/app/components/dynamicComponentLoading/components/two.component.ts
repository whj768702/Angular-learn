import {Component, Input} from '@angular/core';

@Component({
    selector: 'two-component',
    template: `
        <div>
            <h4>这当然是动态加载的组件二</h4>
            <span>这当然也是上级传给此组件的值: {{data}}</span>
        </div>
    `
})

export class TwoComponent{
    @Input() data: any;

    constructor(){}
}
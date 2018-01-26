import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
        <div>
            <h4>这是子组件</h4>
            <span>{{fromDad}}</span>
        </div>
    `
})

export class ChildComponentComponent{
    @Input() fromDad: string;
}
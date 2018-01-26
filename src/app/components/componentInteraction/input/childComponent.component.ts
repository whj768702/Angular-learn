import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
        <div>
            <span>这是子组件,通过Input获取父组件值</span>
            <br>
            <span>{{fromDad}}</span>
        </div>
    `
})

export class ChildComponentComponent{
    @Input() fromDad: string;
}
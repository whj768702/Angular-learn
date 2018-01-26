import {Component} from '@angular/core';

@Component({
    selector: 'parent-component',
    template: `
        <div>
            <h3>这是父组件</h3>
            <input type="text" [(ngModel)]="dadData">
            <div>
                <span>引用子组件</span>
                <child-component [fromDad]="dadData"></child-component>
            </div>
        </div>
    `
})

export class ParentComponentComponent{
    dadData = '来自父组件的数据';
}
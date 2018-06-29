import {Component} from '@angular/core';

@Component({
    selector: 'parent-component',
    template: `
        <div>
            <h3>这是父组件</h3>
            <input type="text" [(ngModel)]="dadData.test.test.test">
            <div>
                <span>引用子组件</span>
                <child-component [fromDad]="dadData.test.test.test"></child-component>
            </div>
            <br>
            <div>
                <span>通过set截听输入属性值的变化</span>
                <child-component-value-set [fromData]="dadData"></child-component-value-set>
            </div>
        </div>
    `
})

export class ParentComponentComponent{
    dadData = {
        test: {
            test: {
                test: '来自父组件的数据'
            }
        }
    };
    // dadData = '来自父组件的数据';
}
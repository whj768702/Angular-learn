import {Component} from '@angular/core';

@Component({
    selector: 'parent-listen',
    template: `
        <div>
            <label>父组件</label>
            <span>来自子组件的值变化：同意：{{agreed}}次, 不同意{{disagreed}}次</span>
            <child-event (child)="fromChild($event)"></child-event>
        </div>
    `
})

export class ParentListenComponent{
    agreed = 0;
    disagreed = 0;

    constructor(){}

    fromChild(value: boolean){
        value ? this.agreed++ : this.disagreed++;
    }
}
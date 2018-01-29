import {Component} from '@angular/core';

@Component({
    selector: 'parent-listen',
    template: `
        <div>
            <label>父组件</label>
            <span>来自子组件的值变化：同意：{{agreed}}次, 不同意{{disagreed}}次</span>
            <child-event (child)="fromChild($event)"></child-event>
            <br>
            <label>来自子组件的字符:</label>
            <span>{{childString}}</span>
            <child-event-string (childString)="stringFromChild($event)"></child-event-string>
        </div>
    `
})

export class ParentListenComponent{
    agreed = 0;
    disagreed = 0;
    childString: string;

    constructor(){}

    fromChild(value: boolean){
        value ? this.agreed++ : this.disagreed++;
    }

    stringFromChild(value: string){
        this.childString = value;
    }
}
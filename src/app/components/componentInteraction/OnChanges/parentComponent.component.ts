import {Component} from '@angular/core';

@Component({
    selector: 'on-changes-parent',
    template: `
        <div>
            <label>父组件</label>
            <input type="text" [(ngModel)]="father">
            <on-changes-child [fromFather]="father"></on-changes-child>
        </div>
    `
})

export class ParentComponentOnChangesComponent{
    father: string;

    constructor(){}
}
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'child-event',
    template: `
        <div>
            <label>子组件：</label>
            <button (click)="vote(true)">同意</button>
            <button (click)="vote(false)">不同意</button>
        </div>
    `
})

export class ChildSendComponent{
    @Output() child =  new EventEmitter<boolean>();

    constructor(){}

    vote(value: boolean){
        this.child.emit(value);
    }
}

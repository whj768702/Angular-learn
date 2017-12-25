import {Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'sg-lifecycle-hooks',
    template: `
    <input [(ngModel)]="name"/>
    <div>{{name}}</div>
    `
})

export class LifecycleHooksComponent implements OnChanges, DoCheck{
    name: string = 'hello world';

    constructor(){}

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngDoCheck(){
        console.log(this.name);
    }
}
import {Component} from '@angular/core';
import {EventService} from './event.service';

@Component({
    selector: 'child-event-service',
    template: `
        <div>
            <label>子组件：</label>
            <input type="text" [(ngModel)]="data"> 
            <button (click)="passData()">传递数据</button>
        </div>
    `
})

export class ChildEventComponent{
    data: any = '共享数据';

    constructor(private eventService: EventService){}

    passData(){
        this.eventService.shareData.emit(this.data);
    }
}
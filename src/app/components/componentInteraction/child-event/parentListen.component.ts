import {AfterViewInit, Component} from '@angular/core';
import {EventService} from './event.service';

@Component({
  selector: 'parent-listen',
  template: `
    <div>
      <label>父组件</label>
      <span>来自子组件的值变化：同意：{{agreed}}次, 不同意{{disagreed}}次</span>
      <child-event (child)="fromChild($event)"></child-event>
      <br>
      <label>event emit传递字符串:</label>
      <span>{{childString}}</span>
      <child-event-string (childString)="stringFromChild($event)"></child-event-string>
      <br>
      <label>service emit subscribe:</label>
      <span>{{serviceData}}</span>
      <child-event-service></child-event-service>
    </div>
  `
})

export class ParentListenComponent implements AfterViewInit {
  agreed = 0;
  disagreed = 0;
  childString: string;
  serviceData: any;

  constructor(private eventService: EventService) {
  }

  fromChild(value: boolean) {
    value ? this.agreed++ : this.disagreed++;
  }

  stringFromChild(value: string) {
    this.childString = value;
  }

  ngAfterViewInit() {
    this.eventService.shareData.subscribe((value: any) => {
      this.serviceData = value;
    });
  }
}

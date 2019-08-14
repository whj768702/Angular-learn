import {Component} from '@angular/core';

@Component({
  selector: 'on-changes-parent',
  template: `
    <div>
      <label>父组件</label>
      <input type="text" [(ngModel)]="father">
      <input type="text" [(ngModel)]="messageObj.data">
      <on-changes-child [fromFather]="father"></on-changes-child>
      <on-changes-child [fromFather]="messageObj.data"></on-changes-child>
    </div>
  `
})

export class ParentComponentOnChangesComponent {
  father: string;
  messageObj = {
    data: '初始数据'
  };

  constructor() {
  }
}

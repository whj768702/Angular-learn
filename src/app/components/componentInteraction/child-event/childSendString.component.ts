import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'child-event-string',
  template: `
    <div>
      <label>子组件：</label>
      <input type="text" [(ngModel)]="valueString">
      <button (click)="passString(valueString)">传给父组件</button>
    </div>
  `
})

export class ChildSendStringComponent {
  valueString: string;

  @Output() childString = new EventEmitter<string>();

  constructor() {
  }

  passString(value: string) {
    this.childString.emit(value);
  }
}

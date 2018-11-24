import {Component} from '@angular/core';

@Component({
  selector: 'pipe-demo',
  template: `
    <div>
      <label>数字：</label>
      <input type="number" [(ngModel)]="data">
      <br>
      <label>没使用管道转换的值：</label>
      <span>{{data}}</span>
      <label>使用管道后转换的值：</label>
      <span>{{data | numberFormat: 10}}</span>
    </div>
  `
})

export class PipeComponent {
  data = 2;

  constructor() {
  }
}


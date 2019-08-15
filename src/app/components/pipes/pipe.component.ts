import {Component} from '@angular/core';

@Component({
  selector: 'pipe-demo',
  template: `
      <div>
          <label>数字：</label>
          <nz-input-number [(ngModel)]="data" [nzMin]="1" [nzMax]="10"></nz-input-number>
          <br/>
          <label>没使用管道转换的值：</label>
          <span>{{data}}</span>
          <br/>
          <label>使用管道后转换的值：</label>
          <span>{{data | numberFormat: '10'}}</span>
      </div>
  `
})

export class PipeComponent {
  data = 2;

  constructor() {
  }
}


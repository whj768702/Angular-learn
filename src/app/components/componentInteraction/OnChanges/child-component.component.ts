import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'on-changes-child',
  template: `
    <div>
      <label>子组件,通过OnChanges监控输入值</label>
      <span>{{fromFather}}</span>
    </div>
  `
})

export class ChildComponentOnChangesComponent implements OnChanges {
  @Input() fromFather: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): any {
    console.log(changes);
  }
}

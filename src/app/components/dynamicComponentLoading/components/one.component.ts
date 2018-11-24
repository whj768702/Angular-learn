import {Component, Input} from '@angular/core';

@Component({
  selector: 'one-component',
  template: `
    <div>
      <h4>这是动态加载的组件一</h4>
      <span>上级传给此组件的值: {{data}}</span>
    </div>
  `
})

export class OneComponent {
  @Input() data: any;

  constructor() {
  }
}

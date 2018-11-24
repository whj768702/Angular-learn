import {Component, Input} from '@angular/core';

@Component({
  selector: 'child-component-value-set',
  template: `
    <div>
      <span>这是子组件,通过set截听输入值的变化</span>
      <br>
      <span>{{local}}</span>
    </div>
  `
})
export class ChildComponentSetComponent {
  local: string;

  @Input()
  set fromData(value: string) {
    this.local = value.repeat(2);
  }
}

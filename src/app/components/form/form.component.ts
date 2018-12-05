import {Component} from '@angular/core';

@Component({
  selector: 'form-demo',
  template: `
    <h1>表单在这呢</h1>
    <span>
        <a routerLink="./reactive">响应式表单</a>
    </span>
    <span>
        <a routerLink="./template">模板驱动表单</a>
    </span>
    <span>
      <a routerLink="./dynamic">动态表单</a>
    </span>
    <router-outlet></router-outlet>`
})

export class FormComponent {
  constructor() {
  }
}

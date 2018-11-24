import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>特性模块中的组件</div>`
})
export class TestComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('test ngoninit');
  }
}

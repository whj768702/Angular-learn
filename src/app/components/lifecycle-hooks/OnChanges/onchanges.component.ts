import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'on-changes',
  template: `
    <span>来自父组件的值:{{fromFather}}</span>
  `
})

export class OnChangesComponent implements OnInit, OnChanges {
  @Input() fromFather: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // 当Angular(重新)设置数据绑定输入属性时响应。该方法接受当前和上一属性值的SimpleChanges对象。
    // 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
    // console.log('changes here');
    // console.log('child:', changes);
  }

  ngOnInit() {
    // console.log('init here');
  }
}

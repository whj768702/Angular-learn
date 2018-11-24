import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'sg-lifecycle-hooks',
  template: `
    <input [(ngModel)]="name"/>
    <div>{{name}}</div>
    <on-changes [fromFather]="name"></on-changes>

    <input [(ngModel)]="age"/>
    <div>{{age}}</div>
  `
})

export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name = 'hello world';
  age = 10;

  constructor() {
  }

  // 当Angular(重新)设置数据绑定输入属性时响应。该方法接受当前和上一属性值的SimpleChanges对象。
  // 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    console.log('ngOnChanges');
  }

  // 在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
  // 在第一轮ngOnChanges()完成之后调用，只调用一次。
  ngOnInit() {
    console.log('ngOnInit');
  }

  // 检测并在发生Angular无法或不愿意自己检测的变化时作出反应。
  // 在每个Angular变更检测周期中调用，ngOnChanges()和ngOnInit()之后。
  ngDoCheck() {
    // console.log('name:', this.name);
    // console.log('age:', this.age);
    console.log('ngDoCheck');
  }

  // 当把内容投影进组件之后调用。第一次ngDoCheck()之后调用，只调用一次。
  // 只适用于组件。
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // 每次完成被投影组件内容的变更检测之后调用。
  // ngAfterContent()和每次ngDoCheck()之后调用。
  // 只适合组件。
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // 初始化完组件视图及其子视图之后调用。
  // 第一次ngAfterContentChecked()之后调用，只调用一次。
  // 只适合组件。
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // 每次做完组件视图和自视图的变更检测之后调用。
  // ngAfterViewInit()和每次ngAfterContentChecked()之后调用。
  // 只适合组件。
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // 当Angular每次销毁指令/组件之前调用并清扫。
  // 在这儿反订阅可观察对象和分离事件处理器，以防内存泄露。
  // 在Angular销毁指令/组件之前调用。
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

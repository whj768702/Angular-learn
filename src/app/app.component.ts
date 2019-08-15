import {Component} from '@angular/core';
import {Menu} from './components/side-bar/menu';

@Component({
  selector: 'sg-my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  color = 'yellow';
  isCollapsed = false;

  menus: Menu[] = [
    {name: 'Dashboard', router: 'dashboard'},
    {name: 'Crisis Center', router: 'crisis'},
    {name: 'Heroes', router: 'heroes'},
    {name: 'pipe管道', router: 'pipe'},
    {name: '高亮指令', router: 'show-highlight'},
    {name: '生命周期钩子', router: 'lifecycle-hooks'},
    {name: '组件交互', router: 'component-interaction'},
    {name: '特性模块', router: 'template'},
    {name: '动态组件', router: 'dynamic-component-loading'},
    {name: '表单', router: 'form'}
  ];
}

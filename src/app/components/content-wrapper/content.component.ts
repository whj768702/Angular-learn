import {Component} from '@angular/core';

@Component({
  selector: 'sg-content-wrapper',
  template: `
    <div class="view-body">
      <sg-side-bar #changeSideBar></sg-side-bar>
      <div class="view-content" [ngClass]="{'small':changeSideBar.isOpenSideBar}">
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./content.component.less']
})

export class ContentWrapComponent {
  color = 'yellow';
  title = 'test';
}

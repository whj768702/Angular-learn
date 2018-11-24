import {Component} from '@angular/core';

@Component({
  selector: 'sg-content-wrapper',
  template: `
    <div class="viewFramework-body viewFramework-sidebar-full">
      <sg-side-bar #changeSideBar></sg-side-bar>
      <div class="viewFramework-product" [ngClass]="{'small':changeSideBar.isOpenSideBar}">
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./content.component.css']
})

export class ContentWrapComponent {
  color = 'yellow';
  title = 'test';
}

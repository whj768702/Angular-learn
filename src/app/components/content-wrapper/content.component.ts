import { Component } from '@angular/core';

@Component({
    selector: 'sg-content-wrapper',
    template: `
        <div class="viewFramework-body viewFramework-sidebar-full">
            <sg-side-bar #changeSideBar></sg-side-bar>
            <div class="viewFramework-product" [ngClass]="{'small':changeSideBar.isOpenSideBar}">
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/crisis" routerLinkActive="active">Crisis Center</a>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                    <a routerLink="/show-highlight" routerLinkActive="active">highlight</a>
                    <a routerLink="/lifecycle-hooks" routerLinkActive="active">生命周期钩子</a>
                    <a routerLink="/component-interaction" routerLinkActive="action">组件交互</a>
                    <a routerLink="/template" routerLinkActive="active">特性模块</a>
                </nav>
                <router-outlet></router-outlet> 
            </div>
        </div>
    `,
    styleUrls: ['./content.component.css']
})

export class contentComponent {
    color = 'yellow';
}
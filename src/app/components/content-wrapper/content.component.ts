import { Component, ViewChild, OnInit} from '@angular/core';
import {sideBarComponent} from "../side-bar/side-bar.component";

@Component({
    selector: 'sg-content-wrapper',
    template: `
        <div class="viewFramework-body viewFramework-sidebar-full">
            <sg-side-bar #changeSideBar></sg-side-bar>
            <div class="viewFramework-product" [ngClass]="{'small':sideBar}">
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/crisis" routerLinkActive="active">Crisis Center</a>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                    <a routerLink="/countdown" routerLinkActive="active">countdown 本地变量</a>
                    <a routerLink="/countdown2" routerLinkActive="active">countdown ViewChild</a>
                    <a routerLink="/astronaut-mission" routerLinkActive="active">communicate via a service</a>
                    <a routerLink="/show-highlight" routerLinkActive="active">highlight</a>
                </nav>
                <router-outlet></router-outlet> 
            </div>
        </div>
    `,
    styleUrls: ['./content.component.css']
})

export class contentComponent  implements OnInit {
    color = 'yellow';
    sideBar: boolean = true;
    @ViewChild(sideBarComponent)
    private contentState: sideBarComponent;

    ngOnInit(): void{
        this.sideBar=this.contentState.sideBarState();
    }

}
import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu";


@Component({
    selector: 'sg-side-bar',
    template: `
        <div class="viewFramework-sidebar-full viewFramework-sidebar">
            <ul>
                <li *ngFor="let item of menus">
                    <span style="color:red;">{{item.name}}</span>
                </li>
            </ul>
        </div>
    `,
    styleUrls: ['./side-bar.component.css']
})
export class sideBarComponent implements OnInit{
    menus: Menu[]=[];
    constructor(){}
    ngOnInit():void{
        for(let i=0; i<10;i++){
            let temp=new Menu();
            temp.name="menu" + i;
            this.menus.push(temp);
        }
    }
}
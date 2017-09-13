import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu";


@Component({
    selector: 'sg-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class sideBarComponent implements OnInit{
    menus: Menu[]=[];
    isOpenSideBar: boolean = true;
    constructor(){}
    ngOnInit():void{
        for(let i=0; i<10;i++){
            let temp=new Menu();
            temp.name="menu" + i;
            this.menus.push(temp);
        }
    }
    changeSideBar(): void{
        this.isOpenSideBar = !this.isOpenSideBar;
    }
    sideBarState(): boolean{
        return this.isOpenSideBar;
    }
}
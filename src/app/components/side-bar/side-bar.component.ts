import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";


@Component({
    selector: 'sg-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class sideBarComponent implements OnInit {
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
    isOpenSideBar: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    changeSideBar(): void {
        this.isOpenSideBar = !this.isOpenSideBar;
    }

    sideBarState(): boolean {
        return this.isOpenSideBar;
    }
}

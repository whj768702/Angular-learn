import {AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, ViewChild} from '@angular/core';
import {OneComponent} from './components/one.component';
import {DynamicComponentDirective} from './dynamicComponent.directive';
import {TwoComponent} from './components/two.component';

@Component({
    selector: 'dynamic-component-loading',
    template: `
        <h1>动态加载组件</h1>
        <ng-template dynamic-component-anchor-point></ng-template>
    `
})

export class DynamicComponentComponent implements AfterViewInit, OnDestroy{
    @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;

    currentIndex: number = 1;
    interval: any;
    components = [
        {component: OneComponent},
        {component: TwoComponent}
    ];
    constructor(private componentFactoryResolver: ComponentFactoryResolver){}

    ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentIndex = (this.currentIndex + 1) % 2;
        let adItem = this.components[this.currentIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
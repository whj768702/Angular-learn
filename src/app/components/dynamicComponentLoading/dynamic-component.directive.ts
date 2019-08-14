import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dynamic-component-anchor-point]'
})

export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

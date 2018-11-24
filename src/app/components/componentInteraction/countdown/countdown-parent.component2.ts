import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from "./countdown-timer.component";

@Component({
    selector: 'countdown-parent-vc',
    template: `
        <h3>Countdown to Liftoff (via ViewChild)</h3>
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
        <div class="seconds">{{ seconds() }}</div>
        <countdown-timer></countdown-timer>
    `
})

export class CountdownParentComponent2 implements AfterViewInit{
    @ViewChild(CountdownTimerComponent)
    private timerComponent:CountdownTimerComponent;

    seconds():number{return 0;}
    ngAfterViewInit(){
        setTimeout(()=>this.seconds=()=>this.timerComponent.seconds,0);
    }

    start():void{
        this.timerComponent.start();
    }
    stop():void{
        this.timerComponent.stop();
    }
}
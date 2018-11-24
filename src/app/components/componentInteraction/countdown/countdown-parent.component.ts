import {Component} from '@angular/core';

@Component({
    selector: 'countdown-parent-lv',
    template: `
    <h3>Countdown to liftoff(via local variable)</h3> 
    <button (click)="timer.start()">start</button>
    <button (click)="timer.stop()">stop</button>
    <div>{{timer.seconds}}</div>
    <countdown-timer #timer></countdown-timer>
    `
})

export class CountdownParentComponent{}
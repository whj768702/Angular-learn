import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: `<p>{{message}}</p>`
})

export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  start(): void {
    this.countDown();
  }

  stop(): void {
    this.clearTimer();
    this.message = `Hoding at T-${this.seconds} seconds.`;
  }

  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting.`;
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}

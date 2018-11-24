import {Component, Input, OnDestroy} from '@angular/core';
import {MissionService} from '../../../services/mission.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'my-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed"
      >Confirm
      </button>
    </p>
  `
})

export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed  = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm(): void {
    this.confirmed = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

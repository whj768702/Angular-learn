import {Component, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';

@Component({
  // moduleId: module.id,
  selector: 'sg-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result;
    });
  }

}

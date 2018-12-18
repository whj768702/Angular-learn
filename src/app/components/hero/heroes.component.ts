import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Router} from '@angular/router';
import {Logger} from '../../services/logger.service';

@Component({
  selector: 'sg-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
  providers: [Logger]
})

export class HeroesComponent implements OnInit, OnChanges, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;
  agreed = 0;
  disagreed = 0;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private logger: Logger) {
  }

  ngOnChanges(): void {
    console.log('here is ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('here is ngOnDestroy');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
    this.logger.log('getting heroes……');
  }

  ngOnInit(): void {
    console.log('here is ngOnInit');
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
      .then(result => console.log('navigate: ', result));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService
      .deleteHero(hero.id).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}



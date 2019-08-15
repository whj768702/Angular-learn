import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Router} from '@angular/router';
import {Logger} from '../../services/logger.service';
import {NzMessageService} from 'ng-zorro-antd';

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
  loading = false;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private logger: Logger,
    private message: NzMessageService) {
  }

  ngOnChanges(): void {
    console.log('here is ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('here is ngOnDestroy');
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
    this.loading = true;
    this.heroService
      .deleteHero(hero.id).subscribe(() => {
      this.loading = false;
      this.heroes = this.heroes.filter(h => h !== hero);
    }, error => {
      this.loading = false;
      this.message.create('error', '删除失败');
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        console.log('add: ', hero);
        this.heroes = [...this.heroes, hero];
      });
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}



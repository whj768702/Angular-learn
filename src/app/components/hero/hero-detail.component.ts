import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {switchMap} from 'rxjs/operators';

@Component({
  // moduleId: module.id,
  selector: 'sg-my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  _myHero: Hero;

  @Input()
  set myHero(myHero: Hero) {
    this._myHero = myHero;
  }

  get myHero(): Hero {
    console.log('get' + this._myHero);
    return this._myHero;
  }

  @Input() set id(value: any) {
    console.log(value);
  }

  @Output() myVote = new EventEmitter<boolean>();
  voted = false;

  vote(argreed: boolean) {
    this.myVote.emit(argreed);
    this.voted = true;
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.heroService.getHero(+params['id'])))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

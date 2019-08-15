import {Component, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'sg-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  loading = true;

  constructor(private heroService: HeroService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.message.create('error', error || '获取英雄列表失败');
    });
  }

}

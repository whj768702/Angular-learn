import {Component, OnInit} from "@angular/core";
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {NzConfigService} from "ng-zorro-antd/core/config";

@Component({
  selector: 'sg-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  loading = true;

  constructor(private heroService: HeroService,
              private message: NzConfigService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.message.set('message', error || '获取英雄列表失败');
    });
  }

}

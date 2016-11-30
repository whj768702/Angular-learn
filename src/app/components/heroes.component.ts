import { Component, OnInit } from '@angular/core';

import {Hero} from "../hero";
import {HeroService} from "../services/hero.service";
import {Router} from "@angular/router";
import {Logger} from "../services/logger.service";

// import '../../public/css/styles.css';

@Component({
    // moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: '../views/heroes.component.html',
    styleUrls: ['../styles/heroes.component.css'],
    providers: [Logger]
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router,
        private logger: Logger){
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.logger.log('getting heroes……');
    }
    ngOnInit(): void{
        this.getHeroes();
    }
    gotoDetail(): void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
}



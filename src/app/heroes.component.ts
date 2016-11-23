import { Component, OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

// import '../../public/css/styles.css';

@Component({
    // moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router){
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
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

}



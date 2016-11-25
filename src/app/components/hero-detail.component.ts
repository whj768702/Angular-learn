import {Component, Input, OnInit} from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    // moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: '../views/hero-detail.component.html',
    styleUrls: ['../styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }

    save(): void{
            this.heroService.update(this.hero)
                .then(() => this.goBack());
    }

    // add(name: string): void {
    //     name = name.trim();
    //     if (!name) { return; }
    //     this.heroService.create(name)
    //         .then(hero => {
    //             this.heroes.push(hero);
    //             this.selectedHero = null;
    //         });
    // }
}
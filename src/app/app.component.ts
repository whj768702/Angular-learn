import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    // templateUrl: './app.component.html',
    template:  `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id:</label>{{hero.id}}
        </div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'windstorm'
    };
}

export class Hero{
    id: number;
    name: string;
}

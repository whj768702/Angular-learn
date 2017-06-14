import {Component, OnInit}from '@angular/core';
class Crisis{
    id: number;
    type: string;
}
const Crises: Crisis[] = [
    {id: 1, type: 'fire'},
    {id: 2, type: 'earthquake'},
    {id: 3, type: 'flood'}
];

@Component({
    selector: 'sg-crisis-center',
    // moduleId: module.id,
    templateUrl: 'crisis-center.component.html',
    styleUrls: ['crisis-center.component.css']
})

export class CrisisCenterComponent implements OnInit{
    crises: Crisis[];

    constructor(){
    }

    ngOnInit(): void{
        this.crises = Crises;
    }

    show(): void{
        console.log()
    }

}
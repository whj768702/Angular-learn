import {Component, OnInit}from '@angular/core';
class Crisis{
    id: number;
    name: string;
}
const Crises: Crisis[] = [
    {id: 1, name: 'fire'},
    {id: 2, name: 'earthquake'},
    {id: 3, name: 'flood'}
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

}
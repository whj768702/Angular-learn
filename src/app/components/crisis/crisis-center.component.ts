import {Component, OnInit} from '@angular/core';

class Crisis {
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
  templateUrl: 'crisis-center.component.html',
  styleUrls: ['crisis-center.component.less']
})

export class CrisisCenterComponent implements OnInit {
  crises: Crisis[];

  constructor() {
  }

  ngOnInit(): void {
    this.crises = Crises;
  }

  show(id: number): void {
    console.log(id);
  }
}

import {Component, OnInit} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'template-form',
  templateUrl: './templateForm.html',
  styleUrls: ['./templateForm.less']
})

export class TemplateFormComponent implements OnInit {
  courses = ['math', 'sport', 'music'];
  submitted = false;
  person;

  constructor() {
  }

  ngOnInit() {
    this.person = new Person(1, 'w', 18, this.courses[0]);
  }

  onSubmit() {
    this.submitted = true;
  }
}

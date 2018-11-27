import {Component} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'template-form',
  templateUrl: './templateForm.html',
  styleUrls: ['./templateForm.less']
})

export class TemplateFormComponent {
  courses = ['math', 'sport', 'music'];
  person = new Person(1, 'w', 18, this.courses[0]);
  submitted = false;

  constructor() {
  }

  onSubmit() {
    this.submitted = true;
  }
}

import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.html',
  styleUrls: ['./reactive.css']
})

export class ReactiveFormComponent {
  @Output() submit = new EventEmitter();

  profileForm = new FormGroup(
    {
      name: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        phone: new FormControl('')
      })
    }
  );

  constructor() {
  }

  onSubmit() {
    console.log('value: ', this.profileForm.value);
    this.submit.emit();
  }
}

import {Component, OnInit} from '@angular/core';
import {QuestionControlService} from './QuestionControlService';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  questions: any[];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
  }

  ngOnInit() {
    this.questions = this.qcs.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.html',
  styleUrls: ['./reactive.less']
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

  /* FormBuilder有三个方法：
  * 1. control()对应FormControl
  * 2. group()对应FormGroup
  * 3. array()对应FormArray
  * */
  personalForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: 20,
    moreInfo: this.formBuilder.group({
      weight: 100,
      height: 100
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  // 父表单组中接收表示绰号的表单数组控件
  get aliases() {
    return this.personalForm.get('aliases') as FormArray;
  }
  // 一个绰号控件动态插入到绰号FormArray中
  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log('profile: ', this.profileForm.value);
    console.log('personal info: ', this.personalForm.value);
    this.submit.emit();
  }

  //  使用setValue全部更新
  // 该方法的严格检查可以帮助你捕获复杂表单嵌套中的错误
  setValue() {
    this.profileForm.setValue({
      name: 'w',
      age: 20,
      weight: 120,
      height: 100,
      address: {
        city: 'bj',
        phone: 123
      }
    });
  }

  // 使用patchValue部分更新
  // patchValue() 在遇到那些错误时可能会默默的失败
  patchValue() {
    this.profileForm.patchValue({
      name: 'p',
      age: 21,
      address: {
        city: 'bj'
      }
    });
  }
}

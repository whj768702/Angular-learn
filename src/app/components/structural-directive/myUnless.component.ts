import {Component} from '@angular/core';

@Component({
  selector: 'structural-directive',
  template: `
    <div>
      <h2 id="myUnless">UnlessDirective</h2>
      <p>
        The condition is currently
        <span [ngClass]="{ 'a': !condition, 'b': condition, 'unless': true }">{{condition}}</span>.
        <button
          (click)="condition = !condition"
          [ngClass]="{ 'a': condition, 'b': !condition }">
          Toggle condition to {{condition ? 'false' : 'true'}}
        </button>
      </p>
      <p *myUnless="condition" class="unless a">
        (A) This paragraph is displayed because the condition is false.
      </p>
      <p *myUnless="!condition" class="unless b">
        (B) Although the condition is true,
        this paragraph is displayed because myUnless is set to false.
      </p>
    </div>
  `,
  styles: [`p.unless {
    width: 500px;
  }

  button.a, span.a, .unless.a {
    color: red;
    border-color: gold;
    background-color: yellow;
    font-size: 100%;
  }

  button.b, span.b, .unless.b {
    color: black;
    border-color: green;
    background-color: lightgreen;
    font-size: 100%;
  }`]
})
export class MyUnlessComponent {
  constructor() {
  }

  condition = false;
}

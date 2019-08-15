import {Component} from '@angular/core';

@Component({
  selector: 'show-highlight',
  template: `
      <div>
          <nz-radio-group [(ngModel)]="color">
              <label nz-radio nzValue="yellow">yellow</label>
              <label nz-radio nzValue="red">red</label>
              <label nz-radio nzValue="blue">blue</label>
          </nz-radio-group>
          <br/>
          <span myHighlight [highlightColor]="color" [defaultColor]="'black'">Highlight</span>
      </div>
  `,
  styles: ['div{margin:28px auto;}']
})

export class HighlightDisplayComponent {
  color = 'black';
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {defer, fromEvent} from 'rxjs';
import {first, merge, mergeMap, switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'drag-drop-rxjs',
  templateUrl: './drag-drop-rxjs.component.html',
  styleUrls: ['./drag-drop-rxjs.component.less']
})
export class DragDropRxjsComponent implements OnInit {
  @ViewChild('dropZone', {static: true}) dropZone: ElementRef<HTMLDivElement>;

  dragEnter$ = defer(() => fromEvent(this.dropZone.nativeElement, 'dragenter'))
    .pipe(tap((event: any) => {
      event.target.style.background = 'teal';
      event.target.style.opacity = .5;
    }));

  dragExit$ = defer(() => fromEvent(this.dropZone.nativeElement, 'dragleave'))
    .pipe(tap((event: any) => {
      event.target.style.background = '';
      event.target.style.opacity = 1;
    }));

  dragEnd$ = defer(() => fromEvent(this.dropZone.nativeElement, 'dragend'))
    .pipe(tap((event: any) => {
      event.target.style.background = '';
    }));

  dragOver$ = defer(() => fromEvent(this.dropZone.nativeElement, 'dragover'))
    .pipe(tap((event) => {
      event.preventDefault();
    }));

  drop$ = defer(() => fromEvent(this.dropZone.nativeElement, 'drop')).pipe(tap((event: any) => {
    event.preventDefault();
    event.target.style.background = '';
    console.log(event.dataTransfer.files[0].name);
  }));

  dragAndDrop$ = this.dragEnter$.pipe(
    mergeMap(() => this.dragOver$),
    switchMap(() => merge(this.dragExit$.pipe(first()), this.drop$.pipe(takeUntil(this.dragEnd$))))
  );

  ngOnInit() {
    // this.dragEnter$.subscribe();
    // this.dragEnd$.subscribe();
    // this.dragExit$.subscribe();
    // this.dragOver$.subscribe();
    // this.drop$.subscribe();
    this.dragAndDrop$.subscribe();
  }

}

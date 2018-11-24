import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventService {
  shareData = new EventEmitter<any>();
}

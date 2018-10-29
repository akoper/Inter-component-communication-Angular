import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

    private subject = new Subject<any>();

    sendData(name: string) {
      this.subject.next({text: name});
    }

    getData(): Observable<any> {
      return this.subject.asObservable();
    }
}

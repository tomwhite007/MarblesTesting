import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeRestService {
  constructor() {}

  getDummyData(): Observable<string[]> {
    return of(['test1', 'test2', 'test3']);
  }
}

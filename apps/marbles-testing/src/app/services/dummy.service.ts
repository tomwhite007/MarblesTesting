import { Injectable } from '@angular/core';
import { from, Subject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  dummyInput$ = new Subject<string>();
  dummyObs$ = this.dummyInput$.asObservable();
  derivedObs$: Observable<string>;
  private counter = 0;

  resetCounter() {
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  setDerived() {
    this.derivedObs$ = this.dummyObs$.pipe(
      tap(() => {
        this.counter++;
      }),
      map(dum => dum.substr(0, 1))
    );
  }

  pushInAndLogToConsole() {
    this.setDerived();
    this.derivedObs$.subscribe(res => console.log(res));
    this.dummyInput$.next('hello');
    this.dummyInput$.next('there');
  }
}

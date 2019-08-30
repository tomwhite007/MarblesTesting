import { Component, OnInit } from '@angular/core';
import { DummyService } from './services/dummy.service';
import { inherits } from 'util';
import { Store } from '@ngrx/store';
import { DummyStateState } from './+state/dummy-state.reducer';
import { fromDummyStateActions } from './+state/dummy-state.actions';

@Component({
  selector: 'marbles-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private dummy: DummyService,
    private store: Store<DummyStateState>
  ) {}
  title = 'marbles-testing';

  ngOnInit() {
    this.dummy.resetCounter();
    this.dummy.pushInAndLogToConsole();

    this.store.dispatch(new fromDummyStateActions.LoadDummyState());
  }
}

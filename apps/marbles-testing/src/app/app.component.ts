import { Component, OnInit } from '@angular/core';
import { DummyService } from './services/dummy.service';
import { inherits } from 'util';

@Component({
  selector: 'marbles-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dummy: DummyService) {}
  title = 'marbles-testing';

  ngOnInit() {
    this.dummy.resetCounter();
    this.dummy.pushInAndLogToConsole();
  }
}

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DummyService } from './services/dummy.service';
import { Store } from '@ngrx/store';

export const createSpyObj = (
  baseName: string,
  methodNames: string[] | (string | number)[]
): { [key: string]: any } => {
  const obj: any = {};

  for (let i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    const storeSpy = createSpyObj('Store', ['select', 'dispatch']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [DummyService, { provide: Store, useValue: storeSpy }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'marbles-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('marbles-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to marbles-testing!'
    );
  });
});

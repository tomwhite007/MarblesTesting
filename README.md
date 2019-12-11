# MarblesTesting

A simple project to demonstrate best practice unit testing with Jest on Observables.

See [dummy-state.effects.spec.ts](https://github.com/tomwhite007/MarblesTestingJasmine/blob/master/apps/marbles-testing-jasmine/src/app/%2Bstate/dummy-state.effects.spec.ts) and [dummy.service.spec.ts](https://github.com/tomwhite007/MarblesTesting/blob/master/apps/marbles-testing/src/app/services/dummy.service.spec.ts)

the `+state` folder was scaffolded by Nrwl [Nx](https://nx.dev) schematic:

```node
ng g @nrwl/angular:ngrx <featurename> --module=<path-to-module> --defaults [options]
```

...and then I edited an action and effect to create the demo unit tests

## dummy-state.effects

Originally, I built this demo with an NgRx Effect that used the operator `withLatestFrom` to get a value from the Store. It turns out this causes problems when trying to mock the input to it after the Effect has been instantiated. See [withLastestFrom-mocking-issue demo](https://github.com/tomwhite007/withLastestFrom-mocking-issue) or [rxjs/issues/5159](https://github.com/ReactiveX/rxjs/issues/5159)

I have since refactored to to use `switchMap` to avoid this issue whilst demonstrating current Angular unit testing best practice.

## Other notes

This project was generated using [Nx](https://nx.dev).

These unit tests run as expected from the command line. Just enter:

```
ng test
```

I have since discovered there is a bug with running these Jest unit tests on [WallabyJS, using their auto-config](https://wallabyjs.com/docs/intro/config.html). I believe this may be an [Nx issue](https://github.com/nrwl/nx/issues/1439), and will research further.

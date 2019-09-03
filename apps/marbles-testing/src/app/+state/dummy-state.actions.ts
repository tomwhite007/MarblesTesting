import { Action } from '@ngrx/store';

export enum DummyStateActionTypes {
  LoadDummyState = '[DummyState] Load DummyState',
  DummyStateLoaded = '[DummyState] DummyState Loaded',
  DummyStateLoadError = '[DummyState] DummyState Load Error'
}

export class LoadDummyState implements Action {
  readonly type = DummyStateActionTypes.LoadDummyState;
}

export class DummyStateLoadError implements Action {
  readonly type = DummyStateActionTypes.DummyStateLoadError;
  constructor(public payload: any) {}
}

export class DummyStateLoaded implements Action {
  readonly type = DummyStateActionTypes.DummyStateLoaded;
  constructor(public payload: string[]) {}
}

export type DummyStateAction =
  | LoadDummyState
  | DummyStateLoaded
  | DummyStateLoadError;

export const fromDummyStateActions = {
  LoadDummyState,
  DummyStateLoaded,
  DummyStateLoadError
};

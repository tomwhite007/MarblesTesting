import { DummyStateAction, DummyStateActionTypes } from './dummy-state.actions';

export const DUMMYSTATE_FEATURE_KEY = 'dummyState';

/**
 * Interface for the 'DummyState' data used in
 *  - DummyStateState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface DummyStateState {
  list: string[]; // list of DummyState; analogous to a sql normalized table
  selectedId?: string | number; // which DummyState record has been selected
  loaded: boolean; // has the DummyState list been loaded
  error?: any; // last none error (if any)
}

export interface DummyStatePartialState {
  readonly [DUMMYSTATE_FEATURE_KEY]: DummyStateState;
}

export const initialState: DummyStateState = {
  list: [],
  loaded: false
};

export function reducer(
  state: DummyStateState = initialState,
  action: DummyStateAction
): DummyStateState {
  switch (action.type) {
    case DummyStateActionTypes.DummyStateLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case DummyStateActionTypes.DummyStateLoadError: {
      state = {
        ...state,
        error: action.payload,
        loaded: false
      };
      break;
    }
  }
  return state;
}

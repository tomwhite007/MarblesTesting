import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DUMMYSTATE_FEATURE_KEY, DummyStateState } from './dummy-state.reducer';

// Lookup the 'DummyState' feature state managed by NgRx
const getDummyStateState = createFeatureSelector<DummyStateState>(
  DUMMYSTATE_FEATURE_KEY
);

const getLoaded = createSelector(
  getDummyStateState,
  (state: DummyStateState) => state.loaded
);
const getError = createSelector(
  getDummyStateState,
  (state: DummyStateState) => state.error
);

const getAllDummyState = createSelector(
  getDummyStateState,
  getLoaded,
  (state: DummyStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getDummyStateState,
  (state: DummyStateState) => state.selectedId
);
const getSelectedDummyState = createSelector(
  getAllDummyState,
  getSelectedId,
  (dummyState, id) => {
    const result = dummyState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const dummyStateQuery = {
  getLoaded,
  getError,
  getAllDummyState,
  getSelectedDummyState
};

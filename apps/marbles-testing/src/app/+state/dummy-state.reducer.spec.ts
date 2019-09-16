import { DummyStateLoaded } from './dummy-state.actions';
import { initialState, reducer } from './dummy-state.reducer';

describe('DummyState Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

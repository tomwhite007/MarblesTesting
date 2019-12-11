import { dummyStateQuery } from './dummy-state.selectors';

describe('DummyState Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState;

  beforeEach(() => {
    storeState = {
      dummyState: {
        list: [],
        selectedId: null,
        loaded: true,
        error: ERROR_MSG
      }
    };
  });

  describe('DummyState Selectors', () => {
    it("getLoaded() should return the current 'loaded' status", () => {
      const result = dummyStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = dummyStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { Entity, DummyStateState } from './dummy-state.reducer';
import { dummyStateQuery } from './dummy-state.selectors';

describe('DummyState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDummyStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createDummyState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      dummyState: {
        list: [
          createDummyState('PRODUCT-AAA'),
          createDummyState('PRODUCT-BBB'),
          createDummyState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('DummyState Selectors', () => {
    it('getAllDummyState() should return the list of DummyState', () => {
      const results = dummyStateQuery.getAllDummyState(storeState);
      const selId = getDummyStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedDummyState() should return the selected Entity', () => {
      const result = dummyStateQuery.getSelectedDummyState(storeState);
      const selId = getDummyStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

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

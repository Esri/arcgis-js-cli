import { initWidgets } from './widgets';

jest.mock('esri/widgets/LayerList');
jest.mock('esri/widgets/Legend');

let spy: jest.SpyInstance;

describe('widgets', () => {
  beforeEach(() => {
    spy = jest.spyOn(document, 'getElementById');
    const mockElem: any = {
      offsetWidth: 300,
    };
    spy.mockReturnValue(mockElem);
  });

  it('initializes with view padding', () => {
    const view: any = {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    };
    const results = initWidgets(view);
    expect(results.view.padding.left).toBe(300);
  });
});

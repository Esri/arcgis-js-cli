import ResizeObserver from 'resize-observer-polyfill';
import { interactions } from './interactions';

jest.mock('resize-observer-polyfill');

describe('interactions', () => {
  let spy: jest.SpyInstance;

  afterAll(() => {
    (ResizeObserver as jest.Mock).mockClear();
    spy.mockRestore();
  });

  beforeAll(() => {
    spy = jest.spyOn(document, 'getElementById');
    const mockElem: any = {
      offsetWidth: 300,
    };
    spy.mockReturnValue(mockElem);
  });

  it('sets up ResizeObserver', () => {
    const view: any = {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    };

    const layerListContainer = document.createElement('div');
    const legendContainer = document.createElement('div');
    const widgetPanel: any = document.createElement('div');

    interactions({ layerListContainer, legendContainer, widgetPanel, view });
    expect(ResizeObserver).toHaveBeenCalledTimes(1);
  });
});

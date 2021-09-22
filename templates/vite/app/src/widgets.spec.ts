/* eslint-disable  @typescript-eslint/no-explicit-any */
import { initWidgets } from './widgets';

jest.mock('@arcgis/core/widgets/LayerList');
jest.mock('@arcgis/core/widgets/Legend');
jest.mock('@arcgis/core/widgets/Search');

describe('widgets', () => {
  it('initializes widgets in view', () => {
    const widgets: unknown[] = [];

    const view: any = {
      ui: {
        add(w: unknown) {
          widgets.push(w);
        },
      },
    };

    const layer: any = {};

    initWidgets({ view, layer });
    expect(widgets).toHaveLength(2);
  });
});

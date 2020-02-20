import { initialize, view } from './map';

jest.mock('esri/views/MapView');
jest.mock('esri/WebMap');
jest.mock('esri/widgets/Expand');
jest.mock('esri/widgets/Legend');

describe('data/map', () => {
    describe('initialize', () => {
        it('should initialize the mapview', () => {
            const element = document.createElement('div');
            initialize(element);
            expect(view.container).toEqual(element);
        });
    });
});

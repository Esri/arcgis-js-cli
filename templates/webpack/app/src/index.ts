// Map data
import { featureLayer, map } from './data/app';

// MapView
import MapView from '@arcgis/core/views/MapView';

// widget utils
import { initWidgets } from './widgets';

/**
 * Initialize application
 */
const view = new MapView({
	container: 'viewDiv',
	map,
});

featureLayer.when(() => {
	view.goTo(featureLayer.fullExtent);
});

view.when(initWidgets);

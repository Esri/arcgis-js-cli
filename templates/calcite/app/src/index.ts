// Map data
import { featureLayer, map } from './data/app';

// MapView
import MapView from 'esri/views/MapView';

// widget utils
import { initWidgets } from './widgets';

// interactions
import { interactions } from './interactions';

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

view.when(initWidgets).then(interactions);

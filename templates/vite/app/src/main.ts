import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { initWidgets } from './widgets';

import './style.css';

config.apiKey = import.meta.env.VITE_API_KEY as string;

const featureLayer = new FeatureLayer({
  portalItem: {
    id: 'b234a118ab6b4c91908a1cf677941702',
  },
  outFields: ['NAME', 'STATE_NAME', 'VACANT', 'HSE_UNITS'],
  title: 'U.S. Counties',
  opacity: 0.8,
});

featureLayer.when(() => {
  view.goTo(featureLayer.fullExtent);
});

const view = new MapView({
  container: 'viewDiv',
  map: new Map({
    basemap: 'arcgis-topographic',
    layers: [featureLayer],
  }),
});

view.when(() => initWidgets({ view, layer: featureLayer }));

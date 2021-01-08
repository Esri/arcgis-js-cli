import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SearchViewModel from '@arcgis/core/widgets/Search/SearchViewModel';
import Legend from '@arcgis/core/widgets/Legend';
import LayerList from '@arcgis/core/widgets/LayerList';
import App from 'app/App';

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
  map: new Map({
    basemap: {
      baseLayers: [
        new TileLayer({
          portalItem: {
            // world hillshade
            id: '1b243539f4514b6ba35e7d995890db1d',
          },
        }),
        new VectorTileLayer({
          portalItem: {
            // topographic
            id: '7dc6cea0b1764a1f9af2e679f642f0f5',
          },
        }),
      ],
    },
    layers: [featureLayer],
  }),
});

const app = new App({
  view,
  title: 'ArcGIS Webpack Template',
  searchViewModel: new SearchViewModel({
    includeDefaultSources: false,
    sources: [
      {
        layer: featureLayer,
        outFields: ['NAME', 'STATE_NAME', 'VACANT', 'HSE_UNITS'],
        searchFields: ['NAME'],
        suggestionTemplate: '{NAME} County, {STATE_NAME}',
        placeholder: 'Search by County Name',
      },
    ],
  }),
  container: document.createElement('div'),
});

view.when(() => {
  view.ui.add(
    new Legend({
      view,
    }),
    'bottom-left',
  );
  view.ui.add(
    new LayerList({
      view,
    }),
    'top-right',
  );
});

document.body.append(app.container);

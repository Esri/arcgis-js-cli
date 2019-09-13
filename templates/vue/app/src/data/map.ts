import MapView from 'esri/views/MapView';
import WebMap from 'esri/WebMap';
import Expand from 'esri/widgets/Expand';
import Legend from 'esri/widgets/Legend';

import { webMapId } from '../config';

export const webmap = new WebMap({
    portalItem: {
        id: webMapId
    }
});

export const view = new MapView({
    container: 'viewDiv',
    map: webmap
});

// add a legend widget instance to the view
// and set the style to 'card'. This is a
// responsive style, which is good for mobile devices
export const legend = new Expand({
    content: new Legend({
        view,
        style: 'card'
    }),
    view,
    expanded: true
});
view.ui.add(legend, 'bottom-left');

/**
 * Assigns the container element to the View
 * @param container
 */
export const initialize = (container: HTMLDivElement) => {
    view.container = container;
    view.when()
        .then(_ => {
            console.log('Map and View are ready');
        })
        .catch(error => {
            console.warn('An error in creating the map occured:', error);
        });
};

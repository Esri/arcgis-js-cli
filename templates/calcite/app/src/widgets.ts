// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';

import esri = __esri;

export function initWidgets(view: esri.MapView | esri.SceneView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });

  // interactions
  const legendContainer = document.getElementById('widget-legend') as HTMLElement;
  const layerListContainer = document.getElementById('widget-layerlist') as HTMLElement;
  const widgetPanel = document.getElementById('widget-panel') as HTMLCalciteShellPanelElement;

  if (widgetPanel) {
    view.padding = {
      ...view.padding,
      left: widgetPanel.offsetWidth,
    };
  }

  if (legendContainer) {
    legend.container = legendContainer;
  }
  if (layerListContainer) {
    layerList.container = layerListContainer;
  }

  return {
    layerListContainer,
    legendContainer,
    widgetPanel,
    view,
  };
}

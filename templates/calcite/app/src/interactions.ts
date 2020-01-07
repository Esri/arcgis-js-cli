import ResizeObserver from 'resize-observer-polyfill';
import esri = __esri;

interface InteractionParameters {
  layerListContainer: HTMLElement;
  legendContainer: HTMLElement;
  widgetPanel: HTMLCalciteShellPanelElement;
  view: esri.MapView | esri.SceneView;
}

export function interactions({ layerListContainer, legendContainer, widgetPanel, view }: InteractionParameters) {
  // toggle widgets
  const actions = Array.from(document.querySelectorAll('calcite-action'));
  for (const action of actions) {
    action.addEventListener('click', () => {
      if (action.text === 'Layers') {
        layerListContainer.classList.toggle('hidden');
        legendContainer.classList.add('hidden');
      } else {
        layerListContainer.classList.add('hidden');
        legendContainer.classList.toggle('hidden');
      }
      widgetPanel.collapsed =
        layerListContainer.classList.contains('hidden') && legendContainer.classList.contains('hidden');
    });
  }

  // listen for widget panel to be to be resized
  const rObserver = new ResizeObserver(() => {
    view.padding = {
      ...view.padding,
      left: widgetPanel.offsetWidth,
    };
  });

  rObserver.observe(widgetPanel);
  return rObserver;
}

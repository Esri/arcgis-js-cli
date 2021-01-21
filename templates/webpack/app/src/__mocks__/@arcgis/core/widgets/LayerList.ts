import esri = __esri;
export default class LayerList {
  view!: esri.MapViewProperties | esri.SceneViewProperties | undefined;
  container!: HTMLDivElement;
  constructor(params?: esri.LayerListProperties) {
    this.view = params?.view;
  }
}

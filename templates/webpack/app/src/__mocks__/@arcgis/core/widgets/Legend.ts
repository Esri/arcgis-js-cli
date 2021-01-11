import esri = __esri;
export default class Legend {
  view!: esri.MapViewProperties | esri.SceneViewProperties | undefined;
  container!: HTMLDivElement;
  constructor(params?: esri.LegendProperties) {
    this.view = params?.view;
  }
}

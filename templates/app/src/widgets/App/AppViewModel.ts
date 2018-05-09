/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");
import { whenOnce } from "esri/core/watchUtils";
import FeatureLayer = require("esri/layers/FeatureLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Expand = require("esri/widgets/Expand");
import Search = require("esri/widgets/Search");

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

export interface AppParams {
  appName: string;
  map: EsriMap;
  featureLayer: FeatureLayer;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() appName: string;

  @property() map: EsriMap;

  @property() featureLayer: FeatureLayer;

  @property() view: MapView;

  constructor(params?: Partial<AppParams>) {
    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));
  }

  onload() {
    const search = new Search({ view: this.view });
    const expand = new Expand({
      content: search
    });
    this.view.ui.add(expand, "top-right");

    this.featureLayer.when(() => {
      this.view.goTo({ target: this.featureLayer.fullExtent });
    });
  }
}

export default AppViewModel;

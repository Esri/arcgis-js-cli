const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

import FeatureLayer = require("esri/layers/FeatureLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");

import App from "../../../src/widgets/App";

suite("widgets/App", () => {
  test("create new", () => {
    assert.doesNotThrow(() => new App({}));
  });

  test("application values valid", () => {
    const NAME = "My Application";
    const featureLayer = new FeatureLayer();
    const map = new EsriMap();
    const view = new MapView();
    const app = new App({ appName: NAME, featureLayer, map, view });

    assert.equal(NAME, app.appName);
    assert.equal(featureLayer, app.featureLayer);
    assert.equal(map, app.map);
    assert.equal(view, app.view);
  });
});

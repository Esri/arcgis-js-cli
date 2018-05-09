const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

import { stub } from "sinon";

import FeatureLayer = require("esri/layers/FeatureLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");

import AppViewModel from "../../../../src/widgets/App/AppViewModel";

suite("widgets/App/AppViewModel", () => {
  test("create new", () => {
    assert.doesNotThrow(() => new AppViewModel({}));
  });

  test("application values valid", () => {
    const NAME = "My Application";
    const featureLayer = new FeatureLayer();
    const map = new EsriMap();
    const view = new MapView();
    const app = new AppViewModel({ appName: NAME, featureLayer, map, view });

    assert.equal(NAME, app.appName);
    assert.equal(featureLayer, app.featureLayer);
    assert.equal(map, app.map);
    assert.equal(view, app.view);
  });

  test("onload - FeatureLayer will be used", () => {
    const NAME = "My Application";
    const featureLayer = new FeatureLayer();
    const map = new EsriMap();
    const view = new MapView();

    const whereStub = stub(featureLayer, "when");

    const app = new AppViewModel({ appName: NAME, featureLayer, map, view });
    app.onload();
    assert.isTrue(whereStub.called);
    whereStub.restore();
  });
});

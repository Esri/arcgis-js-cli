/// <reference types="intern" />

const { describe, it } = intern.getPlugin("interface.bdd");
const { expect } = intern.getPlugin("chai");

import { initialize, view } from "../../../src/data/map";

describe("data/map", () => {
  describe("initialize", () => {

    it("should initialize the mapview", () => {
      const element = document.createElement("div");
      initialize(element);
      expect(view.container).to.eq(element);
    });
  });
});

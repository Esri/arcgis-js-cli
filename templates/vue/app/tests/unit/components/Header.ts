/// <reference types="intern" />

const { describe, it } = intern.getPlugin("interface.bdd");
const { expect } = intern.getPlugin("chai");

import Vue from "vue";

import Header from "../../../src/components/Header.vue";

describe("components/Header", async () => {
  it("should contain header text", () => {
    const vm = new Vue(Header);
    vm.$props.appTitle = "This is a test";
    vm.$mount();
    const title = vm.$refs.title as HTMLElement;
    expect(title.innerText).to.equal("This is a test");
  });
});

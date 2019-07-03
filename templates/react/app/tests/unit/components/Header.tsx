/// <reference types="intern" />

const { afterEach, describe, it } = intern.getPlugin("interface.bdd");
const { expect } = intern.getPlugin("chai");
import React from "react"
import { cleanup, render } from "@testing-library/react";

import { Header } from "../../../src/components/Header";

describe("components/Header", async () => {
  afterEach(cleanup);
  it("should contain header text", () => {
    const { getByText } = render(<Header appTitle="This is a test" />);
    const text = getByText(/^This is a test/);
    expect(text.innerText).to.equal("This is a test");
  });
});

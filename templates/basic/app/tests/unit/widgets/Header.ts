const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

import { Header } from "../../../src/widgets/Header";

suite("widgets/Header", () => {
  const NAME = "My application";
  test("create new", () => {
    assert.doesNotThrow(() => Header({ appName: NAME }));
  });

  test("values used correctly", () => {
    const header: JSX.IntrinsicElements = Header({ appName: NAME });
    const child = header.children[0];
    const target = child.children[1];
    assert.equal(NAME, target.text);
  });
});

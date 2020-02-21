import * as React from "react";
import { shallow, configure } from "enzyme";

import _Widget from "../src/runtime/widget";
import { wrapWidget } from "jimu-for-test";

// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<%name%>", function() {
  it("with config", function() {
    const config = {
      exampleConfigProperty: "test"
    };
    let Widget = wrapWidget(_Widget, {
      config: config,
      manifest: { name: "simple" } as any,
      messages: {}
    });
    let wrapper = shallow(<Widget />).shallow();
    expect(wrapper.find(".widget-simple").length).toEqual(1);
  });

  it("without config", function() {
    let Widget = wrapWidget(_Widget, {
      manifest: { name: "simple" } as any,
      messages: {}
    });
    let wrapper = shallow(<Widget />).shallow();
    expect(wrapper.find(".widget-simple").length).toEqual(1);
  });
});

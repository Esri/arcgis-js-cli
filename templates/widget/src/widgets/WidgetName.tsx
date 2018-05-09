/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");

import <%name%>ViewModel from "./<%name%>/<%name%>ViewModel";

const CSS = {
  base: "esri-widget <%name-lower%>-base"
};

@subclass("widgets.<%name%>")
class <%name%> extends declared(Widget) {

  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: <%name%>ViewModel
  })
  viewModel= new <%name%>ViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>
          Welcome {this.name}!
        </p>
      </div>
    );
  }

}

export = <%name%>;
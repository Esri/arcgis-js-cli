import Accessor from "esri/core/Accessor";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

@subclass("app.widgets.<%name%>.<%name%>ViewModel")
export default class <%name%>ViewModel extends declared(Accessor) {

  @property() name = "Slagathor";

  constructor(params?: any) {
    super();
  }

}

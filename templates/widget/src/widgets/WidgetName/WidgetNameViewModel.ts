import Accessor from "esri/core/Accessor";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

@subclass("widgets.<%name%>.<%name%>ViewModel")
class <%name%>ViewModel extends declared(Accessor) {

  @property()
  name = "Slagathor";

  constructor() {
    super();
  }

}

export default <%name%>ViewModel;

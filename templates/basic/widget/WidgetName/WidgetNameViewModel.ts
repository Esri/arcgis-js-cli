import { whenOnce } from '@arcgis/core/core/watchUtils';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import Accessor from '@arcgis/core/core/Accessor';

export interface <%name%>ViewModelProperties extends Object {
  /**
   * Your name.
   */
  name?: string;
  /**
   * Map or scene view.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html
   * 
   */
  view?: esri.MapView | esri.SceneView;
}

@subclass('app/<%name%>/<%name%>ViewModel')
export default class <%name%>ViewModel extends Accessor {
  @property()
  view!: esri.MapView | esri.SceneView;

  @property()
  name = 'Slagathor';

  constructor(properties?: <%name%>ViewModelProperties) {
    super(properties);
    whenOnce(this, 'view', this.init.bind(this));
  }

  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
  }
}

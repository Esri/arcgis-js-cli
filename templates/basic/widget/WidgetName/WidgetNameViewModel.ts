import { whenOnce } from '@arcgis/core/core/watchUtils';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import Accessor from '@arcgis/core/core/Accessor';
import type MapView from '@arcgis/core/views/MapView';
import type SceneView from '@arcgis/core/views/SceneView';

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
  view?: MapView | SceneView;
}

@subclass('app.widgets.<%name%>ViewModel')
export default class <%name%>ViewModel extends Accessor {
  @property()
  view!: MapView | SceneView;

  @property()
  name = 'Slagathor';

  constructor(properties?: <%name%>ViewModelProperties) {
    super(properties);
    whenOnce(this, 'view', this.init.bind(this));
  }

  init(view: MapView | SceneView) {
    console.log(view.scale);
  }
}

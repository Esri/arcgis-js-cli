// import app = __app;

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import Accessor from '@arcgis/core/core/Accessor';

@subclass('app/App/AppViewModel')
export default class AppViewModel extends Accessor {
  @property()
  view!: esri.MapView | esri.SceneView;
}

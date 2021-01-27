import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

/**
 * renderable will be depreciated (possibly removed?) in 4.19 as
 * all @property() decorated properties will be watched
 */
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import <%name%>ViewModel from './<%name%>/<%name%>ViewModel';

export interface <%name%>Properties extends esri.WidgetProperties {
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

const CSS = {
  base: 'esri-widget <%name-lower%>-base',
};

@subclass('app.widgets.<%name%>')
export default class <%name%> extends Widget {
  @property({
    aliasOf: 'viewModel.view',
  })
  view!: esri.MapView | esri.SceneView;

  @property({
    aliasOf: 'viewModel.name',
  })
  @renderable()
  name = '';

  @property({
    type: <%name%>ViewModel,
  })
  @renderable()
  viewModel = new <%name%>ViewModel();

  constructor(properties?: <%name%>Properties) {
    super(properties);
  }

  render(): tsx.JSX.Element {
    const { name } = this;
    return (
      <div class={CSS.base}>
        <p>Welcome {name}!</p>
      </div>
    );
  }
}

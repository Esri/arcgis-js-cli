import app = __app;

import { whenOnce } from '@arcgis/core/core/watchUtils';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import AppViewModel from 'app/App/AppViewModel';

import Search from '@arcgis/core/widgets/Search';

const CSS = {
  base: 'app',
  header: 'app--header',
  headerTitle: 'app--header-title',
  headerSearch: 'app--header-search',
  view: 'app--view',
};

@subclass('app/App')
export default class App extends Widget {
  // view model has no purpose here but more complex apps should have all logic and _init() contained therein
  @property({
    type: AppViewModel,
  })
  viewModel = new AppViewModel();

  @property({
    aliasOf: 'viewModel.view',
  })
  view!: esri.MapView | esri.SceneView;

  @property()
  title = 'ArcGIS for JavaScript';

  @property()
  searchViewModel: esri.SearchViewModel | undefined;

  constructor(properties: app.AppProperties) {
    super(properties);
    whenOnce(this, 'view', this._init.bind(this));
  }

  private async _init(): Promise<void> {
    const { view, searchViewModel } = this;

    setTimeout((): void => {
      view.container = document.querySelector('div[data-app-view]') as HTMLDivElement;
    }, 0);

    await view.when();

    const searchContainer = document.querySelector('div[data-app-search]') as HTMLDivElement;
    if (searchViewModel && !searchViewModel.view) {
      searchViewModel.view = view;
    }
    searchViewModel
      ? new Search({
          view,
          viewModel: searchViewModel,
          container: searchContainer,
        })
      : new Search({
          view,
          container: searchContainer,
        });
  }

  render(): tsx.JSX.Element {
    const { title } = this;
    return (
      <div class={CSS.base}>
        {/* header */}
        <div class={CSS.header}>
          <div class={CSS.headerTitle}>{title}</div>
          <div class={CSS.headerSearch} data-app-search=""></div>
        </div>

        {/* view */}
        <div class={CSS.view} data-app-view=""></div>
      </div>
    );
  }
}

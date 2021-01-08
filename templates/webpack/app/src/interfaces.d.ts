import esri = __esri;

declare namespace __app {
  export interface AppViewModelProperties extends Object {
    /**
     * Esri map or scene view.
     */
    view?: esri.MapView | esri.SceneView;
  }

  export class AppViewModel extends esri.Accessor {
    view: esri.MapView | esri.SceneView;
  }

  export interface AppProperties extends esri.WidgetProperties {
    /**
     * App view model.
     */
    viewModel?: AppViewModel;

    /**
     * Esri map or scene view.
     */
    view: esri.MapView | esri.SceneView;

    /**
     * Title to display in header.
     */
    title?: string;

    /**
     * Esri search view model for search widget.
     */
    searchViewModel?: esri.SearchViewModel;
  }

  export class App extends esri.Widget {
    constructor(properties: AppProperties);
    viewModel: AppViewModel;
    view: esri.MapView | esri.SceneView;
    title: string;
    searchViewModel: esri.SearchViewModel;
  }
}

declare module 'app/App' {
  import App = __app.App;
  export = App;
}

declare module 'app/App/AppViewModel' {
  import AppViewModel = __app.AppViewModel;
  export = AppViewModel;
}

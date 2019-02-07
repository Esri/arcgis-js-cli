import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { WebMapView } from "./components/WebMapView";
import { AppProvider } from "./contexts/App";

import { title } from "./config";

ReactDOM.render(
  <AppProvider>
    <Header appTitle={title} />
    <WebMapView />
  </AppProvider>,
  document.getElementById("root")
);

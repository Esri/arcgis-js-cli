import React, { createContext, useEffect, useReducer } from "react";

export interface AppProviderProps {
  children: JSX.Element[];
}

const initialState = {
  container: HTMLDivElement,
  mounted: false
};

// main application context
export const AppContext = createContext({
  state: initialState,
  setState: (i: any) => i
});

// main application provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      ...initialState
    }
  );

  // when container is ready, we can load the
  // mapping portion of our application
  // and initialize it
  const loadMap = async () => {
    if (state.mounted && state.container) {
      const mapping = await import("../data/map");
      mapping.initialize(state.container);
    }
  };

  useEffect(
    () => {
      loadMap();
    },
    [ state.container ]
  );

  const value = {
    state,
    setState
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

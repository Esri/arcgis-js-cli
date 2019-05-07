import React, { createContext, useEffect, useState } from 'react';

export interface AppProviderProps {
    children: JSX.Element[];
}

interface ContextProps {
    container: HTMLDivElement;
    setContainer: (a: HTMLDivElement) => void;
}

// main application context
export const AppContext = createContext<ContextProps>(null);

// main application provider
export const AppProvider = ({ children }: AppProviderProps) => {
    const [container, setContainer] = useState<HTMLDivElement>(null);

    // when container is ready, we can load the
    // mapping portion of our application
    // and initialize it
    const loadMap = async () => {
        if (container) {
            const mapping = await import('../data/map');
            mapping.initialize(container);
        }
    };

    useEffect(() => {
        loadMap();
    }, [container]);

    const value = {
        container,
        setContainer,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

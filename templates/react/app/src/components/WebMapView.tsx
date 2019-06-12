import React, { useContext, useEffect, useRef } from 'react';

import { AppContext } from '../contexts/App';

const WebMapView = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const { setContainer } = useContext(AppContext);

    // we can let the application context
    // know that the component is ready
    useEffect(() => {
        setContainer(mapRef.current);
    }, [mapRef.current]);

    return <div className="webmap" ref={mapRef} />;
};

export { WebMapView };

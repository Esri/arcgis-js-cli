import React, { useContext, useEffect, useRef } from "react";

import { AppContext } from "../contexts/App";

const WebMapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { setState } = useContext(AppContext);
  
  let mounted = false;
  // we can let the application
  // context know that the component
  // is mounted and ready
  useEffect(
    () => {
      mounted = true;
      setState({
        mounted,
        container: mapRef.current
      });
      return () => {
        mounted = false;
      };
    },
    [ mapRef.current ]
  );

  return (
    <div className="webmap" ref={mapRef}>
    </div>
  );
};

export { WebMapView };
 import React from "react";
import { APIProvider, Map, Marker, Pin, InfoWindow  } from "@vis.gl/react-google-maps";
import { useState } from "react";
function Harta({ coordinates, windowText }) {
 
  const [open, setOpen] = useState(false);
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS} mapId={process.env.REACT_APP_MAP_ID}>
      <div style={{ height: "70vh" }}>
      <Map zoom={17} center={coordinates} mapId={process.env.REACT_APP_MAP_ID}>
          <Marker position={coordinates} onClick={() => setOpen(true)} />
          {open && (
            <InfoWindow position={coordinates} onCloseClick={() => setOpen(false)}>
              <p>{windowText}</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default Harta;

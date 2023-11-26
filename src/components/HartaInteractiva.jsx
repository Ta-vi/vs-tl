import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSailboat, faFish, faMonument, faChurch, faCrown, faBuildingColumns, faArchway, faWater, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markers from './markers.json';
import axios from 'axios';
import { Link } from 'react-router-dom';
{/* test */}
function HartaInteractiva() {

  const getFontAwesomeIcon = (icon) => {
    switch (icon) {
      case 'faSailboat':
        return faSailboat;
      case 'faFish':
        return faFish;
      case 'faMonument':
        return faMonument;
      case 'faChurch':
        return faChurch;
      case 'faCrown':
        return faCrown;
      case 'faBuildingColumns':
        return faBuildingColumns;
      case 'faArchway':
        return faArchway;
      case 'faWater':
        return faWater;
      case 'faArrowLeft':
        return faArrowLeft;
    }
  };

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const mapData = {
        method: 'GET',
        url: 'http://localhost:8000/mapData'
    }
    axios.request(mapData).then((response) => {    
        setMapData(response.data)
    }).catch((error) => {
        console.error(error)
    })
}, [])

  return (
    <div className="gap-16 px-80 py-24 h-screen  relative">
      <div className="absolute top-60 left-0 w-full h-1/3 bg-[#0077b6]"></div>
      <div className="grid grid-rows-3 gap-1 text-4xl px-24   ">
        <p className="text-[#0077b6]">TULCEA,</p>
        <p>ORAȘUL DE PE</p>
        <p>ȘAPTE COLINE</p>
      </div>
      <div className="grid grid-cols-2">    
        <div className="col-span-1 py-28">
          {mapData && (
            <ReactMapGL 
               initialViewState={mapData.initialViewState}
               mapboxAccessToken={mapData.mapboxAccessToken}
               style={{ width: '100%', height: 'calc(50vh - 20px)', border: "2px solid blue" }}
               mapStyle={mapData.mapStyle}
            >
          {markers.map((marker) => (
             <Marker
               key={marker.id}
               latitude={marker.latitude}
               longitude={marker.longitude}
            >
          <button
            className=" "
            onClick={(e) => {
              e.preventDefault();
              setSelectedMarker(marker);
            }}
          >
            <FontAwesomeIcon icon={getFontAwesomeIcon(marker.icon)} size="lg" style={{ color: marker.color }}/>
          </button>
        </Marker>
          ))}
          {selectedMarker && (
          <Popup
              latitude={selectedMarker.latitude}
              longitude={selectedMarker.longitude}
              closeButton={false}
              closeOnClick={false}
              anchor="top"  
              className="w-48 h-24 rounded-lg p-2"
            >
          <div className="flex flex-col items-center">
            <img
              src={selectedMarker.image}
              alt={selectedMarker.title}
              className="w-full h-full rounded-t-lg  border-2 border-[#0077b6] border-solid "
            />
            <div className="bg-[#0077b6] bg-opacity-85 w-full p-2 text-white text-center rounded-b-lg">
              <h2 className="text-xs font-bold">{selectedMarker.title}</h2>
              <p className="text-xxs">{selectedMarker.description}</p>
            </div>
            <button
              className = "absolute top-2.5 right-2.5   bg-[#0077b6]   p-1   text-xl  text-white"
              onClick={() => setSelectedMarker(null)}
              closeButton={true}
            >
            X
            </button>
          </div>
        </Popup>
        )}
        </ReactMapGL>
      )}
    </div>
    <div className="col-span-1  items-center justify-center px-14 z-10  ">
        <p className="text-white py-40"> Tulcea servește drept punct de plecare pentru explorarea Deltei Dunării, oferind oportunități unice pentru observarea vieții sălbatice, a păsărilor exotice și a peisajelor naturale de neegalat în Europa. Însă, pe lângă acest lucru, Tulcea se poate lăuda și cu alte numeroase obiective turistice, pe care vă invit să le descoperim împreună.</p>
        <Link to="/top10">
        <p className="  text-[#0077b6]"> <FontAwesomeIcon icon={faArrowLeft} size="2x"/> TOP 10 OBIECTIVE TURISTICE DIN ORAȘ  </p>
        </Link>
        
    </div>
    </div>
    </div>
  );
}

export default HartaInteractiva;
import React, {useEffect, useState, useRef, useCallback} from 'react'

import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import ReactMapGL from 'react-map-gl';

import {MapboxLayer} from '@deck.gl/mapbox';

const INITIAL_VIEW_STATE = {
  longitude: -74.50,
  latitude: 40,
  zoom: 9
};

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFya2thYmllcnNraSIsImEiOiJja2lpa3N2c3QwaXVrMnltbHVzcXZ3dDU2In0.t_Lcd-0hPAJSk75HCJFw0g"

const data = [
  {position: [-74.5, 40], size: 100}
];

const MapBlock = () => {

  const [viewport, setViewport] = useState({
    style: 'mapbox://styles/mapbox/streets-v11',
    width: '100%',
    height: '100%',
    latitude: 50.209,
    longitude: 143.387,
    zoom: 5.91
  });

  return (
    <div className="map">
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={ MAPBOX_TOKEN }
            onViewportChange={nextViewport => setViewport(nextViewport)}
        />
        
    </div>
  );

}

export default MapBlock
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';


const Mapbox = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-71.0579);
  const [lat, setLat] = useState(42.3602);
  const [zoom, setZoom] = useState(17);
  mapboxgl.accessToken = "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw";


  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"h-600-px"}>
      <div className={"absolute w-full h-full"} ref={mapContainerRef} />
    </div>
  );
};

export default Mapbox;
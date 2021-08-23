import React, { useContext, useRef, useEffect, useState} from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as Turf from "@turf/turf";
import { useRouter } from "next/router";
import SessionContext from "pages/sessionContext";
import "components/Maps/mapSidebar.module.css";
import SolarInputs from "components/Forms/SolarInputs"



const Mapbox = ({ coordinates }) => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(coordinates[0]);
  const [lat, setLat] = useState(coordinates[1]);
  const [zoom, setZoom] = useState(18);
  const [area, setArea] = useState(0);

  const router = new useRouter();
  const {geoData,
    setGeoData,
    propertyData,
    setPropertyData,
    solarSavings,
    setSolarSavings} = useContext(SessionContext);

  

  ;
  // Initialize map when component mounts

  mapboxgl.accessToken = "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw"
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
    });

    const defaultMarker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([lng, lat])
      .addTo(map);

    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: "red",
      },
      bbox: [-71.191155981, 42.227925172, -70.986224049, 42.396978995],
      mapboxgl: mapboxgl,
      zoom: zoom,
    });

    
    map.addControl(geocoder, "top-left");

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      map.once("geolocates", () => {
        defaultMarker.remove();
      });
    });

    

    geocoder.on("result", (e) => {
      setGeoData(e.result);
      router.replace({
        pathname: `/results/`,
        query: { lng: e.result.center[0], lat: e.result.center[1] },
      });
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon: true,
        trash: true,
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
    });
    map.addControl(draw);

    map.on("draw.create", updateArea);
    map.on("draw.delete", updateArea);
    map.on("draw.update", updateArea);

    function updateArea(e) {
      const data = draw.getAll();

      if (data.features.length > 0) {
        const area = Turf.area(data);
        // Restrict the area to 2 decimal points.
        const rounded_area = Math.round(area * 100) / 100;
        setArea(rounded_area)
      }
    }

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
 
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.css"
        type="text/css"
      ></link>
      
      <div class="flex flex-col md:flex-row absolute w-full min-h-screen-75 shadow-lg">
        <div class="relative flex w-full md:w-3/4 min-h-screen-75"id='map'/>
        <div className="relative flex min-h-screen-75"><SolarInputs area={area}/></div>
      </div>
      <script src="data/CalcSolarSavings.js"></script>
    </div>
  );
};

export default Mapbox;
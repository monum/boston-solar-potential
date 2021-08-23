import React, { useContext, useEffect, Component } from "react";
import { useRouter } from "next/router";
import SessionContext from "pages/sessionContext.js"
import mapboxgl from "@mapbox/mapbox-gl-geocoder";
import "components/SearchBar/SearchBar.module.css";





export default function SearchBar() {
  //Wait for the component to load before attempting to inject any data

  const token = process.env.MAPBOX_API_KEY;
  const router = new useRouter();
  const sessionContext = useContext(SessionContext);
  const {setGeoData,
    geoData,
    propertyData,
    setPropertyData,
    solarSavings,
    setSolarSavings} = sessionContext;
  

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw";
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: "Enter Your Address",
      bbox: [-71.191155981, 42.227925172, -70.986224049, 42.396978995],
    });

    geocoder.addTo("#geocoder");

    // Add geocoder result to container.
    geocoder.on("result", (e) => {
      
      setGeoData(e.result)
      
      router.push({
        pathname: `/results/`,
        query: { lng: e.result.center[0], lat: e.result.center[1] },
      });
    });

  });

  return (
    <div className="w-full absolute">
      <div
        id="geocoder"
        className=" mt-4 mx-4 flex justify-center"
      ></div>
      <pre id="result"></pre>
    </div>

  );
}


const variables = [
  'ENV_LOCAL_VARIABLE_MAPBOX_KEY',
  'ENV_LOCAL_PVWATTS_KEY'
]

export async function getServerSideProps() {
  const items = {}

  variables.forEach((variable) => {
    if (process.env[variable]) {
      items[variable] = process.env[variable]
    }
  })

  return {
    // Do not pass any sensitive values here as they will
    // be made PUBLICLY available in `pageProps`
    props: { env: items },
    revalidate: 1,
  }
}
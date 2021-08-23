import { createContext, useState } from "react";

const SessionContext = createContext();


export const SessionProvider = ({ children }) => {


    const [geoData, setGeoData] = useState({});
    const [propertyData, setPropertyData] = useState({});
    const [solarSavings, setSolarSavings] = useState({});
    
    const sessionContext = {
        geoData,
        setGeoData,
        propertyData,
        setPropertyData,
        solarSavings,
        setSolarSavings
      };

  return (
    <SessionContext.Provider value={sessionContext}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;

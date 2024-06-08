import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocationContextProps {
  location: any | null;
  country: string | null;
  city: string | null;
  setLocation: React.Dispatch<React.SetStateAction<any | null>>;
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
  setCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<any | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  return (
    <LocationContext.Provider value={{ location, country, city, setLocation, setCountry, setCity }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, useLocation };

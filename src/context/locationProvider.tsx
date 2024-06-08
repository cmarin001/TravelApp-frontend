import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocationContextProps {
  location: any | null;
  setLocation: React.Dispatch<React.SetStateAction<any | null>>;
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
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, useLocation };
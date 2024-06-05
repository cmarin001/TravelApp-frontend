import { useState, useEffect } from "react";
import { IonSpinner, IonText, IonPage } from "@ionic/react";
import { fetchLocations } from "../../../services/locationService";
import { Carousel } from "../../../components/Carousel";

interface LocationListProps {
  locationQuery?: string;
}

function LocationList(props: LocationListProps) {
  const { locationQuery = "New York" } = props;
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations(locationQuery);
        setLocations(data);
      } catch (error) {
        setError("Failed to fetch locations.");
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, [locationQuery]);

  return (
    <IonPage>
      {loading ? (
        <IonSpinner name="crescent" />
      ) : error ? (
        <IonText color="danger">{error}</IonText>
      ) : (
        <Carousel locations={locations}/> 
      )}
    </IonPage>
  );
}

export { LocationList };

import { useState, useEffect } from "react";
import { IonList, IonItem, IonLabel, IonSpinner, IonText } from "@ionic/react";
import { fetchLocations } from "../../services/locationService";

function LocationList() {
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations("New York");
        setLocations(data);
      } catch (error) {
        setError("Failed to fetch locations.");
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, []);

  return (
    <>
      {loading ? (
        <IonSpinner name="crescent" />
      ) : error ? (
        <IonText color="danger">{error}</IonText>
      ) : (
        <IonList>
          {locations.map((location) => (
            <IonItem key={location.place_id}>
              <IonLabel>{location.display_name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
    </>
  );
}

export { LocationList };

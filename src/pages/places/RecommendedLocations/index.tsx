import { useState, useEffect } from "react";
import { IonSpinner, IonText, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import { fetchLocations } from "../../../services/locationService";
import { StyledCard, StyledCardImage, StyledCardLabel } from "./styles";
import { Card } from "../../../components/Card";

interface RecommendedLocationsProps {
  locationQuery?: string;
}

function RecommendedLocations(props: RecommendedLocationsProps) {
  const { locationQuery = "Germany" } = props;
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations(locationQuery);
        setLocations(data);
      } catch (error) {
        setError("Failed to fetch recommended locations.");
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
        <IonGrid>
          <IonRow>
            {locations.map((location) => (
              <IonCol size="6" key={location.place_id}>
                <Card location={location} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      )}
    </IonPage>
  );
}

export { RecommendedLocations };

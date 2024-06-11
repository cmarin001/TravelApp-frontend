import React, { useState, useEffect } from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonText, IonSpinner } from "@ionic/react";
import { Card } from "../../../components/Card";
import { useRemoveIonPageInvisible } from "../../../hooks/useRemoveIonPageInvisible";
import { fetchCountryPlaces } from "../../../services/locationService";
import { LazyImage } from "../../../components/LazyImage";


interface PlacesByCountryProps {
  country: string;
}

const PlacesByCountry: React.FC<PlacesByCountryProps> = ({ country }) => {
  const [places, setPlaces] = useState<{ place_id: string; display_name: string; image_url: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useRemoveIonPageInvisible();

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const placesByCity = await fetchCountryPlaces(country);
        const allPlaces = Object.values(placesByCity).flat();
        setPlaces(allPlaces);
        setLoading(false);
      } catch (error) {
        setError(`Failed to fetch places for country: ${country}.`);
        setLoading(false);
      }
    };

    loadPlaces();
  }, [country]);

  if (loading) {
    return (
      <IonPage>
        <IonContent>
          <IonSpinner name="crescent" />
        </IonContent>
      </IonPage>
    );
  }

  if (error) {
    return (
      <IonPage>
        <IonContent>
          <IonText color="danger">{error}</IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            {places.map((place, index) => (
              <IonCol size="6" key={index}>
                <Card
                  location={{
                    place_id: place.place_id,
                    display_name: place.display_name,
                    image_url: place.image_url,
                    country: country,
                  }}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { PlacesByCountry };

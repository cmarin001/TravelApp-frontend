import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonText,
  IonSpinner,
} from "@ionic/react";
import { Card } from "../../../components/Card";
import { useRemoveIonPageInvisible } from "../../../hooks/useRemoveIonPageInvisible";
import { fetchPlaces } from "../../../services/locationService";


interface CitiesByCountryProps {
  cities: string[];
  country: string;
}

const CitiesByCountry: React.FC<CitiesByCountryProps> = ({
  cities,
  country,
}) => {
  const [citiesWithImages, setCitiesWithImages] = useState<
    { name: string; image_url: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useRemoveIonPageInvisible();

  useEffect(() => {
    const loadCitiesWithImages = async () => {
      try {
        const citiesWithImagesData = await Promise.all(
          cities.map(async (city) => {
            const places = await fetchPlaces(country, city);
            const image_url = places.length > 0 ? places[0].image_url : "";
            return { name: city, image_url };
          })
        );
        setCitiesWithImages(citiesWithImagesData);
        setLoading(false);
      } catch (error) {
        setError(`Failed to fetch images for cities in country: ${country}.`);
        setLoading(false);
      }
    };

    loadCitiesWithImages();
  }, [cities, country]);

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
            {citiesWithImages.map((city, index) => (
              <IonCol size="6" key={index}>
                  <Card
                    location={{
                      place_id: city.name,
                      display_name: city.name,
                      image_url: city.image_url,
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

export { CitiesByCountry };

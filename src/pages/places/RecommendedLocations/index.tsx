import React, { useState, useEffect } from "react";
import { IonSpinner, IonText, IonPage, IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
import { fetchCountries, fetchCities, fetchPlaces } from "../../../services/locationService";
import { Card } from "../../../components/Card";
import { useRemoveIonPageInvisible } from "../../../hooks/useRemoveIonPageInvisible";

interface RecommendedLocationsProps {
  initialCountry?: string;
  initialCity?: string;
}

const RecommendedLocations: React.FC<RecommendedLocationsProps> = ({ initialCountry = "Germany", initialCity = "Berlin" }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);
  const [cities, setCities] = useState<{ [country: string]: string }>({});
  const [cityImages, setCityImages] = useState<{ [country: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError("Failed to fetch countries.");
      }
    };
    loadCountries();
  }, []);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesData: { [country: string]: string } = {};
        const cityImagesData: { [country: string]: string } = {};
        for (const country of countries) {
          const cityData = await fetchCities(country);
          if (cityData.length > 0) {
            citiesData[country] = cityData[0];
            const placesData = await fetchPlaces(country, cityData[0]);
            if (placesData.length > 0) {
              cityImagesData[country] = placesData[0].image_url;
            }
          }
        }
        setCities(citiesData);
        setCityImages(cityImagesData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch cities.");
        setLoading(false);
      }
    };
    if (countries.length > 0) {
      loadCities();
    }
  }, [countries]);

  useRemoveIonPageInvisible(); 
  return (
    <IonPage>
      <IonContent>
        {loading ? (
          <IonSpinner name="crescent" />
        ) : error ? (
          <IonText color="danger">{error}</IonText>
        ) : (
          <IonGrid>
            <IonRow>
              {Object.keys(cities).map((country) => (
                <IonCol size="6" key={country}>
                  <Card
                    location={{
                      place_id: country,
                      display_name: country,
                      image_url: cityImages[country],
                      country: country,
                    }}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export { RecommendedLocations };

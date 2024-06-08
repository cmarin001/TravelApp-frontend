import { useState, useEffect } from "react";
import {
  IonSpinner,
  IonText,
  IonPage,
  IonContent,
} from "@ionic/react";
import {
  fetchCountries,
  fetchCities,
  fetchPlaces,
} from "../../../services/locationService";
import { Carousel } from "../../../components/Carousel";

interface LocationListProps {
  initialCountry?: string;
  initialCity?: string;
}

function LocationList(props: LocationListProps) {
  const { initialCountry = "USA", initialCity = "New York" } = props;
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);
  const [cities, setCities] = useState<{ [country: string]: string }>({});
  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [_, setPlaces] = useState<any[]>([]);
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
      } catch (error) {
        setError("Failed to fetch cities.");
      }
    };
    if (countries.length > 0) {
      loadCities();
    }
  }, [countries]);

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      const loadPlaces = async () => {
        try {
          const data = await fetchPlaces(selectedCountry, selectedCity);
          setPlaces(data);
        } catch (error) {
          setError(`Failed to fetch places for city: ${selectedCity} in country: ${selectedCountry}.`);
        } finally {
          setLoading(false);
        }
      };
      loadPlaces();
    }
  }, [selectedCountry, selectedCity]);

  const handleCountryCityChange = (country: string, city: string) => {
    setSelectedCountry(country);
    setSelectedCity(city);
    setLoading(true);
  };

  return (
    <IonPage>
      <IonContent>
        {loading ? (
          <IonSpinner name="crescent" />
        ) : error ? (
          <IonText color="danger">{error}</IonText>
        ) : (
          <Carousel
            locations={Object.keys(cities).map((country) => ({
              place_id: country,
              display_name: cities[country],
              image_url: cityImages[country],
            }))}
          />
        )}
      </IonContent>
    </IonPage>
  );
}

export { LocationList };

import { useState, useRef, useEffect } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { useHistory, useLocation as useRouterLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  StyledIcon,
  StyledInput,
  StyledItem,
  StyledCenteredCol,
  StyledIonTextSmall,
  TabsContainer,
  TabButton,
  StyledContainerTitle,
  StyledIonTextLarge,
} from "./styles";
import { RecommendedLocations } from "../RecommendedLocations";

import SwiperCore from "swiper";
import { LocationDisplay } from "../../../components/LocationDisplay";
import { fetchCountries, fetchCities } from "../../../services/locationService";
import { useLocation } from "../../../context/locationProvider";
import { HomeProps } from "../../../types/types";

interface LocationState {
  location: {
    place_id: string;
    display_name: string;
    country: string;
    image_url: string;
    rating?: string;
  } | null;
}

const ExploreLocation: React.FC<HomeProps> = (props) => {
  const { user } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("location");
  const history = useHistory();
  const swiperRef = useRef<SwiperCore | null>(null);
  const routerLocation = useRouterLocation<LocationState>();
  const { location } = routerLocation.state || { location: null };

  // State variables for countries and cities
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    loadCountries();
  }, []);

  useEffect(() => {
    if (location && location.country) {
      const loadCities = async () => {
        try {
          const data = await fetchCities(location.country);
          setCities(data);
        } catch (error) {
          console.error(`Failed to fetch cities for country: ${location.country}.`, error);
        }
      };
      loadCities();
    }
  }, [location]);

  const handleSearchChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchQuery(value);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const tabIndex = ["location", "recommended", "hotels", "food", "adventures"].indexOf(tab);
    if (swiperRef.current && tabIndex >= 0) {
      swiperRef.current.slideTo(tabIndex);
    }
  };

  if (!location) {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonText color="danger">No location selected</IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <StyledContainerTitle>
                <StyledIonTextSmall color="medium">
                  <h1>Explore</h1>
                </StyledIonTextSmall>
                <StyledIonTextLarge color="medium">
                  <h1>{location.display_name}</h1>
                </StyledIonTextLarge>
              </StyledContainerTitle>
            </IonCol>
            <StyledCenteredCol>
              <LocationDisplay location={location.display_name} />
            </StyledCenteredCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <StyledItem lines="none">
                <StyledIcon icon={searchOutline} />
                <StyledInput
                  placeholder={`Find a plan`}
                  value={searchQuery}
                  onIonChange={(e: CustomEvent<any>) => handleSearchChange(e as CustomEvent)}
                />
              </StyledItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <TabsContainer>
          <TabButton active={activeTab === "location"} onClick={() => handleTabChange("location")}>
            Location
          </TabButton>
          <TabButton active={activeTab === "recommended"} onClick={() => handleTabChange("recommended")}>
            Recommended
          </TabButton>
          <TabButton active={activeTab === "hotels"} onClick={() => handleTabChange("hotels")}>
            Hotels
          </TabButton>
          <TabButton active={activeTab === "food"} onClick={() => handleTabChange("food")}>
            Food
          </TabButton>
          <TabButton active={activeTab === "adventures"} onClick={() => handleTabChange("adventures")}>
            Adventures
          </TabButton>
        </TabsContainer>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={({ activeIndex }) => {
            const tabs = ["location", "recommended", "hotels", "food", "adventures"];
            setActiveTab(tabs[activeIndex]);
          }}
          initialSlide={0}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <IonGrid>
              <IonRow style={{ height: "54vh" }}>
                <IonCol size="12">
                  <RecommendedLocations initialCountry={location.country} initialCity={location.display_name} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            <IonGrid>
              <IonRow style={{ height: "54vh" }}>
                <IonCol size="12">
                  <RecommendedLocations initialCountry={location.country} initialCity={location.display_name} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export { ExploreLocation };

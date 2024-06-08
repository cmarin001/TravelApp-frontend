import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { HomeProps } from '../../../types/types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  StyledIcon,
  StyledInput,
  StyledItem,
  StyledCenteredCol,
  StyledIonTextSmall,
  TabsContainer,
  TabButton,
} from './styles';
import { LocationList } from '../LocationList';
import { RecommendedLocations } from '../RecommendedLocations';
import { LocationDisplay } from '../../../components/LocationDisplay';



function ExploreLocation(props: HomeProps) {
  const { user } = props;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('location');
  const { locationName } = useParams<{ locationName: string }>();

  const handleSearchChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchQuery(value);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <LocationDisplay location={locationName} />
            </IonCol>
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
          <TabButton active={activeTab === 'location'} onClick={() => handleTabChange('location')}>
            Location
          </TabButton>
          <TabButton active={activeTab === 'recommended'} onClick={() => handleTabChange('recommended')}>
            Recommended
          </TabButton>
          <TabButton active={activeTab === 'hotels'} onClick={() => handleTabChange('hotels')}>
            Hotels
          </TabButton>
          <TabButton active={activeTab === 'food'} onClick={() => handleTabChange('food')}>
            Food
          </TabButton>
          <TabButton active={activeTab === 'adventures'} onClick={() => handleTabChange('adventures')}>
            Adventures
          </TabButton>
        </TabsContainer>

        <Swiper
          onSlideChange={({ activeIndex }) => {
            const tabs = ['location', 'recommended', 'hotels', 'food', 'adventures'];
            setActiveTab(tabs[activeIndex]);
          }}
          initialSlide={0}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem lines="none">
                    <IonLabel>Popular</IonLabel>
                  </IonItem>
                </IonCol>
                <StyledCenteredCol>
                  <StyledIonTextSmall color="medium">
                    <h5>
                      <Link to="/forgotPassword">See all</Link>
                    </h5>
                  </StyledIonTextSmall>
                </StyledCenteredCol>
              </IonRow>
              <IonRow style={{ height: '30vh' }}>
                <IonCol size="12">
                  <LocationList locationQuery={searchQuery || locationName} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem lines="none">
                    <IonLabel>Recommended</IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow style={{ height: '30vh' }}>
                <IonCol size="12">
                  <RecommendedLocations locationQuery={locationName} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
}

export { ExploreLocation };

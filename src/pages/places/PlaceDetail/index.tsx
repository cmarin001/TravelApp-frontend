import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonText,
  IonSpinner,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { Card } from "../../../components/Card";
import { useRemoveIonPageInvisible } from "../../../hooks/useRemoveIonPageInvisible";
import { fetchCountryPlaces } from "../../../services/locationService";
import { LazyImage } from "../../../components/LazyImage";

interface PlaceDetailProps {
  country: string;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ country }) => {
  const [places, setPlaces] = useState<
    { place_id: string; display_name: string; image_url: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useRemoveIonPageInvisible();

  // useEffect(() => {
  //   const loadPlaces = async () => {
  //     try {
  //       const placesByCity = await fetchCountryPlaces(country);
  //       const allPlaces = Object.values(placesByCity).flat();
  //       setPlaces(allPlaces);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(`Failed to fetch places for country: ${country}.`);
  //       setLoading(false);
  //     }
  //   };

  //   loadPlaces();
  // }, [country]);

  // if (loading) {
  //   return (
  //     <IonPage>
  //       <IonContent>
  //         <IonSpinner name="crescent" />
  //       </IonContent>
  //     </IonPage>
  //   );
  // }

  // if (error) {
  //   return (
  //     <IonPage>
  //       <IonContent>
  //         <IonText color="danger">{error}</IonText>
  //       </IonContent>
  //     </IonPage>
  //   );
  // }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>LocationName</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>More Rooms</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>Rating</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>Read more</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>Facilities</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>Price</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>
                  <IonButton>Book Now</IonButton>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { PlaceDetail };

import { star, heart } from "ionicons/icons";
import {
  StyledLocationCard,
  StyledIonImg,
  StyledRating,
  StyledDetails,
  StyledFavorite,
} from "./styles";
import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
const API_URL = import.meta.env.VITE_API_URL;

function Card(props: any) {
  const { location } = props;
  const simplifyLocationName = (name: string) => {
    const parts = name.split(",");
    if (parts.length >= 3) {
      return `${parts[0]}, ${parts[2].trim().split(" ")[0]}`;
    }
    return name;
  };

  return (
    <StyledLocationCard>
      <StyledIonImg
        src={API_URL + location.image_url || "https://via.placeholder.com/150"}
        alt={location.display_name}
      />
      <IonGrid>
        <IonRow>
          <IonCol>
            <StyledDetails>
              <p>{simplifyLocationName(location.display_name)}</p>
            </StyledDetails>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <StyledDetails>
              <StyledRating>
                <IonIcon icon={star} />
              </StyledRating>

              <span>{location.rating || "4.1"}</span>
            </StyledDetails>
          </IonCol>
          <IonCol>
            <StyledFavorite>
              <IonIcon icon={heart} />
            </StyledFavorite>
          </IonCol>
        </IonRow>
      </IonGrid>
    </StyledLocationCard>
  );
}

export { Card };

import { useHistory } from "react-router-dom";
import { star, heart } from "ionicons/icons";
import {
  StyledLocationCard,
  StyledRating,
  StyledDetails,
  StyledFavorite,
  StyledGrid,
} from "./styles";
import { IonCol, IonIcon, IonRow } from "@ionic/react";
import { useLocation } from "../../context/locationProvider";

const API_URL = import.meta.env.VITE_API_URL;

function Card(props: any) {
  const { location } = props;
  const { setLocation, setCountry, setCity } = useLocation();
  const history = useHistory();

  const simplifyLocationName = (name: string) => {
    const parts = name.split(",");
    if (parts.length >= 3) {
      return `${parts[0]}, ${parts[2].trim().split(" ")[0]}`;
    }
    return name;
  };

  const handleClick = () => {
    console.log("Card clicked", location);
    setLocation(location);
    setCountry(location.country);
    setCity(location.display_name);
    history.push({
      pathname: `/explore/${location.place_id}`,
      state: { location },
    });
  };

  return (
    <div onClick={handleClick}>
      <StyledLocationCard $backgroundurl={`${API_URL}${location.image_url}`}>
        <StyledGrid>
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
        </StyledGrid>
      </StyledLocationCard>
    </div>
  );
}

export { Card };

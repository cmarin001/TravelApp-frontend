import React from "react";
import { useHistory } from "react-router-dom";
import { star, heart } from "ionicons/icons";
import {
  StyledLocationCardLink,
  StyledRating,
  StyledDetails,
  StyledFavorite,
  StyledGrid,
  StyledCardLinkContainer,
} from "./styles";
import { IonCol, IonIcon, IonRow, IonCard } from "@ionic/react";
import { useLocation } from "../../context/locationProvider";

const API_URL = import.meta.env.VITE_API_URL;

interface CardLinkProps {
  location: {
    place_id: string;
    display_name: string;
    country: string;
    image_url: string;
    rating?: string;
  };
}

const CardLink: React.FC<CardLinkProps> = ({ location }) => {
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
    setLocation(location);
    setCountry(location.country);
    setCity(location.display_name);
    history.push({
      pathname: `/placeDetail/${location.place_id}`,
      state: { location },
    });
  };

  return (
    <IonCard onClick={handleClick} >
      <StyledCardLinkContainer>
        <StyledLocationCardLink $backgroundurl={`${API_URL}${location.image_url}`}>
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
        </StyledLocationCardLink>
      </StyledCardLinkContainer>
    </IonCard>
  );
};

export { CardLink };

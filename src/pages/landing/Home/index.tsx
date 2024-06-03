import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import ExploreContainer from "../../../components/ExploreContainer";
import "./Tab1.css";
import { User } from "../../../components/User";
import { StyledIcon, StyledInput, StyledItem } from "../../logIn/LogIn/styles";
import { searchOutline } from "ionicons/icons";
import { HomeProps } from "../../../types/types";
import { LocationList } from "../../../components/LocationList";


function Home(props: HomeProps) {
  const  { user } = props;
  return (
    <IonPage>
      <IonContent fullscreen>
        <User name={user?.displayName ?? "Guest"} />
        <StyledItem lines="none">
          <StyledIcon icon={searchOutline} />
          <StyledInput placeholder="Search destinations..." />
        </StyledItem>
        <LocationList />
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
}

export { Home };

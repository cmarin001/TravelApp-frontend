import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../../components/ExploreContainer";
import "./Tab1.css";
import { User } from "../../../components/User";
import { StyledIcon, StyledInput, StyledItem } from "../../logIn/LogIn/styles";
import { searchOutline } from "ionicons/icons";
import { HomeProps } from "../../../types/types";

function Home(props: HomeProps) {
  const { user } = props;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <User name={user?.displayName ?? "Guest"} />
          <StyledItem lines="none">
            <StyledIcon icon={searchOutline} />
            <StyledInput placeholder="Search destinations..." />
          </StyledItem>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
}

export { Home };

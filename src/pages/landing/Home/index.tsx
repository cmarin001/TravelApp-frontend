import { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonItem,
  IonLabel,
  IonCardContent,
} from "@ionic/react";
import { User } from "../../../components/User";
import { searchOutline } from "ionicons/icons";
import { HomeProps } from "../../../types/types";

import { Link } from "react-router-dom";
import {
  StyledIcon,
  StyledInput,
  StyledItem,
  StyledCenteredCol,
  StyledIonTextSmall,
} from "./styles";
import { LocationList } from "../../places/LocationList";
import { RecommendedLocations } from "../../places/RecommendedLocations";

function Home(props: HomeProps) {
  const { user } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchQuery(value);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <User name={user?.displayName ?? "Guest"} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <StyledItem lines="none">
                <StyledIcon icon={searchOutline} />
                <StyledInput
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onIonChange={(e: CustomEvent<any>) =>
                    handleSearchChange(e as CustomEvent)
                  }
                />
              </StyledItem>
            </IonCol>
          </IonRow>
          {/* <IonGrid>
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
          <IonRow style={{ height: "31vh" }}>
            <IonCol size="12">
              <LocationList />
            </IonCol>
          </IonRow>
        </IonGrid> */}
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel>Recommended</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow style={{ height: "46vh" }}>
            <IonCol size="12">
              <RecommendedLocations />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export { Home };

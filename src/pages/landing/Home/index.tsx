import React, { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { User } from "../../../components/User";
import { HomeProps } from "../../../types/types";
import {
  StyledIcon,
  StyledInput,
  StyledItem,
  StyledIonTextSmall,
} from "./styles";
import { RecommendedLocations } from "../../places/RecommendedLocations";
import { useRemoveIonPageInvisible } from "../../../hooks/useRemoveIonPageInvisible";

const Home: React.FC<HomeProps> = (props) => {
  const { user } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchQuery(value);
  };

  useRemoveIonPageInvisible(); 
  
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
};

export { Home };

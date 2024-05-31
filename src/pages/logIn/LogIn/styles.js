import styled from "styled-components";
import {
  IonItem,
  IonCardContent,
  IonText,
  IonButton,
  IonInput,
  IonIcon,
  IonCol,
} from "@ionic/react";

const StyledCustomCardContent = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: 0;
`;

const StyledContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #706b6b;
  font-weight: 600;
  padding: 0 33px;
`;

const StyledIonTextLarge = styled(IonText)`
  color: medium;
  text-align: center;
  margin-bottom: 16px;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }
`;

const StyledIonTextSmall = styled(IonText)`
  color: medium;
  text-align: center;
  margin-bottom: 16px;

  h1 {
    font-size: 24px;
  }
`;

const StyledDivider = styled.div`
  border-radius: 4px;
  background-color: rgba(189, 187, 187, 1);
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
`;

const StyledIndividualSocialContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #cdeaff;
  display: flex;
  padding: 12px 20px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const CustomButton = styled(IonButton)`
  --background: #3880ff;
  --border-radius: 8px;
  width: 100%;
`;

const StyledItem = styled(IonItem)`
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  --inner-padding-end: 0;
  --inner-padding-start: 0;
  --background: #ddecfe;
`;

const StyledInput = styled(IonInput)`
  color: #000;
  ::placeholder {
    color: #000;
  }
`;

const StyledIcon = styled(IonIcon)`
  margin-right: 16px;
`;

const CenteredCol = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Img3,
  Img4,
  Img5,
  StyledCustomCardContent,
  StyledContainerTitle,
  StyledIonTextLarge,
  StyledIonTextSmall,
  CustomButton,
  StyledInput,
  StyledItem,
  StyledIcon,
  CenteredCol,
  StyledIndividualSocialContainer,
  StyledDivider,
};

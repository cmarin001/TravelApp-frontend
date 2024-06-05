import styled from "styled-components";
import {
  IonButton,
  IonCardContent,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonText,
} from "@ionic/react";

const StyledCustomCardContent = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  background-color: var(--background-color);
  color: var(--text-color);

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 32px;
    justify-content: space-around;
  }
`;

const StyledContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);
  font-weight: 600;
  padding: 0 33px;
  gap: 1rem;
`;

const StyledDivider = styled.div`
  border-radius: 4px;
  background-color: var(--divider-color);
  margin-top: 10px;
  margin-bottom: 10px;
  height: 1px;
`;

const StyledIcon = styled(IonIcon)`
  margin-right: 16px;
  color: var(--text-color);
`;

const StyledIndividualSocialContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: var(--secondary-color);
  display: flex;
  padding: 12px 20px;
`;

const StyledInput = styled(IonInput)`
  color: var(--text-color);
  ::placeholder {
    color: var(--text-color);
  }
`;

const StyledItem = styled(IonItem)`
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  --inner-padding-end: 0;
  --inner-padding-start: 0;
  --background: var(--item-background-color);
  color: var(--text-color);
`;

const StyledIonTextLarge = styled(IonText)`
  color: var(--text-color);
  text-align: center;
  margin-bottom: 16px;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }
`;

const StyledIonTextSmall = styled(IonText)`
  color: var(--text-color);
  text-align: center;
  margin-bottom: 16px;

  h1 {
    font-size: 24px;
  }
`;

const StyledCustomButton = styled(IonButton)`
  --background: var(--primary-color);
  --border-radius: 8px;
  width: 100%;
  color: var(--text-color);
`;

const StyledCenteredCol = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const StyledImg4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const StyledImg5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

export {
  StyledCenteredCol,
  StyledContainerTitle,
  StyledCustomButton,
  StyledCustomCardContent,
  StyledDivider,
  StyledIcon,
  StyledImg3,
  StyledImg4,
  StyledImg5,
  StyledIndividualSocialContainer,
  StyledInput,
  StyledIonTextLarge,
  StyledIonTextSmall,
  StyledItem,
};

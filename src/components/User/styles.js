import styled from "styled-components";
import {
  IonText,
} from "@ionic/react";

const StyledContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #706b6b;
  font-weight: 600;
  padding: 0 33px;
  gap: 1rem;
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

export { StyledContainerTitle, StyledIonTextLarge, StyledIonTextSmall };
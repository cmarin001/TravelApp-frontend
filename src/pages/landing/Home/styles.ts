import styled from "styled-components";
import { IonIcon, IonInput, IonItem, IonRow, IonText, IonCol } from "@ionic/react";

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
`;

const StyledIcon = styled(IonIcon)`
  margin-right: 16px;
  color: var(--text-color);
`;

const StyledIonTextSmall = styled(IonText)`
  text-align: center;
  margin-bottom: 16px;
  color: var(--text-color);

  h5 {
    font-size: 16px;
  }
`;

const StyledCenteredCol = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledInput, StyledItem, StyledIcon, StyledIonTextSmall, StyledCenteredCol };

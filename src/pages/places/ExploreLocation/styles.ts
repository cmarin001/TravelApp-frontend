import styled from "styled-components";
import { IonIcon, IonInput, IonItem, IonRow, IonText, IonCol } from "@ionic/react";

 const StyledInput = styled(IonInput)`
  color: #000;
  ::placeholder {
    color: #000;
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
  --background: #ddecfe;
`;

 const StyledIcon = styled(IonIcon)`
  margin-right: 16px;
`;

 const StyledIonTextSmall = styled(IonText)`
  text-align: center;
  margin-bottom: 16px;

  h5 {
    font-size: 16px;
  }
`;

 const StyledCenteredCol = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

 const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

 const TabButton = styled.div<{ active: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${(props: { active: any; }) => (props.active ? '#e0f7ff' : 'transparent')};
  color: ${(props: { active: any; }) => (props.active ? '#007aff' : '#666')};
  font-weight: ${(props: { active: any; }) => (props.active ? 'bold' : 'normal')};
`;

export { StyledInput, StyledItem, StyledIcon, StyledIonTextSmall, StyledCenteredCol, TabsContainer , TabButton}
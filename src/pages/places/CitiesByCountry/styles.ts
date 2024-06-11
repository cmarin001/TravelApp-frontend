import styled from "styled-components";
import { IonImg, IonLabel } from "@ionic/react";

const StyledCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 16px 0;
`;

const StyledCardImage = styled(IonImg)`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const StyledCardLabel = styled(IonLabel)`
  padding: 8px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
`;


export { StyledCard, StyledCardImage, StyledCardLabel };

import styled from "styled-components";
import { IonButton, IonCard, IonCardContent, IonText } from "@ionic/react";

const StyledCustomButton = styled(IonButton)`
  --background: #3880ff;
  --border-radius: 8px;
  padding: 0.5rem 2rem;
`;

const StyledCustomCard = styled(IonCard)`
  position: relative;
  background: url("https://cdn.builder.io/api/v1/image/assets/TEMP/c474b2120dd126477f5d78505bc1e3e6024a874eb1aebc65f724e213d69fc849?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1200")
    no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: 0;
`;

const StyledCustomCardContent = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
`;

const StyledCustomImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledGridContainer = styled(IonButton)`
  display: grid;
`;

const StyledSubtitle = styled(IonText)`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledTitle = styled(IonText)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export {
  StyledColumnContainer,
  StyledCustomButton,
  StyledCustomCard,
  StyledCustomCardContent,
  StyledCustomImg,
  StyledGridContainer,
  StyledSubtitle,
  StyledTitle,
};

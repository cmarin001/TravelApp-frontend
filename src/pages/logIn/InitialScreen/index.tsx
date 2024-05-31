import { useHistory } from "react-router-dom";
import { IonPage, IonContent } from "@ionic/react";
import {
  CustomCard,
  Title,
  Subtitle,
  CustomButton,
  StyledColumnContainer,
  StyledCustomCardContent,
} from "./styles";

function InitialScreen() {
  const history = useHistory();

  const handleGetStartNow = () => {
    history.push("/logIn");
  };

  return (
    <CustomCard>
      <StyledCustomCardContent>
        <Title>LET’S ENJOY THE BEAUTIFUL WORLD</Title>
        <StyledColumnContainer>
          <Subtitle>
            Enjoy the breathtaking view of nature, relax and cherish your dreams
            to the fullest
          </Subtitle>
          <CustomButton onClick={handleGetStartNow}>GET START NOW</CustomButton>
        </StyledColumnContainer>
      </StyledCustomCardContent>
    </CustomCard>
  );
}

export { InitialScreen };

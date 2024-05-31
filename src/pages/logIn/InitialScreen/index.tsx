import { useHistory } from "react-router-dom";
import {
  StyledColumnContainer,
  StyledCustomButton,
  StyledCustomCard,
  StyledCustomCardContent,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

function InitialScreen() {
  const history = useHistory();

  const handleGetStartNow = () => {
    history.push("/logIn");
  };

  return (
    <StyledCustomCard>
      <StyledCustomCardContent>
        <StyledTitle>LET’S ENJOY THE BEAUTIFUL WORLD</StyledTitle>
        <StyledColumnContainer>
          <StyledSubtitle>
            Enjoy the breathtaking view of nature, relax and cherish your dreams
            to the fullest
          </StyledSubtitle>
          <StyledCustomButton onClick={handleGetStartNow}>
            GET START NOW
          </StyledCustomButton>
        </StyledColumnContainer>
      </StyledCustomCardContent>
    </StyledCustomCard>
  );
}

export { InitialScreen };

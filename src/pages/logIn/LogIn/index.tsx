import {
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
} from "./styles.js";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { mailOutline, lockOpenOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
function LogIn() {
  const history = useHistory();
  const handleGetStartNow = () => {
    history.push("/logIn");
  };
  return (
    <StyledCustomCardContent>
      <StyledContainerTitle>
        <StyledIonTextLarge color="medium">
          <h1>WELCOME</h1>
        </StyledIonTextLarge>
        <StyledIonTextSmall color="medium">
          <h1>Log In to your account</h1>
        </StyledIonTextSmall>
      </StyledContainerTitle>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol>
            <StyledItem lines="none">
              <StyledIcon icon={mailOutline} />
              <StyledInput placeholder="Email" />
            </StyledItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <StyledItem lines="none">
              <StyledIcon icon={lockOpenOutline} />
              <StyledInput placeholder="Password" />
            </StyledItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <CenteredCol>
            <CustomButton onClick={handleGetStartNow}>Log In</CustomButton>
          </CenteredCol>
        </IonRow>
      </IonGrid>

      <StyledDivider />

      <IonGrid>
        <StyledIonTextSmall color="medium">
          <h5>Or Log in with</h5>
        </StyledIonTextSmall>
        <IonRow>
          <IonCol>
            <StyledIndividualSocialContainer>
              <Img3
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/515b6f737a5f70c05248c14f718740f992f1bce048724acb595b4d10d3101644?apiKey=44c5498a738c4755b9e86254cb967fb1&"
              />
            </StyledIndividualSocialContainer>
          </IonCol>
          <IonCol>
            <StyledIndividualSocialContainer>
              <Img4
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fec561fb6fa1363ae6353a68ee8696080670d422a69af96b6897a458d0d8f7d?apiKey=44c5498a738c4755b9e86254cb967fb1&"
              />
            </StyledIndividualSocialContainer>
          </IonCol>
          <IonCol>
            <StyledIndividualSocialContainer>
              <Img5
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83940b233b11c41e02b7332627755848bf14cb750e8447c03b011f4db00d5ff8?apiKey=44c5498a738c4755b9e86254cb967fb1&"
              />
            </StyledIndividualSocialContainer>
          </IonCol>
        </IonRow>
      </IonGrid>
    </StyledCustomCardContent>
  );
}

export { LogIn };

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
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
} from "./styles.js";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCheckbox,
  IonLabel,
  IonItem,
  IonText,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { lockOpenOutline, mailOutline, eyeOffOutline, eyeOutline } from "ionicons/icons";
import {
  googleProvider,
  facebookProvider,
  twitterProvider,
  auth,
} from "../../../firebase.js";
import {
  AuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendEmailVerification,
} from "firebase/auth";
import { LogInProps } from "../../../types/types.js";
import { ErrorPage } from "../../error/LoginError/index.js";

function SignUp(props: LogInProps) {
  const { setUser } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const persistenceType = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    setPersistence(auth, persistenceType)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password);
      })
      .then((result) => {
        console.log(result);
        const user = result.user;
        sendEmailVerification(user)
          .then(() => {
            console.log("Verification email sent");
            setUser(user);
            history.push("/verify-email");
          })
          .catch((error) => {
            console.error("Error sending verification email", error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.error("Error creating account", error);
        setError(error.message);
      });
  };

  const handleSocialLogin = (provider: AuthProvider) => {
    const persistenceType = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    setPersistence(auth, persistenceType)
      .then(() => {
        return signInWithPopup(auth, provider);
      })
      .then((result) => {
        console.log(result);
        const user = result.user;
        setUser(user);
        history.push("/landing");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleClearError = () => {
    setError(null);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowRepeatPassword = () => {
    setShowRepeatPassword((prevShowRepeatPassword) => !prevShowRepeatPassword);
  };

  if (error) {
    return <ErrorPage message={error} onGoBack={handleClearError} />;
  }

  return (
    <StyledCustomCardContent>
      <StyledContainerTitle>
        <StyledIonTextLarge color="medium">
          <h1>WELCOME</h1>
        </StyledIonTextLarge>
        <StyledIonTextSmall color="medium">
          <h1>Create your account</h1>
        </StyledIonTextSmall>
      </StyledContainerTitle>
      <IonGrid>
        <IonRow>
          <IonCol>
            <StyledItem lines="none">
              <StyledIcon icon={mailOutline} />
              <IonInput
                placeholder="Email"
                value={email}
                onIonChange={(e) => {
                  setEmail(e.detail.value as string);
                  if (emailError) setEmailError(null);
                }}
              />
            </StyledItem>
            {emailError && (
              <IonText color="danger">
                <p>{emailError}</p>
              </IonText>
            )}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <StyledItem lines="none">
              <StyledIcon icon={lockOpenOutline} />
              <IonInput
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onIonChange={(e) => {
                  setPassword(e.detail.value as string);
                  if (passwordError) setPasswordError(null);
                }}
              />
              <IonIcon
                icon={showPassword ? eyeOffOutline : eyeOutline}
                onClick={toggleShowPassword}
                style={{ cursor: 'pointer' }}
              />
            </StyledItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <StyledItem lines="none">
              <StyledIcon icon={lockOpenOutline} />
              <IonInput
                placeholder="Repeat Password"
                type={showRepeatPassword ? "text" : "password"}
                value={repeatPassword}
                onIonChange={(e) => {
                  setRepeatPassword(e.detail.value as string);
                  if (passwordError) setPasswordError(null);
                }}
              />
              <IonIcon
                icon={showRepeatPassword ? eyeOffOutline : eyeOutline}
                onClick={toggleShowRepeatPassword}
                style={{ cursor: 'pointer' }}
              />
            </StyledItem>
            {passwordError && (
              <IonText color="danger">
                <p>{passwordError}</p>
              </IonText>
            )}
          </IonCol>
        </IonRow>
        <IonRow>
          <StyledCenteredCol>
            <StyledCustomButton onClick={handleSignUp}>
              Sign Up
            </StyledCustomButton>
          </StyledCenteredCol>
        </IonRow>
        <IonRow>
          <StyledCenteredCol>
            <StyledIonTextSmall color="medium">
              <h5>
                Already have an account? <Link to="/login"> Log In</Link>
              </h5>
            </StyledIonTextSmall>
          </StyledCenteredCol>
        </IonRow>
      </IonGrid>
      <StyledDivider />

      <IonGrid>
        <StyledIonTextSmall color="medium">
          <h5>Or Sign Up with</h5>
        </StyledIonTextSmall>
        <IonRow>
          <IonCol>
            <StyledIndividualSocialContainer>
              <StyledImg3
                loading="lazy"
                srcSet="/google-logo.svg"
                onClick={() => handleSocialLogin(googleProvider)}
              />
            </StyledIndividualSocialContainer>
          </IonCol>
          <IonCol>
            <StyledIndividualSocialContainer>
              <StyledImg4
                loading="lazy"
                srcSet="/facebook-logo.svg"
                onClick={() => handleSocialLogin(facebookProvider)}
              />
            </StyledIndividualSocialContainer>
          </IonCol>
          <IonCol>
            <StyledIndividualSocialContainer>
              <StyledImg5
                loading="lazy"
                srcSet="/twitterx-logo.svg"
                onClick={() => handleSocialLogin(twitterProvider)}
              />
            </StyledIndividualSocialContainer>
          </IonCol>
        </IonRow>
        <StyledIonTextSmall color="medium">
          <h5>
            By signin up to create an account I accept Company's 
             <Link to="/login">Terms of Use and Privacy Policy</Link>
          </h5>
        </StyledIonTextSmall>
      </IonGrid>
    </StyledCustomCardContent>
  );
}

export { SignUp };

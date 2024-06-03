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
import {
  lockOpenOutline,
  mailOutline,
  eyeOffOutline,
  eyeOutline,
} from "ionicons/icons";
import {
  googleProvider,
  facebookProvider,
  twitterProvider,
  auth,
} from "../../../firebase";
import {
  AuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { LogInProps } from "../../../types/types.js";
import { ErrorPage } from "../../error/LoginError/index.js";

function LogIn(props: LogInProps) {
  const { setUser } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setEmailError(null);
    setPasswordError(null);

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      return;
    }

    const persistenceType = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    setPersistence(auth, persistenceType)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          setUser(user);
          history.push("/landing");
        } else {
          setError("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        console.error("Error signing in with email and password", error);
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
        const user = result.user;
        if (user.emailVerified) {
          setUser(user);
          history.push("/landing");
        } else {
          setError("Please verify your email before logging in.");
        }
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
          <h1>Log In to your account</h1>
        </StyledIonTextSmall>
      </StyledContainerTitle>
      <form onSubmit={handleSubmit}>
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
                  style={{ cursor: "pointer" }}
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
            <IonCol>
              <IonItem lines="none">
                <IonCheckbox
                  checked={rememberMe}
                  onIonChange={(e) => setRememberMe(e.detail.checked)}
                />
                <IonLabel>Remember Me</IonLabel>
              </IonItem>
            </IonCol>
            <StyledCenteredCol>
              <StyledIonTextSmall color="medium">
                <h5>
                  <Link to="/forgotPassword">Forgot Password? </Link>
                </h5>
              </StyledIonTextSmall>
            </StyledCenteredCol>
          </IonRow>
        </IonGrid>
        <StyledCenteredCol>
          <StyledCustomButton type="submit">Log In</StyledCustomButton>
        </StyledCenteredCol>
      </form>
      <StyledDivider />
      <IonGrid>
        <StyledIonTextSmall color="medium">
          <h5>Or Log in with</h5>
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
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </h5>
        </StyledIonTextSmall>
      </IonGrid>
    </StyledCustomCardContent>
  );
}

export { LogIn };

import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

function VerifyEmail () {
  const history = useHistory();

  const handleGoToLogin = () => {
    history.push("/login");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Verify Your Email</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Check your email for a verification link.</h2>
          <p>
            A verification link has been sent to your email address. Please check your inbox and click the link to verify your email.
          </p>
        </IonText>
        <IonButton expand="block" onClick={handleGoToLogin}>
          Go to Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export { VerifyEmail };

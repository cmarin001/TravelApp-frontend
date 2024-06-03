import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface ErrorPageProps {
  message: string;
  onGoBack: () => void;
}

function ErrorPage(props: ErrorPageProps) {
  const { message, onGoBack } = props;
  const history = useHistory();

  const handleGoBack = () => {
    onGoBack();
    history.push("/login");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Error</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="danger">
          <h2>An error occurred</h2>
          <p>{message}</p>
        </IonText>
        <IonButton onClick={handleGoBack} expand="block" color="primary">
          Go Back
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export { ErrorPage };

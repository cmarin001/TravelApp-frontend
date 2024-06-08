import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { InitialScreen } from "./pages/logIn/InitialScreen";
import { LogIn } from "./pages/logIn/LogIn";
import { Main } from "./pages/landing/Main";
import { SignUp } from "./pages/logIn/SignUp";
import { VerifyEmail } from "./pages/logIn/VerificationStatus";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

/* Global styles */
import "./theme/global.css";
import { LocationProvider } from "./context/locationProvider";
import { Home } from "./pages/landing/Home";
import { ExploreLocation } from "./pages/places/ExploreLocation";

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <IonApp>
      <IonReactRouter>
        <LocationProvider>
          <IonRouterOutlet>
            <Route exact path="/initial" component={InitialScreen} />
            <Route exact path="/logIn">
              <LogIn setUser={setUser} />
            </Route>
            <Route exact path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route exact path="/verify-email" component={VerifyEmail} />
            <Route exact path="/landing" component={Main} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/explore" component={ExploreLocation} />
            {user ? (
              <Redirect exact from="/" to="/landing" />
            ) : (
              <Redirect exact from="/" to="/initial" />
            )}
          </IonRouterOutlet>
        </LocationProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

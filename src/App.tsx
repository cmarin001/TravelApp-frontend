import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { InitialScreen } from "./pages/logIn/InitialScreen";
import { LogIn } from "./pages/logIn/LogIn";
import { Main } from "./pages/landing/Main";
import { SignUp } from "./pages/logIn/SignUp";
import { VerifyEmail } from "./pages/logIn/VerificationStatus";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { LocationProvider } from "./context/locationProvider";
import { ExploreLocation } from "./pages/places/ExploreLocation";

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

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        history.push("/landing");
      }
    });

    return () => unsubscribe();
  }, [auth, history]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <LocationProvider>
          <IonRouterOutlet>
            <Switch>
              <Route path="/initial" component={InitialScreen} exact />
              <Route path="/logIn">
                <LogIn setUser={setUser} />
              </Route>
              <Route path="/signup">
                <SignUp setUser={setUser} />
              </Route>
              <Route path="/verify-email" component={VerifyEmail} exact />
              <Route path="/landing">
                <Main setUser={setUser} />
              </Route>
              <Route path="/explore/:locationName" component={ExploreLocation} />
              <Route exact path="/">
                {user ? <Redirect to="/landing" /> : <Redirect to="/initial" />}
              </Route>
              <Route path="*">
                {user ? <Redirect to="/landing" /> : <Redirect to="/initial" />}
              </Route>
            </Switch>
          </IonRouterOutlet>
        </LocationProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

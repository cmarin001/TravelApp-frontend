import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  personOutline,
  heartOutline,
  ticketOutline,
} from "ionicons/icons";
import { Home } from "../Home";
import Tab2 from "../User/Tab2";
import Tab3 from "../Favorites/Tab3";
import Tab4 from "../Bookings/Tab4";
import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import { LogIn } from "../../logIn/LogIn";
import { useTokenValidation } from "../../../auth/auth";
import { LogInProps } from "../../../types/types";

function Main(props: LogInProps)  { 
  const { setUser } = props;
  const [user, setUserState] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        setUser(user);
      } else {
        setUserState(null);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, setUser]);

  useTokenValidation();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LogIn setUser={setUser} />
            </Route>
            <Route exact path="/home">
              <Home user={user} />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <Tab4 />
            </Route>
            <Route exact path="/landing">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={homeOutline} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={personOutline} />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={heartOutline} />
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={ticketOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export { Main };

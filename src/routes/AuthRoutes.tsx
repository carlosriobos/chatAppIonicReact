import { Route } from "react-router";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router"
import { useAuth } from "../hooks";
import { Channels, CreateChannel, Channel } from "../pages";

export function AuthRoutes() {
  const { userId, username } = useAuth();
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Channels />
        </Route>

        <Route exact path="/create-channel">
          <CreateChannel />
        </Route>

        <Route exact path="/channel/:id">
          <Channel />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

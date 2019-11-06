import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { AuthUserContext, useAuthentication } from "../UserSession";
import * as ROUTES from "../../constants/routes";

import LoadingPage from "../Pages/Loading";

const LandingPage = React.lazy(() => import("../Pages/Landing"));
const SessionPage = React.lazy(() => import("../Pages/Session"));
const HomePage = React.lazy(() => import("../Pages/Home"));

const App = () => {
  const authState = useAuthentication();

  return (
    <AuthUserContext.Provider value={authState.user}>
      <Router basename="/">
        <React.Suspense fallback={<LoadingPage />}>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.SESSION} component={SessionPage} />
        </React.Suspense>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default App;

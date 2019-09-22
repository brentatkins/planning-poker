import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { AuthUserContext, useAuthentication } from "../UserSession";
import LandingPage from "../Pages/Landing";
import SessionPage from "../Pages/Session";
import HomePage from "../Pages/Home";
import * as ROUTES from "../../constants/routes";

const App = () => {
  const authState = useAuthentication();

  return (
    <AuthUserContext.Provider value={authState.user}>
      <Router basename="/">
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SESSION} component={SessionPage} />
      </Router>
    </AuthUserContext.Provider>
  );
};

export default App;

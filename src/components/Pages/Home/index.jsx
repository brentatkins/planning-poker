import React from "react";

import { useAuthorisation, authRules } from "../../UserSession";
import SessionList from "../../SessionList";
import Page from "../../Page";
import * as ROUTES from "../../../constants/routes";

const Home = ({ history }) => {
  useAuthorisation(authRules.userIsSignedIn, history);

  function navigateToSession(id) {
    history.push(ROUTES.buildSessionUrl(id));
  }

  return (
    <Page title="Sessions">
      <SessionList onNavigateToSession={navigateToSession} />
    </Page>
  );
};

export default Home;

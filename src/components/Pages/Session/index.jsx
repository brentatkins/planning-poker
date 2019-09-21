import React from "react";
import { Heading } from "grommet";

import Page from "../../Page";
import { useAuthorisation, authRules } from "../../UserSession";

const Session = ({ history, match }) => {
  useAuthorisation(authRules.userIsSignedIn, history);

  return (
    <Page title="Session Details">
      <Heading>Show session details for {match.params.id}</Heading>
    </Page>
  );
};

export default Session;

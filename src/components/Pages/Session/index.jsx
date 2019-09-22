import React from "react";
import { Box } from "grommet";

import Page from "../../Page";
import { useAuthorisation, authRules } from "../../UserSession";
import { useFirebaseDoc } from "../../Firebase";
import SessionHeader from "../../SessionHeader";
import SessionVote from "../../SessionVote";
import SessionResults from "../../SessionResults";

const Session = ({ history, match }) => {
  const { id } = match.params;

  useAuthorisation(authRules.userIsSignedIn, history);
  const { doc: session, isLoading, error } = useFirebaseDoc(`sessions/${id}`);

  const pageTitle = session
    ? session.title
    : isLoading
    ? "Loading..."
    : error
    ? "Error"
    : "";

  return (
    <Page title={pageTitle}>
      {session && (
        <Box fill gap="small">
          <SessionHeader session={session} />
          <Box fill="horizontal" direction="row" gap="small">
            <SessionVote session={session} />
            <SessionResults session={session} />
          </Box>
        </Box>
      )}
    </Page>
  );
};

export default Session;

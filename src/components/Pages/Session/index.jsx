import React from "react";
import { Box } from "grommet";

import Page from "../../Page";
import { useAuthorisation, authRules } from "../../UserSession";
import { useFirebaseDoc } from "../../Firebase";
import SessionVote from "../../SessionVote";
import SessionVotes from "../../SessionVotes";
import SessionResult from "../../SessionResult";

const Session = ({ history, match }) => {
  const { id } = match.params;

  useAuthorisation(authRules.userIsSignedIn, history);
  const { doc: session, isLoading, error } = useFirebaseDoc(`sessions/${id}`);

  const pageTitle = session
    ? `Session: ${session.title}`
    : isLoading
    ? "Loading..."
    : error
    ? "Error"
    : "";

  const sessionHasVotes = session && Object.entries(session.votes).length > 0;

  return (
    <Page title={pageTitle}>
      {session && (
        <Box fill="horizontal" direction="row" gap="small">
          <Box width={{ min: "400px", max: "400px" }}>
            <SessionVote session={session} />
          </Box>
          <Box fill="horizontal">
            <SessionVotes session={session} />
          </Box>
          {sessionHasVotes && (
            <Box width={{ min: "400px", max: "400px" }}>
              <SessionResult session={session} />
            </Box>
          )}
        </Box>
      )}
    </Page>
  );
};

export default Session;

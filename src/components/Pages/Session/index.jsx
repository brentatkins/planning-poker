import React from "react";
import { Heading, Box } from "grommet";

import Page from "../../Page";
import { useAuthorisation, authRules } from "../../UserSession";
import { useFirebaseDoc } from "../../Firebase";
import SessionHeader from "../../SessionHeader";
import SessionUsers from "../../SessionUsers";

const Session = ({ history, match }) => {
  const { id } = match.params;

  useAuthorisation(authRules.userIsSignedIn, history);
  const { doc: session, isLoading, error } = useFirebaseDoc(`sessions/${id}`);

  const pageTitle = session ? `Session - ${session.title}` : "";

  return (
    <Page title={pageTitle}>
      {isLoading && <Heading>Loading...</Heading>}
      {error && <Heading>Error!</Heading>}
      {session && (
        <Box gap="small">
          <SessionHeader session={session} />
          <SessionUsers session={session} />
        </Box>
      )}
    </Page>
  );
};

export default Session;

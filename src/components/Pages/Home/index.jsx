import React from "react";
import { Box } from "grommet";

import { useAuthorisation, authRules } from "../../UserSession";
import SessionList from "../../SessionList";

const Home = ({ history }) => {
  useAuthorisation(authRules.userIsSignedIn, history);

  return (
    <Box background="light-2">
      <SessionList />
    </Box>
  );
};

export default Home;

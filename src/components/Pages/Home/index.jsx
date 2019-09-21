import React from "react";
import { Box, Grid } from "grommet";

import { useAuthorisation, authRules } from "../../Session";
import PartyList from "../../PartyList";

const Home = ({ history }) => {
  useAuthorisation(authRules.userIsSignedIn, history);

  return (
    <Box background="light-2">
      <PartyList></PartyList>
    </Box>
  );
};

export default Home;

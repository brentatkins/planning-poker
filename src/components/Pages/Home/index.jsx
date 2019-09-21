import React from "react";

import { useAuthorisation, authRules } from "../../Session";

import PartyList from "../../PartyList";

const Home = ({ history }) => {
  useAuthorisation(authRules.userIsSignedIn, history);

  return (
    <div>
      <h1>Home</h1>
      <PartyList />
    </div>
  );
};

export default Home;

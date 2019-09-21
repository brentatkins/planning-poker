import React, { useContext } from "react";
import { Heading, Text, Button, Box } from "grommet";
import { Link } from "react-router-dom";

import Page from "../../Page";
import { AuthUserContext } from "../../UserSession";
import { FirebaseContext } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";

const handleSignIn = async (firebase, history) => {
  await firebase.doSignIn();
  history.push(ROUTES.HOME);
};

const navigateToHome = history => {
  history.push(ROUTES.HOME);
};

const Landing = ({ history }) => {
  const authUser = useContext(AuthUserContext);
  const firebase = useContext(FirebaseContext);

  return (
    <Page>
      <Heading>
        Welcome to planning poker {authUser ? authUser.displayName : ""}
      </Heading>
      {authUser && (
        <Button
          primary
          label="Start"
          onClick={navigateToHome.bind(this, history)}
        />
      )}
      {!authUser && (
        <Button
          primary
          label="Sign in"
          onClick={handleSignIn.bind(this, firebase, history)}
        />
      )}
    </Page>
  );
};

export default Landing;

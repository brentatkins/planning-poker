import React, { useContext } from "react";
import { Heading, Button } from "grommet";

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
        Welcome to planning poker {authUser ? authUser.email : ""}
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

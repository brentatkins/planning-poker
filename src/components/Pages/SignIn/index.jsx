import React, { useContext } from "react";
import { FirebaseContext } from "../../Firebase";

import * as ROUTES from "../../../constants/routes";

const handleSignIn = async (firebase, history) => {
  await firebase.doSignIn();
  history.push(ROUTES.HOME);
};

const SignIn = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  return (
    <>
      <h1>Sign in</h1>
      <button onClick={handleSignIn.bind(this, firebase, history)}>
        Click here to sign in
      </button>
    </>
  );
};

export default SignIn;

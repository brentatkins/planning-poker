import { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../Firebase";

const getNameFromEmail = email => {
  const reMatch = /^([^@]*)@/;
  const name = email.match(reMatch)[1];
  return name;
};

const useAuthentication = () => {
  const firebase = useContext(FirebaseContext);

  const [state, setState] = useState(() => {
    const user = firebase.auth.currentUser;

    return { initializing: !user, user };
  });

  function onChange(user) {
    if (user) {
      // HACK to build a user name from email address
      // should really get this from github, but need something working now
      user.planningPokerUsername = getNameFromEmail(user.email);
    }

    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(onChange);

    return () => unsubscribe();
  }, [firebase]);

  return state;
};

export default useAuthentication;

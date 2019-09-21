import { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../Firebase";

const useAuthentication = () => {
  const firebase = useContext(FirebaseContext);

  const [state, setState] = useState(() => {
    const user = firebase.auth.currentUser;
    return { initializing: !user, user };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(onChange);

    return () => unsubscribe();
  }, [firebase]);

  return state;
};

export default useAuthentication;

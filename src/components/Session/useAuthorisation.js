import { useEffect, useContext } from "react";

import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const useAuthorisation = (condition, history) => {
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (!condition(user)) {
        history.push(ROUTES.LANDING);
      }
    });

    return () => unsubscribe();
  }, [firebase, condition]);
};

export default useAuthorisation;

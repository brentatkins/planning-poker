import { useEffect, useState, useContext } from "react";

import { FirebaseContext } from "../Firebase";

function useFirebaseDoc(id) {
  const firebase = useContext(FirebaseContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .doc(id)
      .onSnapshot(
        doc => {
          setIsLoading(false);
          setDoc({ id: doc.id, ...doc.data() });
        },
        err => {
          setIsLoading(false);
          setError(err);
        }
      );

    return () => unsubscribe();
  }, [firebase, id]);

  return { error, isLoading, doc };
}

export default useFirebaseDoc;

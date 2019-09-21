import { useEffect, useState, useContext } from "react";

import { FirebaseContext } from "../Firebase";

function useFirebaseCollection(collectionName) {
  const firebase = useContext(FirebaseContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore
      .collection(collectionName)
      .onSnapshot(
        snapshot => {
          const list = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setIsLoading(false);
          setCollection(list);
        },
        err => {
          setIsLoading(false);
          setError(err);
        }
      );

    return () => unsubscribe();
  }, [firebase, collectionName]);

  return { collection, error, isLoading };
}

export default useFirebaseCollection;

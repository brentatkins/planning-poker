import React, { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../Firebase";

const PartyList = () => {
  const firebase = useContext(FirebaseContext);

  const [parties, setParties] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.parties().onSnapshot(snapshot => {
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setParties(list);
    });

    return () => unsubscribe();
  }, [firebase]);

  console.warn({ parties });
  return (
    <div>
      Parties:
      <ul>
        {parties.map(party => (
          <li key={`partylist_${party.id}`}>
            {party.id}: {party.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyList;

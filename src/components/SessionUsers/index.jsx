import React, { useContext } from "react";
import { Text, Box, Button } from "grommet";
import { Link, Unlink } from "grommet-icons";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext } from "../UserSession";

function SessionUsers({ session }) {
  const firebase = useContext(FirebaseContext);
  const user = useContext(AuthUserContext);

  const joinSession = () => {
    firebase.session(session.id).update({
      users: firebase.firestore.FieldValue.arrayUnion(user.displayName)
    });
  };

  const leaveSession = () => {
    firebase.session(session.id).update({
      users: firebase.firestore.FieldValue.arrayRemove(user.displayName)
    });
  };

  console.warn({ user, session });
  const userIsInSession =
    session.users && session.users.includes(user.displayName);

  return (
    <Box align="start" gap="small">
      {userIsInSession ? (
        <Button
          primary
          color="accent-1"
          label="Leave session"
          onClick={leaveSession}
          icon={<Unlink />}
        />
      ) : (
        <Button
          primary
          label="Join session"
          onClick={joinSession}
          icon={<Link />}
        />
      )}
      <Box direction="row" justify="center" gap="small">
        <Text>Current users: </Text>
        {session.users &&
          session.users.map(sessionUser => (
            <Box
              key={`session_user_${sessionUser}`}
              border
              pad="xxsmall"
              background={
                sessionUser === user.displayName ? "accent-2" : "accent-4"
              }
            >
              {sessionUser}
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default SessionUsers;

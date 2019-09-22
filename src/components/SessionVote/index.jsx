import React, { useContext } from "react";
import { Box, Button, Heading } from "grommet";
import { Link, Unlink } from "grommet-icons";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext } from "../UserSession";

const estimates = [1, 2, 5, 8, 13];

function SessionVote({ session }) {
  const firebase = useContext(FirebaseContext);
  const user = useContext(AuthUserContext);

  const joinSession = () => {
    firebase.session(session.id).update({
      users: firebase.firestore.FieldValue.arrayUnion(
        user.planningPokerUsername
      )
    });
  };

  const leaveSession = () => {
    firebase.session(session.id).update({
      users: firebase.firestore.FieldValue.arrayRemove(
        user.planningPokerUsername
      ),
      [`votes.${user.planningPokerUsername}`]: firebase.firestore.FieldValue.delete()
    });
  };

  const castVote = estimate => {
    firebase.session(session.id).update({
      [`votes.${user.planningPokerUsername}`]: estimate
    });
  };

  const userIsInSession =
    session.users && session.users.includes(user.planningPokerUsername);

  const userVote = session.votes && session.votes[user.planningPokerUsername];

  return (
    <Box align="start" gap="small" background="neutral-3" pad="small">
      <Heading level="2" margin="none" size="small">
        Your vote
      </Heading>

      {userIsInSession && (
        <Box gap="xxsmall" direction="row">
          {estimates.map(x => (
            <Button
              key={`estimate_${x}`}
              label={x}
              disabled={userVote === x}
              onClick={() => castVote(x)}
            />
          ))}
        </Box>
      )}
      {userIsInSession ? (
        <Button
          // primary
          color="accent-3"
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
    </Box>
  );
}

export default SessionVote;

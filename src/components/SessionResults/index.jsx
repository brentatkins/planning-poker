import React, { useContext } from "react";
import { Box, Heading, Text, CheckBox } from "grommet";
import { Checkmark } from "grommet-icons";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext } from "../UserSession";

function SessionResults({ session }) {
  const firebase = useContext(FirebaseContext);
  const user = useContext(AuthUserContext);

  const handleRevealChange = e => {
    const reveal = e.target.checked;
    // controlled component hooked up to firebase 🤫
    firebase.session(session.id).update({ reveal });
  };

  const getUserVote = user => session.votes && session.votes[user];

  return (
    <Box align="start" gap="small" background="neutral-2" pad="small">
      <Heading level="2" margin="none" size="small">
        Results
      </Heading>
      <Text>Results for each user</Text>
      <CheckBox
        checked={session.reveal}
        label="Reveal results"
        onChange={handleRevealChange}
      />
      <Box direction="row" justify="center" gap="small">
        {session.users &&
          session.users.map(sessionUser => {
            const userVote = getUserVote(sessionUser);
            return (
              <Box key={`session_user_${sessionUser}`} direction="row" border>
                <Box
                  pad="xsmall"
                  background={
                    sessionUser === user.displayName ? "accent-1" : "accent-4"
                  }
                >
                  <Text size="large">{sessionUser}</Text>
                </Box>
                {userVote && (
                  <Box
                    pad="xxsmall"
                    justify="center"
                    width="xxsmall"
                    align="center"
                  >
                    {session.reveal ? (
                      <Text size="large" weight="bold">
                        {userVote}
                      </Text>
                    ) : (
                      <Checkmark />
                    )}
                  </Box>
                )}
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default SessionResults;

import React, { useContext } from "react";
import { Box, Heading, Text, CheckBox, Paragraph } from "grommet";

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
    <Box align="start" gap="small" background="neutral-4" pad="small">
      <Heading level="2" margin="none" size="small">
        Results
      </Heading>
      <Paragraph>Voting results will appear below for each user</Paragraph>
      <CheckBox
        checked={session.reveal}
        label="Reveal results"
        onChange={handleRevealChange}
      />
      <Box direction="row" gap="small" wrap>
        {session.users &&
          session.users.map(sessionUser => {
            const userVote = getUserVote(sessionUser);
            const boxBorder =
              sessionUser === user.planningPokerUsername
                ? { color: "accent-3", size: "xsmall" }
                : { size: "xsmall" };
            return (
              <Box
                key={`session_user_${sessionUser}`}
                direction="row"
                border={boxBorder}
                margin={{ bottom: "small" }}
              >
                <Box pad="xsmall">
                  <Text size="large">{sessionUser}</Text>
                </Box>
                <Box
                  pad="xxsmall"
                  justify="center"
                  width="xxsmall"
                  align="center"
                >
                  <Text size="large" weight="bold">
                    {userVote && session.reveal && userVote}
                    {userVote && !session.reveal && (
                      <span role="img" aria-label="waiting">
                        🤐
                      </span>
                    )}
                    {!userVote && (
                      <span role="img" aria-label="waiting">
                        🤷
                      </span>
                    )}
                  </Text>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default SessionResults;

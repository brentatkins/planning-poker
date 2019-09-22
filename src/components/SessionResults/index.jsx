import React, { useContext } from "react";
import { Box, Heading, Text, CheckBox, Paragraph } from "grommet";
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
    <Box
      align="start"
      gap="small"
      background="neutral-2"
      pad="small"
      flex="grow"
    >
      <Heading level="2" margin="none" size="small">
        Results
      </Heading>
      <Paragraph>Voting results will appear below for each user</Paragraph>
      <CheckBox
        checked={session.reveal}
        label="Reveal results"
        onChange={handleRevealChange}
      />
      <Box direction="row" justify="center" gap="small">
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
              >
                <Box pad="xsmall" background="accent-4">
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

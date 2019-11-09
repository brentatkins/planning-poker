import React, { useContext } from "react";
import { Box, Heading, Text, Paragraph } from "grommet";

import { AuthUserContext } from "../UserSession";

function SessionVotes({ session }) {
  const user = useContext(AuthUserContext);
  const getUserVote = user => session.votes && session.votes[user];

  return (
    <Box align="start" gap="small" background="neutral-4" pad="small">
      <Heading level="2" margin="none" size="small">
        Votes
      </Heading>
      <Paragraph>Voting results will appear below for each user</Paragraph>
      <Box direction="row" gap="small" wrap>
        {session.users &&
          session.users.map(sessionUser => {
            const userVote = getUserVote(sessionUser);
            const boxBorder =
              sessionUser === user.planningPokerUsername
                ? { size: "xsmall", style: "dashed" }
                : { color: "accent-3", size: "xsmall" };
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
                  <Text size="large" weight="bold" color="status-warning">
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

export default SessionVotes;

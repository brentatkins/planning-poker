import React, { useContext } from "react";
import { Box, Heading, Paragraph, Button } from "grommet";
import { FormView, Hide } from "grommet-icons";

import { BlurredText } from "../UI/BlurredText";
import { FirebaseContext } from "../Firebase";
import { calculateScore } from "../../utils/scoreCalculator";

function SessionResult({ session }) {
  const firebase = useContext(FirebaseContext);

  const toggleReveal = () => {
    const reveal = !session.reveal;
    firebase.session(session.id).update({ reveal });
  };

  const sessionHasVotes = Object.entries(session.votes).length > 0;

  const score = calculateScore(Object.values(session.votes));

  return (
    <Box align="start" gap="small" background="neutral-1" pad="small">
      <Heading level="2" margin="none" size="small">
        Results
      </Heading>
      {!sessionHasVotes && <Paragraph>Notes votes yet</Paragraph>}
      {sessionHasVotes && (
        <>
          <Box fill="horizontal" align="center">
            <BlurredText
              blurSize={session.reveal && 0}
              color="status-warning"
              size="80px"
              weight="bold"
            >
              {session.reveal ? score : "9"}
            </BlurredText>
          </Box>
          <Box margin={{ top: "medium", bottom: "small" }}>
            <Button
              onClick={toggleReveal}
              label={session.reveal ? "Hide" : "Show"}
              icon={session.reveal ? <Hide /> : <FormView />}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default SessionResult;

import React, { useContext } from "react";
import { Box, Heading, CheckBox } from "grommet";

import { BlurredText } from "../UI/BlurredText";
import { FirebaseContext } from "../Firebase";
import { calculateScore } from "../../utils/scoreCalculator";

function SessionResult({ session }) {
  const firebase = useContext(FirebaseContext);

  const handleRevealChange = e => {
    const reveal = e.target.checked;
    // controlled component hooked up to firebase 🤫
    firebase.session(session.id).update({ reveal });
  };

  const score = calculateScore(Object.values(session.votes));

  return (
    <Box align="start" gap="small" background="neutral-1" pad="small">
      <Heading level="2" margin="none" size="small">
        Results
      </Heading>
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
      <CheckBox
        checked={session.reveal}
        label="Reveal results"
        onChange={handleRevealChange}
      />
    </Box>
  );
}

export default SessionResult;

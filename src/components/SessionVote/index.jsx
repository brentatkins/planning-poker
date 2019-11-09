import React, { useContext } from "react";
import { Box, Button, Heading, Paragraph, Text } from "grommet";
import { Link, Unlink } from "grommet-icons";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext } from "../UserSession";
import { GifLoader } from "../GifLoader";

const estimates = [1, 2, 3, 5, 8, 13];

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
      {userIsInSession && !userVote && (
        <Paragraph>
          You have not voted on this issue yet. Please do so by clicking one of
          the estimates below
        </Paragraph>
      )}
      {userIsInSession && userVote && (
        <>
          <Box fill="horizontal" align="center" height={{ min: "94px" }}>
            <Text color="status-warning" size="80px" weight="bold">
              {userVote}
            </Text>
          </Box>
          <Paragraph>
            You may change your vote by clicking another estimate below
          </Paragraph>
        </>
      )}
      {userIsInSession && (
        <Box gap="xxsmall" direction="row" height={{ min: "36px" }}>
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
        <>
          <Paragraph size="small">
            To remove your vote and leave the session click below
          </Paragraph>
          <Button
            // primary
            color="accent-3"
            label="Leave"
            onClick={leaveSession}
            icon={<Unlink />}
          />
        </>
      ) : (
        <>
          <Paragraph>
            You need to join the session before you may cast a vote. Join by
            clicking below
          </Paragraph>
          <Button primary label="Join" onClick={joinSession} icon={<Link />} />
        </>
      )}
      {userIsInSession && userVote && !session.reveal && (
        <Box margin={{ top: "small" }}>
          <Paragraph size="small">
            Thanks for voing. Now we have to wait for the results to be revealed
          </Paragraph>
          <Box margin="none" height={{ min: "192px" }}>
            <GifLoader searchTerm="bored" refreshPeriod={5000} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SessionVote;

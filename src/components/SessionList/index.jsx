import React, { useState } from "react";
import { Grid, Box, Text, Heading, Button } from "grommet";
import { AddCircle } from "grommet-icons";
import { formatDistance } from "date-fns";

import AddSession from "./AddSession";
import { useFirebaseCollection } from "../Firebase";

const SessionList = ({ onNavigateToSession }) => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const { collection: sessions, error, isLoading } = useFirebaseCollection(
    "sessions"
  );

  if (isLoading) {
    return <Heading level="4">Loading...</Heading>;
  } else if (error) {
    return <Heading level="4">Error loading sessions</Heading>;
  }

  return (
    <Grid align="start" gap="small">
      <Box align="start">
        <Button
          icon={<AddCircle />}
          label="Create New Session"
          onClick={() => setIsAddOpen(true)}
          color="accent-4"
          primary
        />
      </Box>
      <Box wrap gap="small" direction="row">
        {sessions.map(session => (
          <Box
            key={`sessionlist_${session.id}`}
            background="neutral-2"
            pad="small"
            margin={{ bottom: "small" }}
            onClick={() => onNavigateToSession(session.id)}
          >
            <Heading level="3" margin="none">
              {session.title}
            </Heading>
            <Text size="xsmall">
              Created by {session.createdBy}{" "}
              {session.dateCreated &&
                `${formatDistance(
                  session.dateCreated.toDate(),
                  new Date()
                )} ago`}
            </Text>
          </Box>
        ))}
      </Box>
      {isAddOpen && <AddSession onClose={() => setIsAddOpen(false)} />}
    </Grid>
  );
};

export default SessionList;

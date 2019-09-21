import React, { useState } from "react";
import { Grid, Box, Text, Heading, Button } from "grommet";
import { AddCircle } from "grommet-icons";
import { formatDistance } from "date-fns";

import AddSession from "./AddSession";
import { useFirebaseCollection } from "../Firebase";

const SessionList = () => {
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
    <Box pad="small">
      <Heading level="4" margin="small">
        Sessions
      </Heading>
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
        <Box gap="small" direction="row-responsive">
          {sessions.map(session => (
            <Box
              key={`sessionlist_${session.id}`}
              background="neutral-2"
              pad="small"
            >
              <Heading level="5" margin="small">
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
      </Grid>
      {isAddOpen && <AddSession onClose={() => setIsAddOpen(false)} />}
    </Box>
  );
};

export default SessionList;

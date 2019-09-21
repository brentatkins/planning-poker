import React, { useState } from "react";
import { Grid, Box, Text, Heading, Button } from "grommet";
import { AddCircle } from "grommet-icons";
import { formatDistance } from "date-fns";

import AddParty from "./AddParty";
import { useFirebaseCollection } from "../Firebase";

const PartyList = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const { collection: parties, error, isLoading } = useFirebaseCollection(
    "sessions"
  );

  console.warn({ parties });

  if (isLoading) {
    return <Heading level="4">Loading...</Heading>;
  } else if (error) {
    return <Heading level="4">Error loading parties</Heading>;
  }

  return (
    <Box pad="small">
      <Heading level="4" margin="small">
        Parties
      </Heading>
      <Grid align="start" gap="small">
        <Box align="start">
          <Button
            icon={<AddCircle />}
            label="Create New Party"
            onClick={() => setIsAddOpen(true)}
            color="accent-4"
            primary
          />
        </Box>
        <Box gap="small" direction="row-responsive">
          {parties.map(party => (
            <Box
              key={`partylist_${party.id}`}
              background="neutral-2"
              pad="small"
            >
              <Heading level="5" margin="small">
                {party.title}
              </Heading>
              <Text size="xsmall">
                Created by {party.createdBy}{" "}
                {party.dateCreated &&
                  `${formatDistance(
                    party.dateCreated.toDate(),
                    new Date()
                  )} ago`}
              </Text>
            </Box>
          ))}
        </Box>
      </Grid>
      {isAddOpen && <AddParty onClose={() => setIsAddOpen(false)} />}
    </Box>
  );
};

export default PartyList;

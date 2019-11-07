import React, { useState } from "react";
import { Grid, Box, Text, Heading, Button } from "grommet";
import { AddCircle } from "grommet-icons";
import formatDistance from "date-fns/formatDistance";
import isAfter from "date-fns/isAfter";
import subDays from "date-fns/subDays";

import map from "lodash/fp/map";
import sortBy from "lodash/fp/sortBy";
import orderBy from "lodash/fp/orderBy";
import groupBy from "lodash/fp/groupBy";
import flow from "lodash/fp/flow";
import entries from "lodash/fp/entries";

import AddSession from "./AddSession";
import { useFirebaseCollection } from "../Firebase";

const DateGroupLabels = {
  WithinLastWeek: "1. Created in the last week",
  WithinLastMonth: "2. Created in the last 30 days",
  OlderThan30Days: "3. Older than 30 days"
};

const getSessionTimePeriod = session => {
  const date = session.dateCreated.toDate();

  const oneWeekAgo = subDays(new Date(), 7);
  if (isAfter(date, oneWeekAgo)) {
    return DateGroupLabels.WithinLastWeek;
  } else if (isAfter(date, subDays(new Date(), 30))) {
    return DateGroupLabels.WithinLastMonth;
  } else {
    return DateGroupLabels.OlderThan30Days;
  }
};

const SessionCard = ({ session, onNavigateToSession }) => {
  return (
    <Box
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
          `${formatDistance(session.dateCreated.toDate(), new Date())} ago`}
      </Text>
    </Box>
  );
};

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

  const groupedSessions = flow(
    groupBy(getSessionTimePeriod),
    entries,
    sortBy(([key]) => key),
    map(([key, s]) => [key, orderBy("dateCreated", "desc")(s)])
  )(sessions);

  return (
    <Grid align="start" gap="small">
      <Box align="start" height={{ min: "auto" }} className="brent">
        <Button
          icon={<AddCircle />}
          label="Create New Session"
          onClick={() => setIsAddOpen(true)}
          color="accent-4"
          primary
        />
      </Box>
      {groupedSessions.map(([key, sessions]) => (
        <React.Fragment key={`group_${key}`}>
          <Heading level="5" margin="none">
            {key}
          </Heading>
          <Box wrap gap="small" direction="row">
            {sessions.map(session => (
              <SessionCard
                key={`grouped_sessionlist_${session.id}`}
                session={session}
                onNavigateToSession={onNavigateToSession}
              />
            ))}
          </Box>
        </React.Fragment>
      ))}
      {isAddOpen && <AddSession onClose={() => setIsAddOpen(false)} />}
    </Grid>
  );
};

export default SessionList;

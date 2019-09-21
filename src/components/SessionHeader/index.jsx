import React from "react";
import { Text } from "grommet";
import { formatDistance } from "date-fns";

function SessionHeader({ session }) {
  return (
    <Text size="small">
      Created by {session.createdBy}{" "}
      {session.dateCreated &&
        `${formatDistance(session.dateCreated.toDate(), new Date())} ago`}
    </Text>
  );
}

export default SessionHeader;

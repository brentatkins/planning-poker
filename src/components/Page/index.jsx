import React from "react";
import { Grommet, Box, Heading, Button } from "grommet";
import { LinkPrevious } from "grommet-icons";
import { withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Page = ({ title, match, history, children }) => {
  const isNotHome = match.path !== ROUTES.HOME && match.path !== ROUTES.LANDING;

  return (
    <Grommet full>
      <Box fill align="start" background="light-4" pad="small">
        <Box direction="row">
          {isNotHome && (
            <Box justify="center" pad="small">
              <Button
                onClick={() => history.push(ROUTES.HOME)}
                icon={<LinkPrevious color="accent-2" />}
              />
            </Box>
          )}
          <Heading>{title}</Heading>
        </Box>
        {children}
      </Box>
    </Grommet>
  );
};

export default withRouter(Page);

import React, { useState, useContext } from "react";
import { Box, Heading, Button, TextInput } from "grommet";

import { Toast } from "../UI/Toast";
import { FirebaseContext } from "../Firebase";
import { AuthUserContext } from "../UserSession";

const AddSession = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const firebase = useContext(FirebaseContext);
  const user = useContext(AuthUserContext);

  async function saveNewSession() {
    await firebase.sessions().add({
      title,
      createdBy: user.displayName,
      dateCreated: new Date()
    });
    onClose();
  }

  return (
    <Toast position="center" modal>
      <Box align="center">
        <Box width="medium" pad="small" round={false}>
          {/* <Image
          src="https://uploads.codesandbox.io/uploads/user/5dfd08c4-cbb6-4165-a264-f2eb4b2f6ef1/-wkS-gremlin.png"
          fit="cover"
        /> */}
          <Heading level="4" margin="small">
            Please enter a title
          </Heading>
          <TextInput
            autoFocus
            placeholder="type here"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Box>
        <Box width="medium" margin="none" direction="row">
          <Box basis="1/2">
            <Button plain color="dark-1" onClick={saveNewSession}>
              <Box pad="small" align="center" background="status-ok">
                Accept
              </Box>
            </Button>
          </Box>
          <Box basis="1/2">
            <Button plain color="dark-1" onClick={onClose}>
              <Box pad="small" align="center" background="status-error">
                Reject
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Toast>
  );
};

export default AddSession;

import React, { useContext } from "react";

import { AuthUserContext } from "../../Session";

const Landing = () => {
  const authUser = useContext(AuthUserContext);

  console.warn({ authUser });
  return (
    <div>
      <h1>Welcome to planning poker {authUser ? authUser.displayName : ""}</h1>
    </div>
  );
};

export default Landing;

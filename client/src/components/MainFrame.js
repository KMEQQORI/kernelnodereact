import React from "react";
import Api from "./Api";
import { useAuth0 } from "../react-auth0-wrapper";

const MainFrame = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && <h1>login please</h1>}

      {isAuthenticated && <Api />}
    </div>
  );
};

export default MainFrame;

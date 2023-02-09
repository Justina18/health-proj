import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

function Logout() {
    const [user, setUser] = useContext(UserContext);
  
    setUser(null);
  
    return <Redirect to="/" />;
  }

export default Logout
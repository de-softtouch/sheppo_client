import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import history from "../../../history";
import { useSelector, useDispatch, connect } from "react-redux";
import { logout } from "../../../states/action_creators/authCreator";
import { createSelector } from "reselect";
import { Redirect, withRouter } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  console.log(loggedIn);
  const handleLogout = () => {
    if (loggedIn) {
      dispatch(logout());
      history.push("/login");
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <Button onClick={() => handleLogout()} colorScheme={"teal"}>
        PUblic HOme
      </Button>
    </div>
  );
}

export default Home;

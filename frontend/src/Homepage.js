import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage-container">
      <div className="Homepage">
        <div className="text-container">
          <h1 className="mb-4 font-widht-bold mt-5">
            Find and apply for the best jobs with Jobly
          </h1>
          {currentUser ? (
            <h2>
              Welcome back, {currentUser.firstName || currentUser.username}!
            </h2>
          ) : (
            <div>
              <Link to="/login">
                <Button color="primary">Login</Button>
              </Link>
              <Link to="/signup" className="ml-3">
                <Button color="primary">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

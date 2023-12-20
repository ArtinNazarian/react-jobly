import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import UserContext from "./UserContext";

/*Check if the user is logged in and only then continue to the routes

*/

function ProtectedRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
    "PrivateRoute",
    "exact=",
    exact,
    "path=",
    path,
    "currentUser=",
    currentUser
  );

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ element: Component, ...props }) {
  return (
    // TODO: update
    // props.isLoggedIn
    true
      ? <Component {...props} />
      : <Navigate to="/signin" replace />
  );
}

export default ProtectedRouteElement;

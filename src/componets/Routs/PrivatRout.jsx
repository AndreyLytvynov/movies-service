// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({ children }) {
//   const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

//   return isLoggedIn ? children : <Navigate to="/login" />;
// }

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  try {
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    if (isLoggedIn) return <Outlet />;

    return <Navigate to="/login" />;
  } catch (error) {
    console.log(error);
  }
}

export default PrivateRoute;

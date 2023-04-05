import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicRouts() {
  try {
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    if (!isLoggedIn) return <Outlet />;

    return <Navigate to="/popular" />;
  } catch (error) {
    console.log(error);
  }
}

export default PublicRouts;

import React  from "react";
import { Outlet } from "react-router-dom";

const PrivateWrapper = () => {
    return (
    <>
      <Outlet />
    </>
  );
}

export default PrivateWrapper
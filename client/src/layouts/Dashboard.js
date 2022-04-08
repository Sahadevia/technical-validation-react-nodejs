import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";

const DashboardLayout = (props) => {
  const context = useContext(AuthContext);

  console.log("context", context);

  return <>{props.children}</>;
};

export default DashboardLayout;

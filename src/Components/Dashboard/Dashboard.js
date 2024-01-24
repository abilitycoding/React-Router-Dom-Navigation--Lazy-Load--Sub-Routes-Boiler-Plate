import React from "react";
import { Outlet } from "react-router-dom";

const DashboardApp = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default DashboardApp;

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../Components/Common/Spinner";
import { LazyLoadedDashboard } from "../LazyLoad/LazyLoadedDashboard";
import DashboardApp from "../Components/Dashboard/Dashboard";
import DashboardNavbar from "../Components/Dashboard/DashboardNavbar";

const DashBoardRouter = () => {
  return (
    <div>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<DashboardApp />}>
          <Route
            path="profile"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyLoadedDashboard.DashboardProfile />
              </Suspense>
            }
          />
          <Route
            path="skills"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyLoadedDashboard.DashboardSkills />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyLoadedDashboard.DashboardSettings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default DashBoardRouter;

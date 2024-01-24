import { lazy } from "react";

export const DashBoardPages = ["Profile", "Skills", "Settings"];

const lazyImports = {};

DashBoardPages.forEach((component) => {
  lazyImports[component] = lazy(() =>
    import(`../Components/Dashboard/Pages/${component}`)
  );
});

export const LazyLoadedDashboard = {
  DashboardProfile: lazyImports["Profile"],
  DashboardSkills: lazyImports["Skills"],
  DashboardSettings: lazyImports["Settings"]
};

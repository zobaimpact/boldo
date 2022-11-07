import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingRoute } from "./LandingRoute";

export const MainRoutes = (props) => {
  return (
    <Routes>
      {/* Other module routes should come before the landing pages */}
      <Route exact path="/" element={<LandingRoute />} />
      <Route path="*" component={<>Not found</>} />
    </Routes>
  );
};

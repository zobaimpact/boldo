import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingRoute } from "./LandingRoute";
import PortfolioPage from "../pages/PortfolioPage/index";

export const MainRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/portfolio" element={<PortfolioPage />}></Route>
      {/* Other module routes should come before the landing pages */}
      <Route exact path="/" element={<LandingRoute />} />
      <Route path="*" component={<>Not found</>} />
    </Routes>
  );
};

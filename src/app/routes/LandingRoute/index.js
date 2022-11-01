import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/index";
import { Layout } from "../../components/Layout";

export const LandingRoute = memo((props) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        exact
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Routes>
  );
});

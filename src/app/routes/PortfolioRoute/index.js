import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { PortfolioPage } from "../../pages/PortfolioPage/index";
import { Layout } from "../../components/Layout";

 const PortfolioRoute = memo((props) => {

  return (
    <Routes>
      <Route
        path="/portfolio"
        exact
        element={
          <Layout>
            <PortfolioPage />
          </Layout>
        }
      ></Route>
      <Route path="*" component={<>Not found</>} />
    
    </Routes>
  );
});

export default PortfolioRoute;

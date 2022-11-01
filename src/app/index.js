/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global-styles";

import { MainRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <main>
        <MainRoutes />
      </main>
      <GlobalStyle />
    </BrowserRouter>
  );
}

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from "react";
import FontFaceObserver from "fontfaceobserver";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./app";
const container = document.getElementById("root");

// Import root app

const root = createRoot(container);
const openSansObserver = new FontFaceObserver("Poppins", {});

// When Poppins is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded");
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children}) => {
  return (
    <div>
      
      {/* ======== Render Nabar ======== */}
      <Navbar />

      {/* ======== Render app content ========= */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};


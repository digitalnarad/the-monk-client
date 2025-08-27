import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Home from "./Home";
import Header from "../../../component/Header";

function HomeLayout() {
  return (
    <div className="min-h-screen bg-background ">
      <Home />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomeLayout;

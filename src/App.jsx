import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

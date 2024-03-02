import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Organisations from "./components/organisations/Organisations";
import Qualifications from "./components/qualifications/Qualifications";

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Organisations></Organisations>
      <Qualifications></Qualifications>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;

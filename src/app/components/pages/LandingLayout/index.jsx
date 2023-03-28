import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Header";
import Business from "./Business";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Investors from './Investors'
import Accolades from "./Accolades";
import Articles from "./Articles";
import Footer from "../../shared/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Business />
      <About />
      <HowItWorks />
      <Investors/>
      <Accolades />
      <Articles />
      <Footer />
    </>
  );
}

export default LandingPage
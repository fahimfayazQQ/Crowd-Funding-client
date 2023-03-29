'use client'
import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Business from "./business";
import About from "./about";
import HowItWorks from "./howItWorks";
import Investors from './investors'
import Accolades from "./accolades";
import Articles from "./articles";
import Footer from '../shared/Footer';

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
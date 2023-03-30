import React from "react";
import Navbar from "../../shared/navbar";
import StoryDetail from "./storyDetail";
import Footer from "../../shared/footer";

const StoryDetailLayout = () => {
  return (
    <>
      <Navbar />
      <StoryDetail />
      <Footer />
    </>
  );
};

export default StoryDetailLayout;

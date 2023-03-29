import React from "react";
import Navbar from "../shared/navbar";
import StoriesGallery from "./storiesGallery";
import StoryDetail from "./storyDetail";
import Footer from "../shared/footer";

const StoriesLayout = () => {
  return (
    <>
      <Navbar />
      <StoriesGallery />
      <StoryDetail />
      <Footer />
    </>
  );
};

export default StoriesLayout;

import React from 'react'
import Navbar from "../../../shared/navbar";
import DetailContent from './detailContent';
import Footer from "../../../shared/footer";

const EventDetailsLayout = () => {
  return (
    <>
      <Navbar />
      <DetailContent />
      <Footer />
    </>
  );
}

export default EventDetailsLayout;
import React from 'react'
import Navbar from "../../shared/navbar/page";
import EventHeader from "../eventsHeader";
import EventContent from './eventContent';
import Footer from "../../shared/footer";

const EventDetailsLayout = () => {
  return (
    <>
      <Navbar />
      <EventHeader />
      <EventContent />
      <Footer />
    </>
  );
}

export default EventDetailsLayout;
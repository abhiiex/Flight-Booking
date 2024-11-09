import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import TopPlaces from "../Components/Home/TopPlaces";
import ValuesWeProvide from "../Components/Home/ValuesWeProvide";
import Testimonials from "../Components/Home/Testimonials";
import LetGetToKnow from "../Components/Home/LetGetToKnow";
import BookTicketBox from "../Components/BookTicketBox";
import HomeTicketBookingBox from "../Components/HomeTicketBookingBox";

const Home = () => {
  return (
    <section className="px-[30px] md:px-[30px]">
      <HeroSection />
      <ValuesWeProvide />
      <HomeTicketBookingBox />
      <TopPlaces />
      <Testimonials />
      <LetGetToKnow />
    </section>
  );
};

export default Home;
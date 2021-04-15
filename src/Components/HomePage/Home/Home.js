import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const header = {
    minHeight: "500px",
    width: "100%",
    backgroundImage: "linear-gradient(60deg, #F9C227,#FF5B7D)",
    margin: 0,
    padding: 0,
  };

  return (
    <div>
      <header style={header}>
        <Banner />
      </header>
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

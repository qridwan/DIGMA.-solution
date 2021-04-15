import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Navigation from "../Navigation/Navigation";

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
        <Navigation />
        <Banner />
      </header>

      <section className="container">
      <Features/>  
    </section>

    </div>
  );
};

export default Home;

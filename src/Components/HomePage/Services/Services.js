import React from "react";
import "./Services.css";
import ServiceAllCard from "./ServiceCards/ServiceAllCard";
const Services = () => {
  return (
    <section className="services-container">
      <header className="text-center my-5">
        <h3 style={{ color: "#0f1010" }}>Services We Provide</h3>
      </header>
      <ServiceAllCard />
    </section>
  );
};

export default Services;

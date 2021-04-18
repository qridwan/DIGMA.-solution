import React, { useEffect, useState } from "react";
import ServiceSingleCard from "./ServiceSingleCard";

const ServiceAllCard = () => {
  const [services, setServices] = useState([]);

  //fetching all services from database
  useEffect(() => {
    fetch("https://digma-server.herokuapp.com/services")
      .then((response) => response.json())
      .then((services) => {
        setServices(services);
      });
  }, []);

  return (
    <div className=" d-flex justify-content-center mb-5">
      <div className="row mb-5 container">
        {services.map((service) => (
          <ServiceSingleCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceAllCard;

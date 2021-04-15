import React from 'react';
import MobileAppDev from '../../../../Images/serviceImage/MobileAppDev.png'
import UiUx from '../../../../Images/serviceImage/ux.png'
import WebDev from '../../../../Images/serviceImage/WebDev.png'
import Seo from '../../../../Images/serviceImage/seo.png'
import ServiceSingleCard from './ServiceSingleCard';


const ServiceAllCard = () => {
    const Services = [
        {
          img: MobileAppDev,
          title: "Mobile App Development",
          details:
            "Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.",
        },
        {
          img: UiUx,
          title: "UI/UX Design (Web & App)",
          details:
          "Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.",
        },
        {
          img: WebDev,
          title: "Web Development",
          details:
            "Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.",
        },
        {
          img: Seo,
          title: "Seo Analysis",
          details:
            "Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.",
        },
      ];
    return (
        <div className=" d-flex justify-content-center mb-5">
        <div className="row mb-5 container">
          {Services.map((service) => (
            <ServiceSingleCard service={service} />
          ))}
        </div>
      </div>
)}

export default ServiceAllCard;
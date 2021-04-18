import React from "react";
import './Testimonials.css'

const TestimonialsCard = ({ reviewInfo }) => {
  const { name, img, review, title } = reviewInfo;
  return (

    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <p className="description">{review}</p>
      </div>
      <div className="author">
        <img className="rounded-circle" src={img} alt="" />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;

import React from "react";
import './Testimonials.css'

const TestimonialsCard = ({ review }) => {
  const { name, img, comment } = review;
  return (

    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <p className="description">{comment}</p>
      </div>
      <div className="author">
        <img className="rounded-circle" src={img} alt="" />
        <h5 className="name">{name}</h5>
        <p className="title">CEO of Company Inc.</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;

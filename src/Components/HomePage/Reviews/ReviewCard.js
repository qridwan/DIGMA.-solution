import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, comment } = review;
  return (
    <div class="col-md-6 col-lg-4 item">
      <div class="box">
        <img class="rounded-circle" height="200px" width="200px" src={img} alt="" />
        <h3 class="name">{name}</h3>
        <p class="title">Business Manager</p>
        <p class="description">{comment} </p>
        <div class="social">
          <a href="#">
            <i class="fa fa-facebook-official"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

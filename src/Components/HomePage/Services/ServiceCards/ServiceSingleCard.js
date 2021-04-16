import React from "react";

const ServiceSingleCard = ({ service }) => {
  const { img, title, details } = service;
  return (
    <div className="col-lg-6 mb-3">
      <div className="card">
        <div className="row">
          <div className="col-sm-4 p-5  d-flex justify-content-center ">
            <img
              className="d-block"
              src={img}
              alt=""
              height= "120px"
              width= "120px"
            />
          </div>
          <div className="col-sm-8 d-flex justify-content-center align-items-center">
            <div className="card-block pl-3">
              <h6>{title}</h6>
              <p className="text-muted text-justify pr-3">
                {details}
              </p>
              <br />
              <button className="btn btn-light btn-sm float-right">
                Read More
              </button>
              <button className=" btn btn-blueCyan btn-sm  text-light">
                BOOK
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleCard;

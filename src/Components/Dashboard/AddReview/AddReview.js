import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const AddReview = () => {
  const [userInfo] = useContext(UserContext);
  const [review, setReview] = useState(false);
  console.log(
    "🚀 ~ file: AddReview.js ~ line 8 ~ AddReview ~ userInfo",
    userInfo
  );
  const { name, photo } = userInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      name: name,
      review: data.review,
      img: photo,
      title: data.title,
    };
    console.log(reviewData);
    const url = `https://digma-server.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => {
      if (res) {
        setReview(true);
      }
    });
  };
  return (
    <div className=" text-center p-4">
      <div className="d-flex justify-content-center align-items-center">
        {!review ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="text-dark form-control"
              {...register("title", { required: true })}
              placeholder="Your Title"
              defaultValue="CEO of XYZ Company"
            />
            <br />
            {errors.title && <p>Title is required.</p>}
            <textarea
              className="text-dark form-control"
              {...register("review", { required: true })}
              placeholder="Review Our Service"
            />
            {errors.review && <p>Must be a valid Review.</p>}
            <br />
            <input
              className="text-light btn-blueCyan form-control"
              type="submit"
              value="SEND"
            />
          </form>
        ) : (
          <div>
            <h3>
              Your Review Successfully Sent. Thank You For your important
              feedback!
            </h3>
            <button
              className="btn btn-blueCyan text-light"
              onClick={() => setReview(false)}
            >
              Add New
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddReview;

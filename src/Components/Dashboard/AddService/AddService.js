import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
    const [imageUrl, setImageUrl] = useState(null);
    console.log("🚀 ~ file: AddService.js ~ line 7 ~ AddService ~ imageUrl", imageUrl)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
        name: data.service,
        author: data.description,
        image: imageUrl,
      };
      console.log(serviceData);
  };


  const handleImage = (event) => {
    const imageData = new FormData();
    imageData.set("key", "b26389c1040d4906f07c920d5340a088");
    imageData.append("image", event.target.files[0]);
    axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: imageData
      })
      .then(function (response) {
        console.log("🚀 ~ file: AddService.js ~ line 30 ~ response", response)
        console.log("url", response.data.data.display_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className=" text-center p-4">
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="text-dark form-control" {...register("service", { required: true })} placeholder="Service"/>
          {errors.service && <p>Service name is required.</p>}
          <textarea className="text-dark form-control" {...register("description", { required: true })} placeholder="Description"/>
          {errors.description && <p>Last name is required.</p>}
          <input
              className="text-dark form-control-file "
              type="file"
              onChange={handleImage}
              required
            />
          <input className="text-light btn-blueCyan form-control" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;

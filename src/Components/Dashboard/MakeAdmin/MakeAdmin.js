import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
         //form function
  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
    };
    console.log(adminData);
    const url = `https://digma-server.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => {
      if (res) {
        alert("New Admin Added")
      }
    });
  };
    return (
        <div className=" text-center p-4">
        <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-dark form-control"
            {...register("email", { required: true,  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
            placeholder="Email"
          />
          {errors.email && <p>Give a valid email address</p>}
         <br/>
          
          <input
            className="text-light btn-blueCyan form-control"
            type="submit" value="Add as an Admin"
          />
        </form>
        </div>
        </div>
    );
};

export default MakeAdmin;
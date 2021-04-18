import React, { useState } from 'react';
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { render } from '@testing-library/react';
import OrderList from './OrderList';
import OrderRow from './OrderRow';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
    },
  };
  
  const formStyles = {
    minWidth: "300px",
  };
  const inputStyles = {
    minWidth: "280px",
    border: "1px solid #17a2b8",
    margin: "10px auto",
    padding: "10px",
  };
  
  Modal.setAppElement("#root");
  const StatusModal = ({ modalIsOpen,
    getAllOrders, closeModal, selectedOrder}) => {
  console.log("🚀 ~ file: StatusModal.js ~ line 29 ~ StatusModal ~ selectedOrder", selectedOrder)
    function afterOpenModal() {}
    const {
      register,
      handleSubmit,
    } = useForm();
  
  
    const onSubmit = (data) => {
      const status = data.status;
      console.log("🚀 ~ file: StatusModal.js ~ line 39 ~ onSubmit ~ status", status)
    fetch(`https://digma-server.herokuapp.com/update/${selectedOrder?._id}`, {
        method : 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status})
      })
      .then(res => res.json())
      .then(result => {
        if(result){
           closeModal();
          getAllOrders()
        }
      });
    };
  
    return (
      <div className="">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="m-5">
            <h5 className="text-info text-center">Change Order Status </h5>
            <button className="btn btn-warning  px-5 m-3 " onClick={closeModal}>
              ❌
            </button>
  
            <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
            <select {...register("status")}>
        <option value="Pending">Pending</option>
        <option value="On-going">On Going</option>
        <option value="Done">Done</option>
      </select>
              <input className="btn btn-info" type="submit" />
            </form>
          </div>
        </Modal>
      </div>
    );
  };
  
  export default StatusModal;
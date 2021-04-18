import React, { useEffect, useState } from "react";
import "./OrderList.css";
import OrderRow from "./OrderRow";
import StatusModal from "./StatusModal";

const OrderList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = "https://digma-server.herokuapp.com/allOrders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
const getAllOrders = () => {
  const url = "https://digma-server.herokuapp.com/allOrders";
  fetch(url)
    .then((res) => res.json())
    .then((data) => setOrders(data));
}

  
  const [selectedOrder, setSelectedOrder] = useState({});

  const handleStatus = (id) => {
    fetch(`https://digma-server.herokuapp.com/orders/` + id)
      .then((res) => res.json())
      .then((data) => {
        setSelectedOrder(data);
        openModal();
      });
  };
  return (
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Payment ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleStatus={handleStatus}
            />
          ))}
        </tbody>
      </table>
      <StatusModal
        selectedOrder={selectedOrder}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}       
        getAllOrders={getAllOrders}
      />
    </div>
  );
};

export default OrderList;

import React, { useState } from "react";
import AddReview from "./AddReview/AddReview";
import AddService from "./AddService/AddService";
import BookingList from "./BookingList/BookingList";
import Books from "./Books/Books";

import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageServices from "./ManageServices/ManageServices";
import OrderList from "./OrderList/OrderList";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const [condition, setCondition] = useState(null);

  const showPage = (page) => {
    setCondition(page);
    console.log(page, condition);
  };

  console.log(
    "🚀 ~ file: Dashboard.js ~ line 10 ~ Dashboard ~ condition",
    condition
  );
  return (
    <>
      <Sidebar showPage={showPage} />
      <div className="content-container">
        {condition === "addService" && <AddService />}
        {condition === "makeAdmin" && <MakeAdmin />}
        {condition === "addReview" && <AddReview />}
        {condition === "manageServices" && <ManageServices />}
        {condition === "bookingList" && <BookingList />}
        {condition === "books" && <Books />}
        {condition === "orderList" && <OrderList />}
      </div>
    </>
  );
};

export default Dashboard;

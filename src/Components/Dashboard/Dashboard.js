import React, { useState } from "react";
import AddService from "./AddService/AddService";

import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const [condition, setCondition] = useState(null);

  const showPage = (page) => {
    setCondition(page)
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
        <AddService />
      </div>
    </>
  );
};

export default Dashboard;

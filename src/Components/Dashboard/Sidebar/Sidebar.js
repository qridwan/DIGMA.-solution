import React, { useContext, useEffect, useState } from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import TocIcon from "@material-ui/icons/Toc";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BuildIcon from "@material-ui/icons/Build";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import { UserContext } from "../../../App";

const Sidebar = ({ showPage }) => {
  const [userInfo] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const email = userInfo.email;
  
  useEffect(() => {
    fetch("https://digma-server.herokuapp.com/isAdmin/" + email)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(true);
        }
      });
  }, []);

  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar-user">
          <img
            src={userInfo.photo}
            alt="Snap"
            height="80"
            className="d-block border rounded-circle"
          ></img>
          <h5>
            {" "}
            {userInfo.name}{" "}
            {isAdmin && (
              <>
                <br />
                <VerifiedUserOutlinedIcon className="text-light" />
                <small> ADMIN</small>
              </>
            )}{" "}
          </h5>
        </div>
        <ul className="sidebar-navigation">
          {isAdmin ? (
            <>
              {" "}
              <li onClick={() => showPage("addService")}>
                <h6>
                  <AddBoxIcon /> Add Service
                </h6>
              </li>
              <li onClick={() => showPage("makeAdmin")}>
                <h6>
                  <SupervisorAccountIcon /> Make Admin
                </h6>
              </li>
              <li onClick={() => showPage("manageServices")}>
                <h6>
                  <BuildIcon /> Manage Services
                </h6>
              </li>
              <li onClick={() => showPage("orderList")}>
                <h6>
                  <SpeakerNotesIcon /> Order List
                </h6>
              </li>{" "}
            </>
          ) : (
            <>
              <li onClick={() => showPage("books")}>
                <h6>
                  <ShoppingCartIcon /> Books
                </h6>
              </li>
              <li onClick={() => showPage("bookingList")}>
                <h6>
                  <TocIcon /> Booking List
                </h6>
              </li>
              <li onClick={() => showPage("addReview")}>
                <h6>
                  <RateReviewIcon /> Review
                </h6>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

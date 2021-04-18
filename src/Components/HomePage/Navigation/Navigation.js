import React, { useContext} from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";

const Navigation = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        setUserInfo(null);
      })
      .catch((error) => {});
  };

  return (
    <Navbar
      style={{ background: "linear-gradient(700deg, #1b96cf, #45b6a7)" }}
      bg=""
      expand="md"
      sticky="top"
    >
      <Navbar.Brand>
        <Link to="/" className="link font-weight-bolder">
          {" "}
          DIGMA. Solution
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <ul className="list-unstyled ">
            <li>
              <Link className="link mr-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {userInfo === null ? (
              <li>
                <Link className="link mr-4" to="/login">
                  LOGIN
                </Link>
              </li>
            ) : (
              <li onClick={handleSignOut} className="link mr-4">
                Logout
              </li>
            )}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

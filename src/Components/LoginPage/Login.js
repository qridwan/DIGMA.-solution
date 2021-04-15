import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <form onsubmit="event.preventDefault()" class="login-box">
              <h1>Login</h1>
              <p class="text-warning"> Please Login With Google!!</p>{" "}
              <input type="text" name="" placeholder="Username" />{" "}
              <input type="password" name="" placeholder="Password" />{" "}
              <small class="forgot text-muted" href="#">
                Forgot password?
              </small>{" "}
              <input type="submit" name="" value="Login" href="#" />
              <div class="col-md-12">
                <ul class="social-network social-circle">
                  <button class="btn btn-danger">
                    <FontAwesomeIcon
                      className="icoGoogle text-light bg-danger"
                      size="3x"
                      flip="verticle"
                      icon={faGoogle}
                    />
                  </button>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

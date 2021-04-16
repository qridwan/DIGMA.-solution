import React, { useContext } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../Firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, setUserInfo] = useContext(UserContext);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedIn = {
          isSigned: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUserInfo(isSignedIn);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: Login.js ~ line 42 ~ .then ~ errorMessage",
          errorMessage
        );
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="login-box">
              <h1>Login</h1>
              <p className="text-warning"> Please Login With Google!!</p>{" "}
              <input type="text" name="" placeholder="Username" />{" "}
              <input type="password" name="" placeholder="Password" />{" "}
              <small className="forgot text-muted">Forgot password?</small>{" "}
              <input type="submit" name="" value="Login" />
            </form>

            <button
              className="btn btn-danger google m-5"
              onClick={handleGoogleSignIn}
            >
              <FontAwesomeIcon
                className="icoGoogle text-light bg-danger"
                size="3x"
                icon={faGoogle}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

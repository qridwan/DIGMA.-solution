import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/HomePage/Navigation/Navigation";
import Home from "./Components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/LoginPage/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookingPage from "./Components/BookingPage/BookingPage";

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Navigation />
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book/:id">
            <BookingPage />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

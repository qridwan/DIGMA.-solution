import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/HomePage/Navigation/Navigation";
import Home from "./Components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/LoginPage/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();
function App() {

  const [userInfo, setUserInfo] = useState({

    isSigned: false,
    name: "",
    email: "",
    photo: "",
  });
  console.log("🚀 ~ file: App.js ~ line 16 ~ App ~ userInfo", userInfo)
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

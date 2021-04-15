import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/HomePage/Navigation/Navigation";
import Home from "./Components/HomePage/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/LoginPage/Login";

function App() {
  return <Router>
    
 <Navigation/>
    <Switch>
      <Route path="/dashboard">
<Dashboard/>
      </Route>
      <Route path="/login">
<Login/>
      </Route>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
  </Router>;
}

export default App;

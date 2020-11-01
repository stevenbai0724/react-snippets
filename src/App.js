import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Events from "./components/Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div className="site-container">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/events" exact component={Events} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

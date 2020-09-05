import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "../SignIn";
import Dashboard from "../Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

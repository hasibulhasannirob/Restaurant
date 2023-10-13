import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contace from "./Contace";

const BodyComponent = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contace} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default BodyComponent;

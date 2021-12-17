import React from "react";
import NavBar from "./NavBar";
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Pizza from "./Pizza";
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Switch>
      <Route path='/Pizza'>
          <Pizza />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        </Switch>
    </>
  );
};
export default App;

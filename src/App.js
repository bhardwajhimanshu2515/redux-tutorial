import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/shared/navbar";
import Login from "../src/components/login";
import Homepage from "../src/components/homepage";
import New from "../src/components/new";
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch >
          <Route exact path="/">
            <Homepage/>
          </Route>
        </Switch>
        <Switch >
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
        <Switch >
          <Route exact path="/new">
            <New/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

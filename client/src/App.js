import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Podcasts from "./pages/Podcasts/Podcasts";
import NoMatch from "./pages/NoMatch/NoMatch";
import SignUp from "./pages/SignUp/SignUp";
import Login from './pages/Login/Login';

function App() {
  return (

    <Router>
      <div>
        <Switch>

          <Route exact path={["/login"]}>
            <Login />
          </Route>

          <Route exact path={["/", "/signup"]}>
            <SignUp />
          </Route>

          <Route exact path={["/podcasts"]}>
            <Podcasts />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

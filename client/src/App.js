import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Podcasts from "./pages/Podcasts";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Login from './pages/Login';

function App() {
  return (

    <Router>
      <div>
        <Nav />
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
          
          <Route exact path="/podcasts/:id">
            {/* <Detail /> */}
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

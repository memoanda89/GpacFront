import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './view/Home';
function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
      {/* <Route path="/user-detail/:userId">
        <UserDetail/>
      </Route> */}
    </Router>
 );
}

export default App;

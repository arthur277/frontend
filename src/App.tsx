import React, { useState } from 'react';
import './App.css';
import Register from './Auth-pages/register/Register.tsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Auth-pages/login/login.tsx'
import Home from './pages/home/Home.tsx';
import TestComp from './pages/testComp/TestComp.tsx';
import PrivateRoute
  from './Middlewear/PrivateRoute.tsx';
import myCards from './components/ui/myCards.tsx';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/test" component={TestComp} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/myCards" component={myCards} />
      </Switch>
    </Router>
  );
}

export default App;

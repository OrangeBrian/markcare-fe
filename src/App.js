import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop'
import Location from './components/Location';
import Branch from './components/Branch';
import BranchConfirm from './components/BranchConfirm';
import DateSelect from './components/DateSelect';
import DateConfirm from './components/DateConfirm';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/' exact>
            <Inicio />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route path='/branch'>
            <Branch />
          </Route>
          <Route path='/BranchConfirm'>
            <BranchConfirm />
          </Route>
          <Route path='/DateSelect'>
            <DateSelect />
          </Route>
          <Route path='/DateConfirm'>
            <DateConfirm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

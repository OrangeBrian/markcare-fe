import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/templates/Inicio';
import Login from './components/templates/Login';
import Register from './components/templates/Register';
import Shop from './components/templates/Shop';
import Location from './components/templates/Location';
import Branch from './components/templates/Branch';
import BranchConfirm from './components/templates/BranchConfirm';
import DateSelect from './components/templates/DateSelect';
import DateConfirm from './components/templates/DateConfirm';
import Editprofile from './components/templates/Editprofile';
import Myshifts from './components/templates/Myshifts';

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
          <Route path='/editprofile'>
            <Editprofile />
          </Route>
          <Route path='/myshifts'>
            <Myshifts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

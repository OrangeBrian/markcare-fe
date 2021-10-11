import React,{Suspense, lazy} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Spinner } from 'reactstrap';
import Index from './components/templates/Index';
import Login from './components/templates/Login';
import Register from './components/templates/Register';
import Location from './components/templates/Location';
import BranchConfirm from './components/templates/BranchConfirm';
import DateSelect from './components/templates/DateSelect';
import DateConfirm from './components/templates/DateConfirm';
import Editprofile from './components/templates/Editprofile';
import Myshifts from './components/templates/Myshifts';

const Branch = lazy(()=>import('./components/templates/Branch'));
const Shop = lazy(()=>import('./components/templates/Shop'));


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
            <Index />
          </Route>
 
          <Route path='/shop'>
          <Suspense delayMs={2000} fallback={<Spinner color='primary'/>}>
              <Shop />
            </Suspense>
          </Route>

          <Route path='/location'>
            <Location />
          </Route>

          <Route path='/branch'>
            <Suspense delayMs={2000} fallback={<Spinner color='primary'  />}>
              <Branch />
            </Suspense>    
          </Route> 

          <Route path='/BranchConfirm'>
            <Suspense delayMs={2000} fallback={<Spinner color='primary'/>}>
              <BranchConfirm />
            </Suspense>
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

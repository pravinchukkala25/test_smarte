import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Employees from './containers/index';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Employees />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

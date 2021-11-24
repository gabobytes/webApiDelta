 import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Factura from './components/Factura';
import Facturas from './components/Facturas';

function App() {

  return(
  <Router>
    <div className="App" class="container">

      <div className="btn-group">
        <Link to="/" className="btn btn-dark">Home</Link>
      </div>

    <Switch>
      <Route path="/" exact>
        <Facturas/>
      </Route>

      <Route path="/Factura/:factura">
        <Factura/>
      </Route>      
    </Switch>
    </div>
    </Router>
  )
 }


export default App;

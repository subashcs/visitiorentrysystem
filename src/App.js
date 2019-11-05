import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable';
import AddEntry from './components/AddEntry';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faBars } from '@fortawesome/free-solid-svg-icons'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";


import AllData from './components/AllData';



function App() {
  const [data,setData]=useState([]);


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} />
      </button>
      <a className="navbar-brand" href="#">Customer Entry System</a>
      
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
 
      
       <ul className="navbar-nav mr-auto">
           
           <li className="nav-item btn  mr-2">
            <Link to="/datatable" className="nav-item">Home</Link>
           </li>
           <li className="nav-item btn mr-2">
            <Link to="/" className="nav-item">View All</Link>
           </li>
           <li className="nav-item btn  mr-2">
            <Link to="/addentry" className="nav-item">Add Entry</Link>
           </li>
           </ul>
           <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>

          
          </div>
      </nav>
      <Switch>
       <Route path="/addentry">
           <AddEntry/>       
        </Route>    
        <Route path="/datatable">
           <DataTable/>
         </Route> 
         <Route path="/">
           <AllData/>
         </Route>
      </Switch>
    </div>
  );
}

export default App;

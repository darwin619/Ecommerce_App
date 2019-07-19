import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';



function App() {
  return (
    <div className = "Homepage">
    <Header />
    <Switch> 
         <Route exact path='/' component={Homepage} /> 
         <Route exact path='/shop' component={Shop} /> 
    </Switch>     
    </div>
  );
}

export default App;

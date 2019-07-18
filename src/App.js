import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

const Other = () => {
	return(
		<h1> WTF BRO!!!! </h1>
		);
}

function App() {
  return (
    <div className = "Homepage">
    <Switch> 
         <Route exact path='/' component={Homepage} /> 
         <Route path='/hats' component={Other} /> 
    </Switch>     
    </div>
  );
}

export default App;

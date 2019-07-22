import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import { auth } from './Firebase/Firebase.utils';
import { CreateUserProfileDocument } from './Firebase/Firebase.utils';
import Logging from './Pages/Logging/Logging';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {      //returns a listener which stops when we call it
           if(user) {
            const userRef = await CreateUserProfileDocument(user);
            
            userRef.onSnapshot(snapShot => {
              this.setState({ 
                  currentUser: {
                    id: snapShot.id,
                    ...snapShot.data()
                  }
              })
              console.log(this.state.currentUser)
            })

           }
           else {
            this.setState({ currentUser: user })
           }
        })  
    }
    
    componentWillUnmount() {
     this.unsubscribeFromAuth();
    }

render() {
  return (
    <div className = "Homepage">
    <Header currentUser={this.state.currentUser} />
    <Switch> 
         <Route exact path='/' component={Homepage} /> 
         <Route exact path='/shop' component={Shop} /> 
         <Route exact path='/Logging' component={Logging} /> 
    </Switch>     
    </div>
  );
}
}
export default App;

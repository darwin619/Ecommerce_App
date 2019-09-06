import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import { auth } from './Firebase/Firebase.utils';
import { CreateUserProfileDocument} from './Firebase/Firebase.utils';
import Logging from './Pages/Logging/Logging';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user-actions';
import { selectCurrentUser } from './Redux/User/user-selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './Pages/Checkout/Checkout'


class App extends React.Component {

unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {      //returns a listener which stops when we call it
           if(user) {
            const userRef = await CreateUserProfileDocument(user);
            
            userRef.onSnapshot(snapShot => {
              this.props.setCurrentUser({ 
                    id: snapShot.id,
                    ...snapShot.data()
                  
              });
            });

           }
           else {
            this.props.setCurrentUser(user)
           }
        })  
    }
    
    componentWillUnmount() {
     this.unsubscribeFromAuth();
    }

render() {
  return (
    <div className = "Homepage">
    <Header />
    <Switch> 
         <Route exact path='/' component={Homepage} /> 
         <Route path='/shop' component={Shop} /> 
         <Route exact path='/checkout' component={Checkout} /> 
         <Route exact path='/Logging' 
          render={() => 
          this.props.currentUser
          ? (
            <Redirect to='/' />
            )
          : (
            <Logging />
            )
          }
          /> 
    </Switch>     
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return(
  {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))

  }
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

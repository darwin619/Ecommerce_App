import React, { lazy, Suspense } from "react";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./Firebase/Firebase.utils";
import { CreateUserProfileDocument } from "./Firebase/Firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user-actions";
import { selectCurrentUser } from "./Redux/User/user-selectors";
import { createStructuredSelector } from "reselect";
import Spinner from "./Components/Spinner/Spinner";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { GlobalStyle } from "./Global.styles";

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const Logging = lazy(() => import("./Pages/Logging/Logging"));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      //returns a listener which stops when we call it
      if (user) {
        const userRef = await CreateUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/Logging"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <Logging />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

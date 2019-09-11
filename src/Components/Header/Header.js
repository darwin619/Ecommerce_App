import React from "react";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import { connect } from "react-redux";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/User/user-selectors";
import { selectCartHidden } from "../../Redux/Cart/cart-selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/logging">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

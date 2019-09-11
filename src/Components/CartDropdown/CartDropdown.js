import React from "react";
import CartItems from "../CartItems/CartItems";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/Cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleHideDropdown } from "../../Redux/Cart/cart-actions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartEmptyMessage,
  CustomButtonContainer
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItems key={cartItem.id} items={cartItem} />
          ))
        ) : (
          <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButtonContainer
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleHideDropdown());
        }}
      >
        Go To Checkout
      </CustomButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

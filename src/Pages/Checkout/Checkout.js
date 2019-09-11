import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/cart-selectors";
import { connect } from "react-redux";
import { selectTotalPrice } from "../../Redux/Cart/cart-selectors";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './Checkout.styles';

const Checkout = ({ cartItems, totalPrice }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
    
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);

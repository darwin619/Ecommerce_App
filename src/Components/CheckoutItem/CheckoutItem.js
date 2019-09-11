import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  removeFromCheckout,
  addItem
} from "../../Redux/Cart/cart-actions";

import {
  CheckoutItemContainer,
  ProductImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItem.styles";

const CheckoutItem = ({
  cartItem,
  removeItem,
  removeFromCheckout,
  addItem
}) => {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <CheckoutItemContainer>
      <ProductImageContainer>
        <img src={imageUrl} alt="item" />
      </ProductImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeFromCheckout(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  removeFromCheckout: item => dispatch(removeFromCheckout(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

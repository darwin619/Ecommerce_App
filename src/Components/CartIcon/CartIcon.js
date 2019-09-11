import React from "react";
import { connect } from "react-redux";
import { toggleHideDropdown } from "../../Redux/Cart/cart-actions";
import { selectCartItemsCount } from "../../Redux/Cart/cart-selectors";
import { CartIconContainer, CartIconImage, ItemCount } from "./CartIcon.styles";

const CartIcon = ({ toggleHideDropdown, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleHideDropdown}>
      <CartIconImage />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleHideDropdown: () => dispatch(toggleHideDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

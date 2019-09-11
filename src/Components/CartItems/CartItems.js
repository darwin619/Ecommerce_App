import React from "react";
import {
  CartItemsContainer,
  ProductImage,
  CartItemDetails,
  ItemName,
  ItemPrice
} from "./CartItems.styles";

const CartItems = ({ items: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemsContainer>
      <ProductImage src={imageUrl} alt="productImage" />
      <CartItemDetails>
        <ItemName className="name">{name}</ItemName>
        <ItemPrice className="price">
          {quantity} x ${price}
        </ItemPrice>
      </CartItemDetails>
    </CartItemsContainer>
  );
};

export default React.memo(CartItems);

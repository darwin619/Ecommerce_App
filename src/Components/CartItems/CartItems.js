import React from 'react';
import './CartItems.scss';

const CartItems = ({items: {imageUrl, price, name, quantity}}) => {
	return(
		<div className="cart-item">
		<img src={imageUrl} alt="productImage"/>
		<div className="item-details">
		<span className="name">{name}</span>
		<span className="price">{quantity} x ${price}</span>
		</div>
		</div>
		);
}

export default React.memo(CartItems);
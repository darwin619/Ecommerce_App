import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItems from '../CartItems/CartItems';
import {connect} from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/cart-selectors';

const CartDropdown = ({cartItems}) => {
	return(
		<div className="cart-dropdown">
		<div className="cart-items">
		{
			cartItems.map(cartItem => <CartItems key={cartItem.id} items={cartItem} />)
		}
		</div>
		<CustomButton>Go To Checkout</CustomButton>
		</div>
		);
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
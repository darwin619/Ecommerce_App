import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItems from '../CartItems/CartItems';
import {connect} from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import {toggleHideDropdown} from '../../Redux/Cart/cart-actions';


const CartDropdown = ({cartItems, history, dispatch}) => {
	return(
		<div className="cart-dropdown">
		<div className="cart-items">
		{ 	cartItems.length 
			? ( cartItems.map(cartItem => <CartItems key={cartItem.id} items={cartItem} />))
			: ( <span className="empty-message">Your cart is empty</span> )
		}
		</div>
		<CustomButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleHideDropdown())}}
			>
			Go To Checkout
		</CustomButton>
		</div>
		);
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
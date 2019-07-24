import React from 'react';
import './CartIcon.scss';
import { ReactComponent as Cart } from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux';
import {toggleHideDropdown} from '../../Redux/Cart/cart-actions';

const CartIcon = ({toggleHideDropdown}) => {
	return (
		<div className="cart-icon" onClick={toggleHideDropdown}>
		<Cart className="shopping-icon" />
		<span className="item-count">0</span>
		</div>
		);
}
const mapDispatchToProps = dispatch => ({ 
	toggleHideDropdown: () => dispatch(toggleHideDropdown())
}) 

export default connect(null, mapDispatchToProps)(CartIcon);
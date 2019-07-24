import React from 'react';
import './CartIcon.scss';
import { ReactComponent as Cart } from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux';
import {toggleHideDropdown} from '../../Redux/Cart/cart-actions';
import { selectCartItemsCount } from '../../Redux/Cart/cart-selectors';

const CartIcon = ({toggleHideDropdown, itemCount}) => {
	return (
		<div className="cart-icon" onClick={toggleHideDropdown}>
		<Cart className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
		</div>
		);
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({ 
	toggleHideDropdown: () => dispatch(toggleHideDropdown())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
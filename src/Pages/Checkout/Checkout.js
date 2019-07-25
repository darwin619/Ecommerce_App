import React from 'react';
import './Checkout.scss';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../Redux/Cart/cart-selectors';
import {connect} from 'react-redux';
import {selectTotalPrice} from '../../Redux/Cart/cart-selectors';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

const Checkout = ({ cartItems, totalPrice }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
		  cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    
    <div className='total'>TOTAL: ${totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import { connect } from 'react-redux';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/user-selectors';
import { selectCartHidden } from '../../Redux/Cart/cart-selectors';


const Header = ({ currentUser,hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" 
				  to="/">
			<Logo className="logo" />
			</Link>
		<div className="options">
		<Link className="option" to="/shop">
		 	Shop
		</Link>
		<Link className="option" to="/contact">
		 	Contact
		</Link>

		{ 
		 currentUser
		 ?
		(<div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>)
		: 
		(<Link className="option" to="/logging">
		 	Sign In
		  </Link>)
		}
		<CartIcon />

	  </div>
	  { hidden 
	  	? null
	  	: <CartDropdown />
	  }
     </div>
		);
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import './Header.scss'
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';

const Header = ({ currentUser }) => {
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

	  </div>
     </div>
		);
}

export default Header;
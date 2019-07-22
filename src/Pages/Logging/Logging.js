import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import './Logging.scss';

const Logging = () => {
	return (
		<div className="Logging">
			<SignIn />
			<SignUp />
		</div>
		);
}

export default Logging;
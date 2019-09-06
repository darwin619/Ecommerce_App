import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, CreateUserProfileDocument } from '../../Firebase/Firebase.utils';
import './SignUp.scss';

const SignUp = () => {
 	const [userData, setUserData] = useState({displayName: '', email: '', password: '', confirmPassword: ''})

	const {displayName, email, password, confirmPassword} = userData;

	const handleSubmit = async event => {
		event.preventDefault();

		if(password !== confirmPassword) {
			alert('Passwords dont match')
			return;
		}

		try {
        const { user } = await auth.createUserWithEmailAndPassword(email,password);

	      await CreateUserProfileDocument(user, { displayName });

	      setUserData({
	      	...userData,
	        displayName: '',
	        email: '',
	        password: '',
	        confirmPassword: ''
	      });
	    } catch (error) {
	      console.error(error);
	    }
	  };

	const handleChange = event => {
		const { value, name } = event.target;

		setUserData({ ...userData, [name]: value });
	}

	return (
		<div className="sign-up">
		<h2 className="title">I do not have an account</h2>
		<span>Sign up with email and password</span>

		<form action="POST" onSubmit={handleSubmit} >

		<FormInput 
		name="displayName" 
		type="text" 
		value={displayName} 
		handleChange={handleChange} 
		label = "Name"
		required />

		<FormInput 
		name="email" 
		type="email" 
		value={email} 
		handleChange={handleChange} 
		label = "Email"
		required />

		<FormInput 
		name="password" 
		type="password" 
		value={password} 
		handleChange={handleChange} 
		label = "Password"
		required />

		<FormInput 
		name="confirmPassword" 
		type="password" 
		value={confirmPassword} 
		handleChange={handleChange} 
		label = "Confirm Password"
		required />

		<div className="customButton" >
		<CustomButton type="submit"> Sign Up </CustomButton>
		</div>

		</form>
			

		</div>
		);
}

export default SignUp;
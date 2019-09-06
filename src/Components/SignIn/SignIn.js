import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';

const SignIn = () => {
	const [userData, setUserData] = useState({email: '', password: ''})

	const { email, password } = userData;

	const handleSubmit = async event => {
	   event.preventDefault();

	   await auth.signInWithEmailAndPassword(email,password);
	   setUserData({ ...userData , email: '', password: '' })
}


	const handleChange = event => {
	    const { value, name } = event.target;

	    setUserData({ ...userData ,[name]: value });
}

	return (
		<div className="SignIn">
		<h2 className="title">I already have an account</h2>
		<span>Sign in with email and password</span>

		<form action="POST" onSubmit={handleSubmit} >

		<FormInput 
		name="email" 
		type="email" 
		value={email} 
		handleChange={handleChange} 
		label = "email"
		required />

		<FormInput 
		name="password" 
		type="password" 
		value={password} 
		handleChange={handleChange} 
		label = "password"
		required />

		<div className="customButton" >
		<CustomButton type="submit"> Sign In </CustomButton>
		<CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
		Log in With Google 
		</CustomButton>
		</div>

		</form>
			

		</div>
		);
}

export default SignIn;
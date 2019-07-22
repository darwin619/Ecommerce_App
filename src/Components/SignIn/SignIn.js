import React from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';

class SignIn extends React.Component {
	constructor() {
	super();
	this.state = {
		email: '',
		password: ''
	}
}

handleSubmit = async event => {
	event.preventDefault();
    
    const { email, password } = this.state;

	await auth.signInWithEmailAndPassword(email,password);
	this.setState( { email: '', password: '' } )

}

handleChange = event => {
	const { value, name } = event.target;

	this.setState({ [name]: value });
}


render() {
	return (
		<div className="SignIn">
		<h2 className="title">I already have an account</h2>
		<span>Sign in with email and password</span>

		<form action="POST" onSubmit={this.handleSubmit} >

		<FormInput 
		name="email" 
		type="email" 
		value={this.state.email} 
		handleChange={this.handleChange} 
		label = "email"
		required />

		<FormInput 
		name="password" 
		type="password" 
		value={this.state.password} 
		handleChange={this.handleChange} 
		label = "password"
		required />

		<div className="customButton" >
		<CustomButton type="submit"> Sign In </CustomButton>
		<CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
		Sign In With Google 
		</CustomButton>
		</div>

		</form>
			

		</div>
		);
}
}

export default SignIn;
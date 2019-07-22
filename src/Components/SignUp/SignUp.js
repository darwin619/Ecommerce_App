import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, CreateUserProfileDocument } from '../../Firebase/Firebase.utils';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmPassword} = this.state;

		if(password !== confirmPassword) {
			alert('Passwords dont match')
			return;
		}

		try {
        const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
	    );

	      await CreateUserProfileDocument(user, { displayName });

	      this.setState({
	        displayName: '',
	        email: '',
	        password: '',
	        confirmPassword: ''
	      });
	    } catch (error) {
	      console.error(error);
	    }
	  };

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}


render() {
	return (
		<div className="sign-up">
		<h2 className="title">I do not have an account</h2>
		<span>Sign up with email and password</span>

		<form action="POST" onSubmit={this.handleSubmit} >

		<FormInput 
		name="displayName" 
		type="text" 
		value={this.state.displayName} 
		handleChange={this.handleChange} 
		label = "Name"
		required />

		<FormInput 
		name="email" 
		type="email" 
		value={this.state.email} 
		handleChange={this.handleChange} 
		label = "Email"
		required />

		<FormInput 
		name="password" 
		type="password" 
		value={this.state.password} 
		handleChange={this.handleChange} 
		label = "Password"
		required />

		<FormInput 
		name="confirmPassword" 
		type="password" 
		value={this.state.confirmPassword} 
		handleChange={this.handleChange} 
		label = "Confirm Password"
		required />

		<div className="customButton" >
		<CustomButton type="submit"> Sign Up </CustomButton>
		</div>

		</form>
			

		</div>
		);
}
}

export default SignUp;
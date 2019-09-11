import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./SignIn.styles";

const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { email, password } = userData;

  const handleSubmit = async event => {
    event.preventDefault();

    await auth.signInWithEmailAndPassword(email, password);
    setUserData({ ...userData, email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with email and password</span>

      <form action="POST" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Login With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

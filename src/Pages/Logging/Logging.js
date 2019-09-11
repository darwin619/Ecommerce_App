import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import { LoggingPageContainer } from './Logging.styles';

const Logging = () => {
  return (
    <LoggingPageContainer>
      <SignIn />
      <SignUp />
    </LoggingPageContainer>
  );
};

export default Logging;

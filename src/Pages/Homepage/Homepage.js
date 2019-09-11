import React from "react";
import Directory from "../.././Components/Directory/Directory";
import { HomePageContainer } from "./Homepage.styles";

const Homepage = ({ history }) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;

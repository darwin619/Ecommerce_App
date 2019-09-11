import React from "react";
import "./ErrorBoundary.styles.js";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./ErrorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(`Error Message: ${error}`);
    console.log(`Error Info: ${info}`);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer
            imageUrl="https://i.imgur.com/lKJiT77.png"
            alt="error-image"
          />
          <ErrorImageText>A Dog Ate this Page</ErrorImageText>
          <ErrorImageText>(Something Went Wrong)</ErrorImageText>
        </ErrorImageOverlay>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

import React from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        hasErrored: false
   }
}

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error,info) {
    console.log(`Error Message: ${error}`)
    console.log(`Error Info: ${info}`)
  }

render() {
   if(this.state.hasErrored) {
    return (
        <div className="error-image-overlay" >
          <img src="https://i.imgur.com/lKJiT77.png" alt="error-image" className="error-image"/>
          <h2 className="error-text">A Dog Ate this Page</h2> 
           <span className="error-text">(Something Went Wrong)</span> 
        </div>
      );
   } 

   else {
   return this.props.children;
 }
}
}


export default ErrorBoundary;

import React from 'react';
import './WithSpinner.scss';
import Spinner from '../Spinner/Spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return (
        isLoading ?  <Spinner /> : <WrappedComponent {...otherProps} />
   );
};

export default WithSpinner;
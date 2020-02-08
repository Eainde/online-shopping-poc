import React from 'react';

//import './custom-button.styles.scss';

import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children,...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

/* const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
); */


export default CustomButton;
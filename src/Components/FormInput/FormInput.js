import React from "react";

import {
  InputGroupContainer,
  InputContainer,
  LabelContainer
} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <InputGroupContainer>
      <InputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <LabelContainer className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </LabelContainer>
      ) : null}
    </InputGroupContainer>
  );
};

export default FormInput;

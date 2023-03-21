import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;

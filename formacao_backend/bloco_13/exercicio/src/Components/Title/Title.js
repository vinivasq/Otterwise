import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

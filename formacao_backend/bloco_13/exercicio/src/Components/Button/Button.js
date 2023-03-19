import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: blueviolet;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  border: none;
  box-shadow: 1px 0px 4px #00000075;

  &:hover {
    transition: all 300ms;
    opacity: 0.9;
  }
`;

const Button = () => {
  return <StyledButton formAction="submit">Enviar</StyledButton>;
};

export default Button;

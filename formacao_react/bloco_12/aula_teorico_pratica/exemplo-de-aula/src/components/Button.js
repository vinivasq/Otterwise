import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: 1px solid blueviolet;
  border-radius: 5px;
  color: blueviolet;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.267);

  &:hover {
    background-color: rgba(222, 187, 255, 0.123);
    transition: all 500ms;
  }

  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
`;

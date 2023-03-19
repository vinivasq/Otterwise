import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  width: 90%;
  border: 1px solid black;

  &:focus {
    transition: all 400ms;
    border: 1px solid blueviolet;
    outline: none;
  }
  @media screen and (min-width: 992px) {
    width: 350px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = (props) => {
  const { label } = props;

  return (
    <StyledLabel>
      {label}:
      <StyledInput />
    </StyledLabel>
  );
};

export default Input;

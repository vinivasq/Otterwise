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

const Input = (props) => {
  const { type = "text" } = props;

  return <StyledInput type={type} />;
};

export default Input;

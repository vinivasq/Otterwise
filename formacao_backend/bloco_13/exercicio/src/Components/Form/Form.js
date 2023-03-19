import styled from "styled-components";
import Button from "../Button/Button";
import Input from "./Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Form = () => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input label="Selecione uma Imagem" />
      <Input label="Titulo" />
      <Input label="Conteudo" />
      <Input label="Usuário" />
      <Button />
    </StyledForm>
  );
};

export default Form;

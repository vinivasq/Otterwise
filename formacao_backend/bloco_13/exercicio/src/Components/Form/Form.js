import styled from "styled-components";
import Label from "./Label";
import Input from "./Input";
import Button from "../Button/Button";

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
        console.log(e);
      }}
    >
      <Label>
        Selecione uma imagem:
        <input type="file" />
      </Label>
      <Label>
        Título:
        <Input />
      </Label>
      <Label>
        Conteúdo
        <Input />
      </Label>
      <Label>
        Usuário
        <Input />
      </Label>
      <Button />{" "}
    </StyledForm>
  );
};

export default Form;

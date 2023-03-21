import styled from "styled-components";
import Label from "./Label";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { createPost } from "../../controller/createPost";

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("cover", data.cover[0]);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("authorId", data.authorId);

    try {
      const response = await createPost(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Selecione uma imagem:
        <input type="file" {...register("cover")} />
      </Label>
      <Label>
        Título:
        <StyledInput {...register("title")} />
      </Label>
      <Label>
        Conteúdo
        <StyledInput {...register("content")} />
      </Label>
      <Label>
        Usuário
        <StyledInput {...register("authorId")} />
      </Label>
      <Button />
    </StyledForm>
  );
};

export default Form;

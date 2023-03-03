import { post } from "../services/post";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Exercicio = () => {
  const schema = yup
    .object({
      title: yup.string().required("O título é obrigatório"),
      description: yup
        .string()
        .min(30, "A descrição deve conter no mínimo 30 caracteres")
        .required("A descrição é obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(errors);
    try {
      console.log(data);
      const response = await post(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}

      <input type="text" {...register("description")} />
      {errors.description && <span>{errors.description.message}</span>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Exercicio;

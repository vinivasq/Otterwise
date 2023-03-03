import { useForm } from "react-hook-form";
import { login } from "../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ExemploAula() {
  const schema = yup
    .object({
      email: yup.string().email().required("Email é obrigatório"),
      password: yup
        .string()
        .min(5, "Minimo de 5 caracteres")
        .required("Senha é obrigatória"),
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
    try {
      console.log(data);
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Enviar</button>
    </form>
  );
}

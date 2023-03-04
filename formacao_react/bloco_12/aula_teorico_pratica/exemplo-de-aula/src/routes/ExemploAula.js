import { useForm } from "react-hook-form";
import { login } from "../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, Stack, Flex, Text } from "@chakra-ui/react";
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
    <Flex
      as="form"
      mt="20px"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing="4" w={["100%", "350px"]}>
        <Text textAlign="center" fontSize="22px">
          Meu Formulário
        </Text>
        <Input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <Input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}

        <Button colorScheme="blue" type="submit">
          Enviar
        </Button>
      </Stack>
    </Flex>
  );
}

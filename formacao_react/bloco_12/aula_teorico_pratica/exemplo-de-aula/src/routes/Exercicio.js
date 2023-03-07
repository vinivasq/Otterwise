import { post } from "../services/post";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Input, Button, Stack, StackDivider } from "@chakra-ui/react";
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
    <Flex
      as="form"
      direction="column"
      m={"auto"}
      mt="1rem"
      gap="0.5rem"
      maxWidth={["90%", "350px"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing="1rem" divider={<StackDivider />}>
        <label>
          Título da postagem
          <Input type="text" {...register("title")} />
        </label>
        {errors.title && <span>{errors.title.message}</span>}
        <label>
          Descrição
          <Input type="text" {...register("description")} />
        </label>
        {errors.description && <span>{errors.description.message}</span>}
      </Stack>

      <Button colorScheme="purple" type="submit">
        Enviar
      </Button>
    </Flex>
  );
};

export default Exercicio;

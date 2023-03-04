import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Flex, Input, Button, Stack, Select } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("O nome do carro é obrigatório"),
  brand: yup.string().required("A marca do carro é obrigatória"),
  color: yup.string().required("A cor do carro é obrigatória"),
  model: yup.string().required("O modelo do carro é obrigatório"),
});

const saveData = (id, data) => {
  localStorage.setItem(`car-${id}`, JSON.stringify(data));
};

const getData = (id) => {
  return JSON.parse(localStorage.getItem(`car-${id}`));
};

const CarForm = () => {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const request = async () => {
      const data = await getData(id);
      if (!data) {
        setNotFound(true);
        return;
      }
      Object.entries(data).forEach(([key, value]) => {
        setValue(key, value);
      });
      console.log(data);
    };
    if (id) {
      request();
    }
  });

  const onSubmit = (data) => {
    if (id) {
      saveData(id, data);
      toast.success("Carro editado com sucesso!");
    } else {
      saveData(localStorage.length + 1, data);
      reset();
      toast.success("Carro criado com sucesso");
    }
  };

  if (notFound) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <Flex
      as="form"
      mt={5}
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack w={["100%", "300px", "500px"]} spacing={4}>
        <label>
          Nome do Carro:
          <Input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <Select
          placeholder="Selecione uma marca"
          size={"sm"}
          defaultValue={""}
          {...register("brand")}
        >
          <option value="" disabled hidden>
            Selecione uma marca
          </option>
          <option value="bmw">BMW</option>
          <option value="audi">Audi</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="chebvrolet">Chevrolet</option>
          <option value="ford">Ford</option>
        </Select>
        {errors.brand && <span>{errors.brand.message}</span>}
        <label>
          Cor do Carro:
          <Input type="text" {...register("color")} />
          {errors.color && <span>{errors.color.message}</span>}
        </label>
        <label>
          Modelo do Carro:
          <Input type="text" {...register("model")} />
          {errors.model && <span>{errors.model.message}</span>}
        </label>
        <Button colorScheme="purple" type="submit">
          Enviar
        </Button>
      </Stack>
    </Flex>
  );
};

export default CarForm;

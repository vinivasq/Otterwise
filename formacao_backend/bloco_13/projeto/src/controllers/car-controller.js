import { prisma } from "../helpers/utils.js";

export const getAllCars = async (request, reply) => {
  try {
    const cars = await prisma.car.findMany();
    return cars;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível listar os carros");
  }
};

export const createCar = async (request, reply) => {
  const { name, year, brandId, image_url } = request.body;
  try {
    const post = await prisma.car.create({
      data: {
        name,
        year,
        brandId,
        image_url,
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o carro");
  }
};

export const editCar = async (request, reply) => {
  const { carId, name, year, brandId, image_url } = request.body;
  try {
    const car = await prisma.car.update({
      where: {
        id: carId,
      },
      data: {
        name,
        year,
        brandId,
        image_url,
      },
    });
    return car;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível editar o carro");
  }
};

export const deleteCar = async (request, reply) => {
  const { carId } = request.body;
  try {
    const car = await prisma.car.delete({
      where: {
        id: carId,
      },
    });
    return car;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível deletar o carro");
  }
};

import { prisma } from "../helpers/utils.js";

export const getAllBrands = async (request, reply) => {
  try {
    const brands = await prisma.brand.findMany();
    return brands;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível listar as marcas");
  }
};

export const createBrand = async (request, reply) => {
  const { name } = request.body;
  try {
    const post = await prisma.brand.create({
      data: {
        name,
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar a marca");
  }
};

export const editBrand = async (request, reply) => {
  const { brandId, name } = request.body;
  try {
    const brand = await prisma.brand.update({
      where: {
        id: brandId,
      },
      data: {
        name,
      },
    });

    return brand;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível editar a marca");
  }
};

export const deleteBrand = async (request, reply) => {
  const { brandId } = request.body;
  try {
    const brand = await prisma.brand.delete({
      where: {
        id: brandId,
      },
    });
    return brand;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível deletar a marca");
  }
};

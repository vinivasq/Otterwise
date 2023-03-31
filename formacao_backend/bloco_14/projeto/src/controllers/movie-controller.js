import { prisma } from "../helpers/utils.js";

export const listMovie = async (request, reply) => {
  const { id, title } = request.query;

  try {
    if (id) {
      const movie = await prisma.movie.findUnique({
        where: {
          id: Number(id),
        },
      });
      return movie;
    }

    if (title) {
      const movie = await prisma.movie.findMany({
        where: {
          title: {
            contains: title,
          },
        },
      });
      return movie;
    }

    return await prisma.movie.findMany();
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível listar o filme");
  }
};

export const createMovie = async (request, reply) => {
  const { title, description, genderId, userId } = request.body;

  try {
    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        genderId,
        userId,
      },
    });
    return movie;
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível criar o filme");
  }
};

export const editMovie = async (request, reply) => {
  const { movieId, title, description, genderId } = request.body;

  try {
    const movie = await prisma.movie.update({
      where: {
        id: movieId,
      },
      data: {
        title,
        description,
        genderId,
      },
    });
    return movie;
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível editar o filme");
  }
};

export const deleteMovie = async (request, reply) => {
  const { id } = request.body;

  try {
    const movie = await prisma.movie.delete({
      where: {
        id,
      },
    });
    return movie;
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível deletar o filme");
  }
};

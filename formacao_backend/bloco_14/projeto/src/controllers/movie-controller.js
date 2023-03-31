import { prisma } from "../helpers/utils.js";

export const listAll = async (request, reply) => {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível listar filmes");
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

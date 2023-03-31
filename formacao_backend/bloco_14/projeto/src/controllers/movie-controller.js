import { prisma } from "../helpers/utils.js";

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

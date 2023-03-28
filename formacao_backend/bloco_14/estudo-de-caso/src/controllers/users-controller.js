import { prisma } from "../helpers/utils.js";

export const getAll = async (request, reply) => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    reply.status(500).send("Não foi possível carregar os usuários");
    console.log(error);
  }
};

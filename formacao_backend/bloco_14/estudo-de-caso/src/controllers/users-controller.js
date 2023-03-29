import { prisma } from "../helpers/utils.js";

export const getAll = async (request, reply) => {
  console.log(request.user);
  try {
    const users = await prisma.user.findMany({
      //select é filtro pra não retornar o password
      select: {
        email: true,
        id: true,
      },
    });
    return users;
  } catch (error) {
    reply.status(500).send("Não foi possível carregar os usuários");
    console.log(error);
  }
};

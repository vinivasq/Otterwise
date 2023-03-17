import { prisma } from "../helpers/utils.js";

export const getAll = async (request, reply) => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

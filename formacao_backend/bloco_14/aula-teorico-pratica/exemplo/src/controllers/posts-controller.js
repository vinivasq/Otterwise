import { prisma } from "../helpers/utils.js";

export const getAll = async (request, reply) => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível carregar os posts");
  }
};

export const create = async (request, reply) => {
  try {
    const { title, content, authorId } = request.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: Number(authorId) },
        },
      },
    });
    reply.send(post);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o post");
  }
};

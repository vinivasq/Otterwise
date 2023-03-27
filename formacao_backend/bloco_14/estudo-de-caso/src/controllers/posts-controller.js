import { prisma } from "../helpers/utils.js";

const formatOrder = (item) => {
  const split = item.split(".");
  return {
    [split[0]]: split[1],
  };
};

export const getAll = async (request, reply) => {
  try {
    const { email, orderBy } = request.query;
    let orderFilter = null;
    if (Array.isArray(orderBy)) {
      orderFilter = orderBy.map(formatOrder);
    } else {
      orderFilter = [formatOrder(orderBy)];
    }

    const posts = await prisma.post.findMany({
      orderBy: orderFilter,
      where: {
        author: {
          email: {
            contains: email,
          },
        },
      },
    });
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

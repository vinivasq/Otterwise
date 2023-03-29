import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const login = async (request, reply) => {
  const { email, password } = request.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return reply.status(401).send("Usuário ou senha incorretos");
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send("Usuário ou senha incorretos");
    }

    const { password: pass, ...data } = user;
    return reply.send({
      user: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    reply.status(500).send("Não foi possível realizar o login");
    console.log(error);
  }
};

export const signUp = async (request, reply) => {
  try {
    const { email, password: pass } = request.body;
    const password = await hashPassword(pass);
    const { password: hashedPassword, ...user } = await prisma.user.create({
      //desestruturação para não retornar a senha
      data: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    reply.status(400).send("Usuário já existente");
  }
};

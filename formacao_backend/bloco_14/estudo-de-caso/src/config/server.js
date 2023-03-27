import Fastify from "fastify";
import usersRoutes from "../routes/users-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoutes);

export default fastify;

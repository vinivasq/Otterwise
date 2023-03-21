import Fastify from "fastify";
import brandRoutes from "../routes/brand-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(brandRoutes);

export default fastify;

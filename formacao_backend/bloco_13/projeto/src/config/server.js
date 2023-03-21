import Fastify from "fastify";
import brandRoutes from "../routes/brand-routes.js";
import carRoutes from "../routes/car-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(brandRoutes);
fastify.register(carRoutes);

export default fastify;

import * as brandController from "../controllers/brand-controller.js";

const routes = [
  {
    method: "GET",
    url: "/brands",
    handler: brandController.getAllBrands,
  },
  {
    method: "POST",
    url: "/brands",
    handler: brandController.createBrand,
  },
  {
    method: "PUT",
    url: "/brands",
    handler: brandController.editBrand,
  },
  {
    method: "DELETE",
    url: "/brands",
    handler: brandController.deleteBrand,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};

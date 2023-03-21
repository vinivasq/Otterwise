import * as brandController from "../controllers/brand-controller.js";

const routes = [
  {
    method: "GET",
    url: "/brand",
    handler: brandController.getAllBrands,
  },
  {
    method: "POST",
    url: "/brand",
    handler: brandController.createBrand,
  },
  {
    method: "PUT",
    url: "/brand",
    handler: brandController.editBrand,
  },
  {
    method: "DELETE",
    url: "/brand",
    handler: brandController.deleteBrand,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};

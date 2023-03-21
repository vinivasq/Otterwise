import * as carController from "../controllers/car-controller.js";

const routes = [
  {
    method: "GET",
    url: "/cars",
    handler: carController.getAllCars,
  },
  {
    method: "POST",
    url: "/cars",
    handler: carController.createCar,
  },
  {
    method: "PUT",
    url: "/cars",
    handler: carController.editCar,
  },
  {
    method: "DELETE",
    url: "/cars",
    handler: carController.deleteCar,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};

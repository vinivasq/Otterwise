import * as authController from "../controllers/auth-controller.js";

const routes = [
  {
    method: "POST",
    url: "/login",
    handler: authController.login,
  },
  {
    method: "POST",
    url: "/signup",
    handler: authController.signUp,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};

import { createRequire } from "module";
import { genSaltSync, hash } from "bcrypt";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");

export const prisma = new PrismaClient();

export const hashPassword = (password) => {
  const salt = genSaltSync(10);
  return new Promise((res) => {
    hash(password, salt, (error, saltedPassword) => {
      res(saltedPassword);
    });
  });
};

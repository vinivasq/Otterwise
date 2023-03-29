import { createRequire } from "module";
import { compare, genSaltSync, hash } from "bcrypt";
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

export const comparePassword = (password, hashedPassword) => {
  return new Promise((res, rej) => {
    compare(password, hashedPassword, (err, same) => {
      if (err) res(false);
      else res(same);
    });
  });
};

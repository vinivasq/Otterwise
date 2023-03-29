import { createRequire } from "module";
import { compare, genSaltSync, hash } from "bcrypt";
import jwt from "jsonwebtoken";
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

export const createAccessToken = (data) => {
  return new Promise((res, rej) => {
    jwt.sign(data, process.env.JWT_SECRET, {}, (err, token) => {
      if (err) rej(err);
      else res(token);
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((res, rej) => {
    if (!token) {
      rej("Token inválido");
    }
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decodedData) => {
      if (err) rej(err);
      res(decodedData);
    });
  });
};

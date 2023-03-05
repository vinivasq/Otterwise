import client from "../providers/client";

export const getPost = (id) => client.get("/posts", id);

import client from "../providers/client.js";

export const listAllPosts = (params) => client.get("/posts", { params });

export const getPost = (id) => client.get(`/posts/${id}`);

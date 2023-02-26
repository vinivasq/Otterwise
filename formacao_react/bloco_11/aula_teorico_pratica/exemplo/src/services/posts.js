import client from "../providers/client.js";

export const listAllPosts = () => client.get("/posts");

export const getPost = (id) => client.get(`/posts/${id}`);

import client from "../providers/client.js";

export const listAllPosts = () => client.get("/posts")

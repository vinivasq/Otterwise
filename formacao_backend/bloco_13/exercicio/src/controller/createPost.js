import client from "../provider/client";

export const createPost = (data) => client.post("/posts", data);

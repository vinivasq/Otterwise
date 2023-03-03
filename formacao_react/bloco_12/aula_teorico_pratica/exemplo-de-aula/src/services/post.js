import client from "../providers/client";

export const post = (data) => client.post("/posts", data)
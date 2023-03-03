import client from "../providers/client";

export const login = async (data) => client.post("/posts", data);

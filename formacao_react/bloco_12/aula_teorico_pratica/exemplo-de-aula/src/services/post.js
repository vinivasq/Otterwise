import client from "../providers/clientExercicio";

export const post = (data) => client.post("/posts", data)
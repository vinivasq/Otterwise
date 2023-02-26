import client from '../providers/client.js'

export const listAllUsers = () => client.get("/users")
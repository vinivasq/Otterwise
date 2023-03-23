import server from "./config/server.js";

server.get("/", (req, reply) => {
  reply.send({ posts: [] });
});

const start = () => {
  try {
    server.listen({ port: 3000 });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

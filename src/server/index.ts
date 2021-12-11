import Fastify from "fastify";
import router from "../routes/weather.routes";

const fastify = Fastify({
  logger: true,
});
fastify.get("/", async (req, reply) => "Server is up!");
fastify.register(router, { prefix: "api/v1" });

export default fastify;

import "dotenv/config";
import fastify from "./server/index";
import environment from "./configuration/environment";

(async () => {
  try {
    await fastify.listen(environment.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();

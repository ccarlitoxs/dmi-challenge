import { getWeather, getWeatherById } from "../controllers/weather.controller";
import { FastifyInstance } from 'fastify';

const routes = async (fastify:FastifyInstance, options:any, done:any) => {
  fastify.route({
    method: "GET",
    url: "/weather",
    handler: getWeather,
    errorHandler: async (error:any, request, reply) => {
      return error.response.data || { msg: "error" };
    },
  });

  fastify.route({
    method: "GET",
    url: "/weather/cities/:id",
    handler: getWeatherById,
    errorHandler: async (error:any, request, reply) => {
      return error.response.data || { msg: "error" };
    },
  });

  done();
};

export default routes;

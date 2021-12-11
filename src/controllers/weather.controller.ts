import { FastifyRequest,FastifyReply } from "fastify";
import getTemperatureBool from "../services/weatherCity.service";
import getTemperatureBoolById from "../services/weatherCityById.service";

const getWeather = async (request: FastifyRequest, reply: FastifyReply) => {
  const responseWeather = await getTemperatureBool(request);

  let bool = false;
  if (responseWeather.main.temp > 15) {
    bool = true;
  }

  reply.send({ over15grades: bool });
};

const getWeatherById = async (request: FastifyRequest, reply: FastifyReply) => {
  const responseWeather = await getTemperatureBoolById(request);

  let bool = false;
  if (responseWeather.main.temp > 15) {
    bool = true;
  }

  reply.send({ over15grades: bool });
};

export { getWeather, getWeatherById };

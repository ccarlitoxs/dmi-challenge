import axios from "axios";
import { FastifyRequest } from "fastify";
import environment from "../configuration/environment";

const getTemperatureBool = async (request:FastifyRequest) => {
  //@ts-ignore
  const { city } = request.query;
  
  const { data } = await axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.APIKEY}`)
    .catch((err) => {
      throw err;
    });

  return data;
};

export default getTemperatureBool;

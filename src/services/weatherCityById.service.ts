import axios from "axios";
import { FastifyRequest } from "fastify";
import environment from "../configuration/environment";

const getTemperatureBoolById = async (request:FastifyRequest) => {
  //@ts-ignore
  const { id:idCity } = request.params;
  const { data } = await axios
    .get(`http://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${environment.APIKEY}&units=metric`)
    .catch((err) => {
      throw err;
    });

    console.log('servicio')

  return data;
};

export default getTemperatureBoolById;

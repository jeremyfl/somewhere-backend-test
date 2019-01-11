"use strict";
const Kota = use("App/Models/Kota");
const Env = use("Env");

/**
 * Resourceful controller for interacting with kotas
 */
class KotaController {
  async search({ request, response }) {
    if (Env.get("SWITCH") === "API") {
      const axios = require("axios");

      // config
      axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
      axios.defaults.headers.common["key"] = "0df6d5bf733214af6c6644eb8717c92c";

      let city = await axios.get("city");
      city = city.data.rajaongkir.results;

      return response.send({
        data: city[request.input("id")]
      });
    }

    const kota = await Kota.find(request.input("id"));

    return response.send({
      data: kota
    });
  }
}

module.exports = KotaController;

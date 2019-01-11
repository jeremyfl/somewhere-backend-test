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

      axios
        .get("city")
        .then(response => {
          const results = response.data.rajaongkir.results;

          let i = request.input("id");

          return response.send({
            data: {
              id: results[i].city_id,
              province_id: results[i].province_id,
              province: results[i].province,
              type: results[i].type,
              city_name: results[i].city_name,
              postal_code: results[i].postal_code
            }
          });
        })
        .catch(function(error) {
          return response.status(404).send({
            message: "Sorry, error found",
            err: error
          });
        });
    }

    const kota = await Kota.find(request.input("id"));

    return response.send({
      data: kota
    });
  }
}

module.exports = KotaController;

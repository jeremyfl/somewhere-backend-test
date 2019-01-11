"use strict";
const Provinsi = use("App/Models/Provinsi");
const Env = use("Env");

/**
 * Resourceful controller for interacting with provinsis
 */
class ProvinsiController {
  async search({ request, response }) {
    if (Env.get("SWITCH") === "API") {
      const axios = require("axios");

      // config
      axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
      axios.defaults.headers.common["key"] = "0df6d5bf733214af6c6644eb8717c92c";

      let province = await axios.get("province");
      province = province.data.rajaongkir.results;

      return response.send({
        data: province[request.input("id")]
      });
    }

    const provinsi = await Provinsi.find(request.input("id"));

    return response.send({
      data: provinsi
    });
  }
}

module.exports = ProvinsiController;

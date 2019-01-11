"use strict";
const Kota = use("App/Models/Kota");

/**
 * Resourceful controller for interacting with kotas
 */
class KotaController {
  async search({ request, response }) {
    const kota = await Kota.find(request.input("id"));

    return response.send({
      data: kota
    });
  }
}

module.exports = KotaController;

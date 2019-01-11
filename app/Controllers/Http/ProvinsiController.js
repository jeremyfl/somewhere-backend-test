"use strict";
const Provinsi = use("App/Models/Provinsi");

/**
 * Resourceful controller for interacting with provinsis
 */
class ProvinsiController {
  async search({ request, response }) {
    const provinsi = await Provinsi.find(request.input("id"));

    return response.send({
      data: provinsi
    });
  }
}

module.exports = ProvinsiController;

"use strict";
const axios = require("axios");
const { Command } = require("@adonisjs/ace");
const Provinsi = use("App/Models/Provinsi");
const Kota = use("App/Models/Kota");

class FetchRajaOngkir extends Command {
  static get signature() {
    return "fetch:raja:ongkir";
  }

  static get description() {
    return "Tell something helpful about this command";
  }

  async handle(args, options) {
    // config
    axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
    axios.defaults.headers.common["key"] = "0df6d5bf733214af6c6644eb8717c92c";

    const fetchProvince = () => {
      axios
        .get("province")
        .then(response => {
          const results = response.data.rajaongkir.results;

          for (let i = 0; i < results.length; i++) {
            const id = results[i].province_id;
            const name = results[i].province;

            addProvince(id, name);
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });

      async function addProvince(id, name) {
        const provinsi = new Provinsi();
        provinsi.id = id;
        provinsi.name = name;

        await provinsi.save();
      }
    };

    const fetchKota = () => {
      axios
        .get("city")
        .then(response => {
          const results = response.data.rajaongkir.results;

          for (let i = 0; i < results.length; i++) {
            const city_id = results[i].city_id;
            const province_id = results[i].province_id;
            const province = results[i].province;
            const type = results[i].type;
            const city_name = results[i].city_name;
            const postal_code = results[i].postal_code;

            addKota(
              city_id,
              province_id,
              province,
              type,
              city_name,
              postal_code
            );
          }
        })
        .catch(function(error) {
          this.error("Something went bad, can't connect to raja api ongkir");
        });

      async function addKota(
        city_id,
        province_id,
        province,
        type,
        city_name,
        postal_code
      ) {
        const kota = new Kota();
        kota.id = city_id;
        kota.province_id = province_id;
        kota.province = province;
        kota.type = type;
        kota.city_name = city_name;
        kota.postal_code = postal_code;

        await kota.save();
      }
    };

    fetchProvince();
    fetchKota();
    this.success("All went fine, check your database now.");
  }
}

module.exports = FetchRajaOngkir;

"use strict";

const Schema = use("Schema");

class KotaSchema extends Schema {
  up() {
    this.create("kotas", table => {
      table.increments();
      table.integer("province_id");
      table.string("province");
      table.string("type");
      table.string("city_name");
      table.integer("postal_code");
      table.timestamps();
    });
  }

  down() {
    this.drop("kotas");
  }
}

module.exports = KotaSchema;

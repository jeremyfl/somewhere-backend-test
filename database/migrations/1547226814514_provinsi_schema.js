"use strict";

const Schema = use("Schema");

class ProvinsiSchema extends Schema {
  up() {
    this.create("provinsis", table => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("provinsis");
  }
}

module.exports = ProvinsiSchema;

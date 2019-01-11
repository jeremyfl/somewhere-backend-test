"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello" };
});

Route.get("search/provinces", "ProvinsiController.search").middleware(["auth"]);
Route.get("search/cities", "KotaController.search").middleware(["auth"]);

Route.post("login", "UserController.login");
Route.post("register", "UserController.register");

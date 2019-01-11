"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    await auth.attempt(email, password);
  }

  async register({ request, response }) {
    const user = new User();
    user.email = request.input("email");
    user.username = request.input("username");
    user.password = request.input("password");

    await user.save();

    return response.status(201).send({
      message: "Registered"
    });
  }
}

module.exports = UserController;

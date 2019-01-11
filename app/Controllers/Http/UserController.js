"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  async login({ request, auth, response }) {
    const { email, password } = request.all();

    const user = await User.findBy("email", email);

    if (user) {
      const passwordVerified = await Hash.verify(password, user.password);

      if (passwordVerified) {
        await auth.login(user);

        return response.send({
          user: user,
          message: "Logged in"
        });
      }

      return response.status(400).send({
        message: "Wrong password input"
      });
    }

    return response.status(404).send({
      message: "Email not found"
    });
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

import userService from "../services/userService.js";

class userController {
  static findAll = async (req, res, next) => {
    try {
      const users = await userService.findAll();
      console.log(users);
      res.status(200).send({ users });
    } catch (erro) {
      next(erro);
    }
  };

  static findById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await userService.findById(id);
      res.status(200).send(user);
    } catch (erro) {
      next(erro);
    }
  };

  static findFilter = async (req, res, next) => {
    try {
      const { name, email } = req.query;
      const search = {};

      if (name) search.name = name;
      if (email) search.email = email;

      const user = await userService.findUserFilter(search);
      res.status(200).send(user);
    } catch (erro) {
      next(erro);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const user = req.body;
      const users = await userService.createUser(user);
      res.status(200).send(users);
    } catch (erro) {
      next(erro);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const userInf = req.body;
      const user = await userService.updateUser(userId, userInf);
      res.status(200).send({ user });
    } catch (erro) {
      next(erro);
    }
  };
}

export default userController;

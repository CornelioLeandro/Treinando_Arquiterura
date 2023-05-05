import Users from "../model/userModel.js";

const findAll = async () => await Users.find();

const findUserFilter = async (user) => await Users.findOne(user);

const findById = async (id) => await Users.findById(id);

const createUser = async (user) => await Users.create(user);

const updateUser = async (id, user) => await Users.findByIdAndUpdate(id, user);

export default { findAll, findById, createUser, updateUser, findUserFilter };

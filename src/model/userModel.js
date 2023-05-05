import mongoose, { Schema } from "mongoose";

const userSchemma = new Schema({
  name: {
    type: String,
    required: [true, "The field NOME is required"]
  },
  password: {
    type: String,
    required: [true, "The field SENHA is required"]
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: [true, "The field EMAIL is required"]
  },
  admin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("users", userSchemma);

export default User;

import mongoose from "mongoose";
import ErroBase from "./erroBase.js";
import BadRequest from "./badRequest.js";
import ErroValid from "./erroValid.js";

function erroLog (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new BadRequest().sendAnswer(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValid(erro).sendAnswer(res);
  } else {
    new ErroBase().sendAnswer(res);
  }
}

export default erroLog;

import ErroBase from "./erroBase.js";

class BadRequest extends ErroBase {
  constructor (message = "Applied data is incorrect:") {
    super(message, 400);
  }
}

export default BadRequest;

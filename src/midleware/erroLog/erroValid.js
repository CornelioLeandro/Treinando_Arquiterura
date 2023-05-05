import BadRequest from "./badRequest.js";

class ErroValid extends BadRequest {
  constructor (erro) {
    const mensagemErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super({ message: `Missing data in the following fields: ${mensagemErro}` });
  }
}

export default ErroValid;

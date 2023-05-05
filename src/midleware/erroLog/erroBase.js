class ErroBase extends Error {
  constructor (mensagem = "internal server error: ", status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }

  sendAnswer (res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    });
  }
}

export default ErroBase;

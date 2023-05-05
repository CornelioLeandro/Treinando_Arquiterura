function erro404 (req, res, next) {
  res.status(404).send({ message: "pagina não encontrada" });
}

export default erro404;

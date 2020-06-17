const { Router } = require("express");
const multer = require('multer');
const multerConfig = require('./config/multer');

const WatsonController = require("./controllers/WatsonController");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("<h1>Reciclaki API</h1>")
});

routes.post("/wvr", WatsonController.searchEncoded)
routes.post("/wvrfile", multer(multerConfig).single('file'), WatsonController.searchFile)

module.exports = routes;
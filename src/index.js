const express = require("express");
const cors = require("cors");
const http = require('http');
const path = require('path')
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))
app.use(routes);

server.listen(process.env.PORT || 3333);
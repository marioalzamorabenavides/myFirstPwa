const express = require("express");
const bodyParser = require('body-parser');
const mockTeams = require("./mock/teamsMock");
const corsConfig = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsConfig());

app.get('/getTeams', function (req, res) {

    res.status(200).json(mockTeams);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
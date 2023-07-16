const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/bottomhalf/index.html");
});

app.listen(80);
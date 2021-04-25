const pJson = require('../package.json');

const express = require('express');
const app = express();

const port = process.env.NODE_PORT || 3000;

app.get('/*', (req, res) => {
    console.log(`Request form ${req.hostname}${req.originalUrl}`)
    res.send(`Hello form automation 😊. Version: ${pJson.version}`);
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
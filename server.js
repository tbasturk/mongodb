const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

let budget = require('/Users/talha/dev/week03/personal-budget/server.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


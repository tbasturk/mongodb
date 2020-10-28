// Budget API
const parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/new_database';

app.use(cors());


app.get('/budget', (req, res) => {
    res.sendFile("server.json",{root:__dirname});
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});


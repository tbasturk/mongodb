// Budget API
const parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const personalBudgetModel = require('./models/personal_budget_schema');

let url = 'mongodb://localhost:27017/personal_budget';

app.use(parser.json());
app.use(cors());
app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> {
        //console.log("Connected to the Database");
        personalBudgetModel.find({})
                     .then((data)=> {
                         res.json(data);
                         mongoose.connection.close();
                     })
                     .catch((connectionError)=> {
                            console.log(connectionError);
                     })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        });
});

app.put("/addNewBudget", (req, res) => {
    mongoose.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to the database");
        var newEntry = {
            title: req.body.title,
            related_value: req.body.related_value,
            color: req.body.color
        }

        personalBudgetModel.insertMany(newEntry)
                           .then((data) => {
                               res.json("Successfully created new entry");
                               mongoose.connection.close();
                           })
                           .catch((connectionError) => {
                               console.log(connectionError);
                               res.send("Error Found");
                           })

    })
    .catch((connectionError) => {
        console.log(connectionError);
        res.send("Error Found");
    })
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});


const express = require('express');
const mongoose = require("mongoose");
const PORT = 3030;
let db

let connectionString = `mongodb://localhost:27017/testdb`;

mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    },
    function (err, client){
        db = client.db()
        app.listen(PORT)
    }
)

app.post('/create-name', function(req, res){

    db.collection('name').insertOne({ text: req.body.text}, function(err, info){
        res.json(info.ops[0]);
    })
})


app.get('/testRoute', (req, res) => res.end('Hello from Server!'))

app.listen(PORT, () => {
  console.log(`Node.js App running on port ${PORT}...`)
})

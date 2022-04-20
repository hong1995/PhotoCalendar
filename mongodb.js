const express = require('express')
const mongodb = require('mongodb').MongoClient;

const app = express()
let db

let connectionString = `mongodb://localhost:27017/testdb`;

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    },
    function (err, client){
        db = client.db()
        app.listen(5000)
    }
)

app.post('/create-name', function(req, res){

    db.collection('name').insertOne({ text: req.body.text}, function(err, info){
        res.json(info.ops[0]);
    })
})

const PORT = 5000

app.get('/testRoute', (req, res) => res.end('Hello from Server!'))

app.listen(PORT, () => {
  console.log(`Node.js App running on port ${PORT}...`)
})

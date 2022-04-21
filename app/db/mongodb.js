var database = require('mongoose');
const PORT = 3031;
const connectionUrl = 'mongodb://localhost:27017/testdb';
    
var user = database.Schema({
    name : 'string',
    address : 'string',
    age: 'number'
});
var User = database.model('Schema', user);

module.exports = database;
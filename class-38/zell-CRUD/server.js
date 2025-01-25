//use express in server.js by requiring it
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//place this before CRUD handlers (express middleware)
app.use(express.urlencoded({ extended: true }))

//create server that browsers can connect to with Express' listen method
app.listen(3000, function () {
    console.log('listening on 3000')
});

//app.get(endpoint, callback);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
})

//handle POST request w/ post method in server.js (value placed in action attribute for form)
app.post('/quotes', (req, res) => {
    console.log(req.body);
});

MongoClient.connect('mongodb+srv://Yoda:yodaman@cluster0.hl4oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
}

).catch(error => console.log(error))
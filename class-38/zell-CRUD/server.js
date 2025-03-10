//use express in server.js by requiring it
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://Yoda:yodaman@cluster0.hl4oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');

    //set view engine to ejs (tells express we're using EJS as template engine) goes before any app methods
    app.set('view engine', 'ejs')

    //place this before CRUD handlers (express middleware)
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(express.json())

    app.put('/quotes', (req, res) => {
        quotesCollection
            .findOneAndUpdate({ name: 'Yoda' },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote,
                    },
                },
                {
                    upsert: true,
                }
            )
            .then(result => {
                res.json('Success')
            })
            .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
        quotesCollection
            .deleteOne({ name: req.body.name })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vader's' quote`)
            })
            .catch(error => console.error(error))
    })

    //app.get(endpoint, callback);
    app.get('/', (req, res) => {

        const cursor = db.collection('quotes').find();

        db.collection('quotes')
            .find()
            .toArray()
            .then(results => {
                res.render('index.ejs', { quotes: results })
            })
            .catch(error => console.error(error))
    })

    //handle POST request w/ post method in server.js (value placed in action attribute for form)
    app.post('/quotes', (req, res) => {
        quotesCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.log(error))
    });

    //create server that browsers can connect to with Express' listen method
    app.listen(3000, function () {
        console.log('listening on 3000')
    });

}

).catch(error => console.log(error))
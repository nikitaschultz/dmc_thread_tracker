const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('dmc');
    const threadsCollection = db.collection('threads');
    const threadsRouter = createRouter(threadsCollection);
  })
  .catch(console.err);

app.listen(3000, function(){
  console.log('Listening on port 3000')
})

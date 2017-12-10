import express from 'express';
import mongodb, { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;

var db;

mongoose.connect(process.env.MONGO_URI, {useMongoClient: true});
let db_connection = mongoose.connection;
db_connection.on('error', console.error.bind(console, 'connection error:'));
db_connection.once('open', function() {

})

app.get('/', (req, res) => {
  res.send('Hello');
  console.log("on root");
})

app.listen(3000, () => console.log('listening...'))

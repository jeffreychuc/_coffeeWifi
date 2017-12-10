import express from 'express';
import mongodb, { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
, {useMongoClient: true});

const dbAccess = mongoose.connection;

const db = dbAccess.db;

dbAccess.on('error', console.error.bind(console, 'connection error:'));

dbAccess.once('open', function() {


  let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log("App is running on port", port);
  })

})



app.get('/testinsert', (req, res) => {
  console.log("on test");
  db.collection("users", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

})

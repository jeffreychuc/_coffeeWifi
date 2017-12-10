import express from 'express';
import mongodb, { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
, {useMongoClient: true});

const dbAccess = mongoose.connection;

// let db = dbAccess;

dbAccess.on('error', console.error.bind(console, 'connection error:'));

dbAccess.once('open', () => {


  let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log("App is running on port", port);
  });
  // dbAccess.db.collection("users", (err, collection) => {
  //   collection.find({}).toArray((err,data) => {
  //     console.log(data);
  //   })
  // });

  // db.collectionNames((err, names) => {
  //   console.log(names);
  // })

})



app.get('/testinsert', (req, res) => {
  console.log("on test");
  console.log(dbAccess.db.collections);
  res.setHeader('Content-Type', 'application/json');
  dbAccess.db.collectionNames(function(error, names) {
    if (error) {
      console.log(error);
    } else {
      names.map(function(cname) {
        console.log(cname.name);
      });
    }
  });

})

app.get('/', (req, res) => {
  res.send("HI THERE")
});

app.post("/users", (req, res) => {
  let newUser = req.body;
  dbAccess.db.collection("users").insertOne(newUser, (err, doc) => {
    if (err) {
      res.status(500).json({"error": "Cannot post to users"});
    } else {
      res.json(doc);
    }
  })
});

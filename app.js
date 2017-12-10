import express from 'express';
import mongodb, { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';
import bodyParser from 'body-parser';

// mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
// , {useMongoClient: true});
//
// const dbAccess = mongoose.connection;
// let userSchema = new Schema({
//   name: String
// });
// let User = mongoose.model('User', userSchema);
// // let db = dbAccess;
//
// dbAccess.on('error', console.error.bind(console, 'connection error:'));
//
// dbAccess.once('open', () => {
//
//
//   let server = app.listen(process.env.PORT || 8080, () => {
//     let port = server.address().port;
//     console.log("App is running on port", port);
//   });
//   // dbAccess.db.collection("users", (err, collection) => {
//   //   collection.find({}).toArray((err,data) => {
//   //     console.log(data);
//   //   })
//   // });
//
//
//   // })
//
// })
const app = express();
app.use(bodyParser());
let db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");
  let server = app.listen(process.env.PORT || 8080,() => {
    let port = server.address().port;
    console.log("App now running on port", port);
  });
});



app.get('/testinsert', (req, res) => {
  console.log("on test");
  console.log();
  // console.log(db.collection("users"));
  res.send("hi")
})

app.get('/', (req, res) => {
  res.send("HI THERE")
});

app.post("/users", (req, res) => {
  console.log(db);
  let newUser = req.body;
  db.collection("users").insertOne(newUser, (err, doc) => {
    console.log(doc);
    if (err) {
      res.status(500).json({"error": "Cannot post to users"});
    } else {
       res.status(201).json(doc.ops[0]);
    }
  })
});

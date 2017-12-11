import express from 'express';
import mongodb, { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';
import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
, {useMongoClient: true});

let userSchema = new Schema({
  name: String,
});
let User = mongoose.model('User', userSchema);

let animalSchema = new Schema({
  name: { type: String,
          // required: true
        }
})

let Animal = mongoose.model('Animal', animalSchema);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log("App now running on port", port);
  });


});
// let db = dbAccess;

// username: {type: String},
// email: {type: String}
// let User = mongoose.model('users', userSchema);

// let userSchema = new Schema({
//   sub: {type: String},
// });
// let db;
//
// let connection = mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', (err, database) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//
//   db = database;
//   console.log("Database connection ready");
//   let server = app.listen(process.env.PORT || 8080,() => {
//     let port = server.address().port;
//     console.log("App now running on port", port);
//   });
//   let User = connection.model('users',userSchema);
//   user = new User({sub: 'sub'});
//
// });


const app = express();
app.use(bodyParser());

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
      res.status(500).json(err);
    } else {
       res.status(201).json(doc.ops[0]);
    }
  })
});

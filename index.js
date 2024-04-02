const mongoose = require('mongoose');

const express = require('express')
const app = express();
const connectDB = require('./connectDB.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();
const port = process.env.PORT || 3000;

// Create a Schema object
const modelSchema = new mongoose.Schema({
  name: String,
  studentID: String,
})

const Model = mongoose.model('w24students',modelSchema);

function inserInfo(name, studentID) {
  const newUser = new Model({
    name: name,
    studentID: studentID,
  });
  return newUser.save();
}

// This Activitry creates the collection called activitimodels
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form
  const uri = req.body.myuri;
  console.log(uri);
  
  // connect to the database and log the connection
  await connectDB(uri);

  // add the data to the database
  insertData();
  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

function insertData() {
  console.log("Inserting Data");
  try {
    const name = "Saksham Vasudev";
    const sid = "300357973";
    const result = inserInfo(name, sid);
    console.log("Data inserted", result);
    return result;
  } catch (error) {
    console.log("Error inserting data");

  }
}

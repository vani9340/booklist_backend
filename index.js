const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const addbook = require("./routes/addbooks");


const app = express();

// const User = require("..Models/user")
// const User = require("./models/user");
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken");


// const router= express.Router()
//-------------------------secret key--------------------------------
// const secret = "Booksapp"
const port = 4040;

const uri = 'mongodb+srv://shivani:shivani@cluster0.jtcimej.mongodb.net/?retryWrites=true&w=majority';

async function getConnection() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Connection to MongoDB failed', error);
  }
}

getConnection();

app.use(cors());
app.use(express.json());
app.use(loginRoute)
app.use(registerRoute)
app.use(addbook)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

//-------------------------------------------------------------------------










// app.get("/users", async (req, res)=>{
//     try{
//         const student = await User.find()
//         return res.status(200).json({students : student})
//     }catch(e){
//         return res.status(400).json({
//             message:e.message
//         });
//     }
// })
// app.post("/users", async (req, res) => {
//   const { id, name, currentClass, division } = req.body;

//   // Validate request body
//   if (!id || !name || !currentClass || !division) {
//     return res.status(400).json({ error: 'Invalid request body' });
//   }

//   try {
//     // Create a new User document
//     const newUser = new User({ id, name, currentClass, division });
//     await newUser.save();
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error creating new user:', error);
//     res.status(500).json({ error: 'Error creating new user' });
//   }
// });
//const express = require('express');
// const userModel = require("../models/user")
// const bcrypt = require("bcrypt")

// const router= express.Router()
// // router.use(express.urlencoded())

// module.exports= router


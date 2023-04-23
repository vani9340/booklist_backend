const express=require('express');
const Books = require('../Models/books');
const verify = require('../authorization/auth');
// const router= express.Router()
// router.use(express.json())
const app = express()
app.use(express.json())

  app.post('/addbook',verify,async(req, res) => {
    const userID = req.body.userId
    const { title, isbn, author,description,publisher,publishDate  } = req.body;

  // Validate request body
  if (!title || !isbn || !author || !description || !publisher || !publishDate) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  try {
    const result = await Books.create({
        title,
        isbn,
        author,
        description,
        publisher,
        publishDate,
        userID
     })
     return res.status(201).json({
        Status:"Success",
        Message:result
     })
    }
catch(e){
res.status(400).json({
  status:"Failed",
  Message:e
})
}

})
    // Create a new User document
//     const newbook = new Books({ title, isbn, author, description,publisher,publishDate });
//     await newbook.save();
//     res.json(newbook);
//   } catch (error) {
//     console.error('Error creating new book:', error);
//     res.status(500).json({ error: 'Error creating new book' });
//   }
// });

module.exports= app;
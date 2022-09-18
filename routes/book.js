var express = require('express');
var bookRouter = express.Router();
const Book = require('../businessLogic/book')

bookRouter.post('/create/', async (req, res) => {
  try {
    await Book.addBook(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookRouter.put('/update/', async (req, res) => {
  try {
    await Book.updateBook(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookRouter.get('/get_one/:_id', async (req, res) => {
  try {
    await Book.getOneBook(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookRouter.get('/get_many/:_ids', async (req, res) => {
  try {
    await Book.getManyBooks(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookRouter.get('/get_all/', async (req, res) => {
  try {
    await Book.getAllBooks(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookRouter.delete('/delete/:_id', async (req, res) => {
  try {
    await Book.deleteBook(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})
bookRouter.delete('/delete_many/:_ids', async (req, res) => {
  try {
    await Book.deleteManyBooks(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

module.exports = bookRouter;

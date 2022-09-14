var express = require('express');
var bookRouter = express.Router();
const Book = require('../businessLogic/book')

bookRouter.post('/create/', async (req, res) => {
  await Book.addBook(req, res)
})

bookRouter.put('/update/', async (req, res) => {
  await Book.updateBook(req, res)
})

bookRouter.get('/get_one/:_id', async (req, res) => {
  await Book.getOneBook(req, res)
})

bookRouter.get('/get_many/:_ids', async (req, res) => {
  await Book.getManyBooks(req, res)
})

bookRouter.get('/get_all/', async (req, res) => {
  await Book.getAllBooks(req, res)
})

bookRouter.delete('/delete/:_id', async (req, res) => {
  await Book.deleteBook(req, res)
})
bookRouter.delete('/delete_many/:_ids', async (req, res) => {
  await Book.deleteManyBooks(req, res)
})

module.exports = bookRouter;

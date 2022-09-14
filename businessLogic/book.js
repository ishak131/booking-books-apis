const BookModel = require('../mongoSchema/Book')

class Book {
    async addBook(req, res) {
        try {
            let book = new BookModel(req.body)
            let savedBook = await book.save()
            return res.json({ savedBook })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async updateBook(req, res) {
        try {
            let { _id } = req.body
            let book = await BookModel.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
            return res.json({ book })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async deleteBook(req, res) {
        try {
            let { _id } = req.params
            let book = await BookModel.deleteOne({ _id })
            return res.json({ book })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async deleteManyBooks(req, res) {
        try {
            let { _ids } = req.params
            let books = await BookModel.deleteMany({ _id: { $in: _ids.split(",") } })
            return res.json({ books })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async getOneBook(req, res) {
        try {
            let { _id } = req.params
            let book = await BookModel.findById({ _id })
            return res.json({ book })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async getManyBooks(req, res) {
        try {
            let { _ids } = req.params
            let books = await BookModel.find({ _id: { $in: _ids.split(",") } })
            return res.json({ books })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async getAllBooks(req, res) {
        try {
            let books = await BookModel.find()
            return res.json({ books })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

}

module.exports = new Book()
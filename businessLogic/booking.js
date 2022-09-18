const BookingModel = require('../mongoSchema/Booking')

class Booking {

    async addBooking(req, res) {
        try {

            let book = new BookingModel(req.body)
            let savedBook = await book.save()
            return res.json({ savedBook })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async updateBooking(req, res) {
        try {
            let { _id } = req.body
            let book = await BookingModel.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
            return res.json({ book })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async deletBooking(req, res) {
        try {
            let { _id } = req.params
            let book = await BookingModel.deleteOne({ _id })
            return res.json({ book })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

    async getAllBookings(req, res) {
        try {
            let books = await BookingModel.find()
            return res.json({ books })
        } catch (err) {
            return res.sendStatus('400')
        }
    }
    async deletManyBooking(req, res) {
        try {
            let { _ids } = req.params
            let books = await BookingModel.deleteMany({ _id: { $in: _ids.split(",") } })
            return res.json({ books })
        } catch (err) {
            return res.sendStatus('400')
        }
    }

}

module.exports = new Booking()
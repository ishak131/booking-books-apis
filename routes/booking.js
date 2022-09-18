var express = require('express');
var bookingRouter = express.Router();
const Booking = require('../businessLogic/booking')

bookingRouter.post('/create/', async (req, res) => {
  try {
    await Booking.addBooking(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookingRouter.put('/update/', async (req, res) => {
  try {
    await Booking.updateBooking(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookingRouter.get('/get_one/:_id', async (req, res) => {
  try {
    await Booking.getOneBooking(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookingRouter.get('/get_many/:_ids', async (req, res) => {
  try {
    await Booking.getManyBookings(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookingRouter.get('/get_all/', async (req, res) => {
  try {
    await Booking.getAllBookings(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

bookingRouter.delete('/delete/:_id', async (req, res) => {

  try {
    await Booking.deleteBooking(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})
bookingRouter.delete('/delete_many/:_ids', async (req, res) => {
  try {
    await Booking.deleteManyBookings(req, res)
  } catch (error) {
    res.status(500).send('internal error')
  }
})

module.exports = bookingRouter;

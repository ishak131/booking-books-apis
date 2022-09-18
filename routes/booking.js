var express = require('express');
var bookingRouter = express.Router();
const Booking = require('../businessLogic/booking')

bookingRouter.post('/create/', async (req, res) => {
  await Booking.addBooking(req, res)
})

bookingRouter.put('/update/', async (req, res) => {
  await Booking.updateBooking(req, res)
})

bookingRouter.get('/get_one/:_id', async (req, res) => {
  await Booking.getOneBooking(req, res)
})

bookingRouter.get('/get_many/:_ids', async (req, res) => {
  await Booking.getManyBookings(req, res)
})

bookingRouter.get('/get_all/', async (req, res) => {
  await Booking.getAllBookings(req, res)
})

bookingRouter.delete('/delete/:_id', async (req, res) => {
  
  await Booking.deleteBooking(req, res)
})
bookingRouter.delete('/delete_many/:_ids', async (req, res) => {
  await Booking.deleteManyBookings(req, res)
})

module.exports = bookingRouter;

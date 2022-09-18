const { Schema, model } = require("mongoose");

const requiredString = {
    type: String,
    required: true
}

const Booking = new Schema({
    customerName: requiredString,
    phoneNumber: requiredString,
    books: {
        type: [{
            _id: String,
            bookName: String,
            quantity: Number,
            subTotal: Number,
            price: Number,
        }],
    },
    total: requiredString,
    paid: {
        type: Number,
        required: true,
    },
})

const BookingModel = model('Booking', Booking);
module.exports = BookingModel;


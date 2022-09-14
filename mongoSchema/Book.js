const { Schema, model } = require("mongoose");

const requiredString = {
    type: String,
    required: true
}

const Book = new Schema({
    bookName: requiredString,
    price: {
        type: Number,
        required: true
    },
    course: requiredString,
    stage: requiredString
})

const BookModel = model('Book', Book);
module.exports = BookModel;


const mongoose = require('mongoose')
const AuthorSchema = require("./author_model");
const BookSchema = require("./book_model");
const BorrowerSchema = require("./borrower_model");
const BorrowingSchema = require("./borrowing_model");
const CategorySchema = require("./category_model");

module.exports = {
    Book: mongoose.model('Book', BookSchema),
    Author: mongoose.model('Author', AuthorSchema),
    Category: mongoose.model('Category', CategorySchema),
    Borrower: mongoose.model('Borrower', BorrowerSchema),
    Borrowing: mongoose.model('Borrowing', BorrowingSchema)
};
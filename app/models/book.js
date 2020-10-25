'use strict';
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: mongoose.Types.ObjectId,
    datePublished: Date,
    isAvailable: Boolean,
    categories: [mongoose.Types.ObjectId],
    coverPage: String,
    description: String,
    numberOfPages: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);


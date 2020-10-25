'use strict';
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: Date,
    gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);


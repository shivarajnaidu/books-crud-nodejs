'use strict';
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, lowercase: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);


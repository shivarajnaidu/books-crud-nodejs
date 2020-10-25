'use strict';
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.route('/')

    // Get List of books / filter
    .get((req, res, next) => {
        try {

        } catch (error) {

        }
    })


    // Create A New Book
    .post((req, res, next) => {
        try {

        } catch (error) {
            next(error);
        }
    });


router.route('/:id')
    // Get single book
    .get((req, res, next) => {
        try {

        } catch (error) {

        }
    })


    // update the book details
    .put((req, res, next) => {
        try {

        } catch (error) {

        }
    })


    // Delete the book by id
    .delete((req, res, next) => {
        try {
        } catch (error) {

        }
    });


module.exports = router;
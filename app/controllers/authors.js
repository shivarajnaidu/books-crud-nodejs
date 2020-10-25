'use strict';
const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.route('/')

    // Get List of authors / filter
    .get(async (req, res, next) => {
        try {
          const result = await Author.find({});
          res.json(result);
        } catch (error) {
            next(error);
        }
    })


    // Create New Author
    .post(async (req, res, next) => {
        try {
            const doc = new Author(req.body);
            const result = await doc.save();
            res.json(result);
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
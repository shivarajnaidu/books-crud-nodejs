'use strict';
const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.route('/')

    // Get List of books / filter
    .get(async (req, res, next) => {
        try {
          const result = await Category.find({});
          res.json(result);
        } catch (error) {
            next(error);
        }
    })


    // Create New Category
    .post(async (req, res, next) => {
        try {
            const doc = new Category(req.body);
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
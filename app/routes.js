'use strict';
const categoryRouter = require('./controllers/category');
const authorsRouter = require('./controllers/authors');

module.exports = (app) => {
    app.use('/api/v1/books/categories', categoryRouter);
    app.use('/api/v1/authors', authorsRouter);
    app.use((error, req, res, next) => {
        console.error(error);
        res.status(error.status ?? 500).json({ message: error.message ?? 'Internal Server Error' });
    })
};

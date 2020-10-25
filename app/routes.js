'use strict';
const categoryRouter = require('./controllers/category');
const authorsRouter = require('./controllers/authors');

module.exports = (app) => {
    app.use((req, res, next) => {
        console.log('Hiii')
        next();
    })
    app.use('/api/v1/categories', categoryRouter);
    app.use('/api/v1/authors', authorsRouter);
    app.use((error, req, res, next) => {
        console.error(error);
        res.status(error.status ?? 500).json({ message: error.message ?? 'Internal Server Error' });
    })
};

const router = require('express').Router();
const userRoutes = require('./user-routes');

// prefix user on user routes
router.use('/users', userRoutes);

module.exports = router;

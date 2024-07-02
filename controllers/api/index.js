const router = require('express').Router();
const register = require('./register');
const login = require('./login');

router.use('/register', register);
router.use('/login', login);

module.exports = router;
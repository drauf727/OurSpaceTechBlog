const router = require('express').Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const post = require('./post');

router.use('/register', register);
router.use('/login', login);
router.use('/logout', logout);
router.use('/post', post);

module.exports = router;
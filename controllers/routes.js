const router = require('express').Router();
const authenticator = require('../utils/authenticator')

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res)=> {
    res.render('login');
});

router.get('/register', (req, res)=> {
    res.render('register');
});

router.get('/dashboard', authenticator, async (req, res) => {
    const userEmail = req.session.email;
    res.render('dashboard', { email: userEmail });
    
})


module.exports = router 
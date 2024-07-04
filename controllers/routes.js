const router = require('express').Router();
const authenticator = require('../utils/authenticator');
const { Post } = require('../models');

const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{all: true }]
        });

        const postData = posts.map((project) => project.get({ plain: true}));

        res.render('home', {
            postData
        })
    } catch (err) {res.status(422).json({message: err})}
} )

router.get('/login', (req, res)=> {
    res.render('login');
});

router.get('/register', (req, res)=> {
    res.render('register');
});

router.get('/dashboard', authenticator, async (req, res) => {
    const userEmail = req.session.email;

    try {
        const userPosts = await Post.findAll({
            where: {
                username: userEmail
            },
            include: [{ all: true }]
        });

        const postData = userPosts.map((project) => project.get({ plain: true}));

    res.render('dashboard', { email: userEmail, postData });
    } catch(err){
        res.status(422).json(err)
    } 
    })

module.exports = router 
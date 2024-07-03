const router = require('express').Router();
const { Post } = require('../../models');

const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        await Post.create({
            username: req.body.username,
            title: req.body.title,
            post: req.body.title
        });
        res.redirect('/');
    } catch (err) {
        res.status(422).json({ message: err });
    }
});

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

module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');

const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        await Comment.create({
            username: req.body.username,
            comment: req.body.comment,
            postId: req.body.postId
        });
        res.redirect('/');
    } catch (err) {
        res.status(422).json({ message: err });
    }
});

module.exports = router;
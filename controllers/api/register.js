const router = require('express').Router();
const { User } = require('../../models');

const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      req.session.user_id = newUser.id;
      req.session.email = newUser.email;
      req.session.logged_in = true;
      res.redirect('/');
    } catch (err) {
      res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
    }
  });

  module.exports = router;

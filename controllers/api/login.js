const router = require('express').Router();
const { User } = require('../../models');

const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Unable to find user with that email address :(' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again :(' });
      return;
    }

    
    req.session.user_id = userData.id;
    req.session.email = userData.email;
    req.session.logged_in = true;
    res.redirect('/');

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
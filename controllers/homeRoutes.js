const router = require('express').Router();
const { Entry, User } = require('../models');
const withAuth = require('../Application/utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('login', { 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/homepage', withAuth, async (req, res) => {
    try {
      res.render('homepage', {
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
const router = require('express').Router();
const { Entry } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newEntry = await Entry.create({
      ...req.body,
    });

    res.json(newEntry.get({
      plain: true
    }));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const entryData = await Entry.findAll();
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Entry } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newEntry = await Entry.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });

    // res.status(200).json(newEntry);
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

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
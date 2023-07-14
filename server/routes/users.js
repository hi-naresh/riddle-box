// const express = require('express');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/', async (req, res) => {
//     const { name, school } = req.body;
//     const user = new User({ name, school });
//     await user.save();
//     res.json(user);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    school: req.body.school
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

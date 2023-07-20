const express = require('express');
const router = express.Router();

// POST request to create a new user
router.post('/', async (req, res) => {
  const { fullName, email } = req.body;
  const user = db.collection('users').doc(email);
  const doc = await user.get();
  if (!doc.exists) {
    await user.set({ fullName, email, stage: 1 });
    res.status(201).send({ message: "User registered successfully." });
  } else {
    res.status(400).send({ message: "User already exists." });
  }
});

// GET request to check if an email is already registered
router.get('/check-email/:email', async (req, res) => {
  const user = db.collection('users').doc(req.params.email);
  const doc = await user.get();
  if (doc.exists) {
    res.status(400).json({ message: 'Email already registered.' });
  } else {
    res.json({ message: 'Email not registered.' });
  }
});

// PUT request to update a user's stage
router.put('/update-stage/:id', async (req, res) => {
  const user = db.collection('users').doc(req.params.id);
  const doc = await user.get();
  if (!doc.exists) {
    res.status(404).send({ message: 'User not found.' });
  } else {
    await user.update({ stage: req.body.stage });
    res.json({ message: 'User updated successfully.' });
  }
});

module.exports = router;

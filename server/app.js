const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const usersRouter = require('./routes/users');
const serviceAccount = require('./serviceAccountKey.json');  // replace with the path to your serviceAccountKey.json

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
global.db = db;  // so you can access it in other files

app.listen(5001, () => console.log('Server is running on port 5001'));

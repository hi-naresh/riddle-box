const usersRouter = require('./routes/users');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/qr-puzzle-app', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.listen(5001, () => console.log('Server is running on port 5001'));

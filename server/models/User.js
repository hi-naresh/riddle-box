const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    school: { type: String, required: true },
    puzzleSolved: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

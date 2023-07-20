const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  qrCode: {
    type: String,
  },
  stage: {
    type: String,
    enum : ['stage1','stage2','completed','failed'],
    default: 'stage1'
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);

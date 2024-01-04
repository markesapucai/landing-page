const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  password: String,
  phone: {
    number: {
      type: String
    },
    verified: {
      type: Boolean,
      default: false
    }
  }
});

export default mongoose.model('User', UserSchema);
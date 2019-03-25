const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String, unique: true },
  scores: {
    '3': {
      draw: Number,
      lose: Number,
      win: Number,
    },
    '4': {
      draw: Number,
      lose: Number,
      win: Number,
    },
    '5': {
      draw: Number,
      lose: Number,
      win: Number,
    },
  },
});

userSchema.pre('save', function preUserSave(next) {
  this.id = this.id.toLowerCase();
  next();
});

/* eslint-disable func-names, no-underscore-dangle */
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};
/* eslint-enable func-names, no-underscore-dangle  */

mongoose.set('useCreateIndex', true);
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

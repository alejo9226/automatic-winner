const { model, Schema } = require('mongoose')

const adminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const Admin = model('Admin', adminSchema)

module.exports = Admin
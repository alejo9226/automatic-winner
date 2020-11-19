const { model, Schema } = require('mongoose')

const condoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  adminid: {
    type: Schema.Types.ObjectId, 
    ref: 'Admin', 
    require: true,
  }
}, {
  timestamps: true,
});

const Condo = model('Condo', condoSchema)

module.exports = Condo
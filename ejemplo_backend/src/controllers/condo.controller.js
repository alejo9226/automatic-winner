const Condo = require('../models/condo.model')

module.exports = {
  async create(req, res) {
    const data = req.body

    const newCondo = {
      ...data,
    }
    try {
      const condo = await Condo.create(newCondo)
      res.status(201).json({ message: 'condo created', data: condo })
      
    }
    catch (err) {
      res.status(400).json({ message: 'condo could not be created'})

    }
  },
  list(req, res) {
    Condo.find()
    .then(condos => {
      res.status(200).json({ message: 'condos found', data: condos })
    })
  }
}
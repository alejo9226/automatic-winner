const Admin = require('../models/admin.model')

module.exports = {
  async create(req, res) {
    const data = req.body

    const newAdmin = {
      ...data,
    }
    try {
      const admin = await Admin.create(newAdmin)
      res.status(201).json({ message: 'admin created', data: admin })
      
    }
    catch (err) {
      res.status(400).json({ message: 'admin could not be created'})

    }
  },
  list(req, res) {
    Admin.find()
    .then(admins => {
      res.status(200).json({ message: 'admins found', data: admins })
    })
  }
}
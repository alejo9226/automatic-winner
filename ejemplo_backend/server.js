const express = require('express')
const app = express()
const { connect } = require('./src/db')
const adminRouter = require('./src/routes/admin')
const condoRouter = require('./src/routes/condo')
const cors = require('cors')

const port = 8080

connect()

app.use(cors())
app.use(express.json())

app.use('/admin', adminRouter)
app.use('/condo', condoRouter)

app.listen(port, () => console.log(`Listening on http://localhost:${port}` ))



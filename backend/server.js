/*
  Project: Goal setting API with basic 
  Routes:

  GET => Get all goals /api/v1/goals
  GET => Get a single goal /api/v1/goals/:id
  POST => Create a new goal /api/v1/goals/ 
  PUT/PATCH => Update a single goal /api/v1/goals/:id
  DELETE => Delete a single goal /api/v1/goals/:id
*/

const express = require('express')
// environement varibles
const dotenv = require('dotenv').config()
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

const PORT = process.env.PORT || 3000

// Use Routes
app.use('/api/v1/goals', require('./routes/goalRoutes'))

app.listen(PORT, () =>
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} process...`,
  ),
)

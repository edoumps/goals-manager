const asyncHandler = require('express-async-handler')

// GET /api/v1/goals
// description : Get All goals
// access : Private
const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ manager: 'Show all goals.' })
})

// POST /api/v1/goals
// description : Create a goal
// access : Private
const createGoal = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    // Express error handling
    throw new Error('Please add a text field.')
    // Error Handlind:.json({ manager: 'Please add a text field.' })
  }
  res.status(200).json({ manager: 'Create a goal.' })
})

// GET /api/v1/goals/:id
// description : Get a single goal
// access : Private
const showGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ manager: `Find goal ${req.params.id}.` })
})

// PUT/PATCH /api/v1/goals/:id
// description : Update a single goal
// access : Private
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ manager: `Update goal ${req.params.id}.` })
})

// DELETE /api/v1/goals/:id
// description : Update a single goal
// access : Private
const deleteGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ manager: `Delete goal ${req.params.id}.` })
})

module.exports = {
  getGoals,
  createGoal,
  showGoal,
  updateGoal,
  deleteGoal,
}

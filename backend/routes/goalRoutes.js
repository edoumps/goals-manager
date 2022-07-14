const express = require('express')
const router = express.Router()
const {
  getGoals,
  showGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')


// Routes without 'params/:id'

// Get /api/v1/goals
// Description : Get All goals

// POST /api/v1/goals
// description : Create a single goal
router.route('/').get(getGoals).post(createGoal)


// Routes without 'params/:id'

// GET /api/v1/goals/:id
// description : Get a single goal

// PUT/PATCH /api/v1/goals/:id
// description : Create a single goal

// DELETE /api/v1/goals/:id
// description : Delete a single goal


router.route('/:id').put(updateGoal).get(showGoal).delete(deleteGoal)
module.exports = router

//Import Dependencies
const router = require('express').Router()
const surveyController = require('../../controllers/surveyController.js')

//Matches with '/api/survey'
router.route('/survey')
    .post(surveyController.submit)

module.exports = router
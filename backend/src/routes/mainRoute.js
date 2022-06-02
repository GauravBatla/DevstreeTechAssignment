const route = require('express').Router()
const validation = require('../validations/validation')
const mainController = require('../controller/mainController')
const jwt = require('../middleware/jwtAuth');
const jwtAuth = require('../middleware/jwtAuth');

route.post('/signup', validation.signUpVal, mainController.signUp);

route.post('/login', validation.userLogin, mainController.userLogin)

route.get('/list', jwtAuth, mainController.getUserList)


// Add student report route

route.post('/addStudent', validation.AddStudent, mainController.AddStudent)


module.exports = route
const { check } = require('express-validator')
const UserModel = require('../model/userModel')
const mogooseService = require('../services/mogooseService')


exports.signUpVal = [
    check('name').notEmpty().withMessage("Name is required"),
    check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("InValid Email").custom((email) => {
        return UserModel.findOne({ email: email }).then(data => {
            if (data) {
                return Promise.reject('Already email is  taken')
            }
        })
    }),
    check('phone').notEmpty().withMessage('Mobile number is required').toInt().isLength({ min: 10, max: 10 }).withMessage("enter valid number").custom((phone) => {
        return UserModel.findOne({ phone: phone }).then(data => {
            if (data) {
                return Promise.reject('Already mobile  number is taken')
            }
        })
    }),
    check('age').notEmpty().withMessage("Age is required"),
    check('gender').notEmpty().withMessage("Gender is required").isIn(['male', 'female', 'others']).withMessage("invalid input gender"),
    check('password').notEmpty().withMessage("Password is required")
]

exports.userLogin = [
    check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("InValid Email").custom((email) => {
        return UserModel.findOne({ email: email }).then(data => {
            //console.log(data);
            if (!data) {
                return Promise.reject('emailnot found')
            }
        })
    }),
    check('password').notEmpty().withMessage("password is required")
]


//check Student Add Validation

exports.AddStudent = [
    check('fname').notEmpty().withMessage("First name is required"),
    check('lname').notEmpty().withMessage("First name is required"),
    check('class').notEmpty().withMessage("First name is required"),
    check('subject').notEmpty().withMessage("First name is required").isArray().withMessage("please add Subject"),
    check('subject.*')
    
        .custom(async (value, { req }) => {
            if(!['allCustomers', 'allDrivers', 'allAdmins'].includes(value.name)){
                
                 throw new Error('At least one email id is required to send the email');
                    
            }
            if(typeof value.marks !="number" || value.marks < 0 ){
                throw new Error("Marks can't be -ve or string")
            }
        })
]
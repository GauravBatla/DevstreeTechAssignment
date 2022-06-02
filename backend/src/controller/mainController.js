const { validationResult } = require('express-validator')
const UserModel = require('../model/userModel')
const mogooseServe = require('../services/mogooseService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userModel = require('../model/userModel');

// name , email , phone , age , gender , password
exports.signUp = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (errors.errors.length > 0) {
            return res.status(422).json({
                errors: errors.errors
            })
        } else {
            let payload = req.body
            let option = { name: payload.name, email: payload.email, phone: payload.phone, age: payload.age, gender: payload.gender }
            let password = req.body.password
            let hashP = await bcrypt.hash(password, 10)
            option['password'] = hashP
            let data = await mogooseServe.add(UserModel, option)
            return res.status(200).json({
                data: data
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error
        })
    }
}


exports.userLogin = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({
                message: errors.msg,
                errors: errors.errors
            });
        }
        else {
            let payload = req.body;
            const user = await mogooseServe.findOne(userModel, payload.email);
            // console.log(user);
            if (user) {
                let oldPass = user.password
                let enterPass = req.body.password
                let result = bcrypt.compareSync(enterPass.toString(), oldPass,)
                if (result) {
                    let option = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    const token = await jwt.sign(option, 'secret', { expiresIn: '86765m' });
                    res.status(200).json({
                        accessToken: token,
                        user: user
                    })
                } else {
                    return res.status(422).json({
                        error: "Enter Valid Password"
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error })
    }
}



exports.getUserList = async (req, res) => {
    try {
        let data = await mogooseServe.find(userModel)
        return res.status(200).json({
            result: data
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}


// For Add Record Students

exports.AddStudent = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({
                message: errors.msg,
                errors: errors.errors
            });
        }
        else {
            return res.json({ data: req.body })
        }
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}
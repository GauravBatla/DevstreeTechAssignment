var jwt = require('jsonwebtoken');
var JWT_SECREATE_kEY = 'secret';
const mongoose = require('mongoose');
const userModel = require('../model/userModel')
module.exports = async (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        var bearer = req.headers.authorization.split(" ");
        token = bearer[1];
        var decode = jwt.verify(token, JWT_SECREATE_kEY);
        console.log(decode, "uk");
        req.userId = decode.userId
        const data = await userModel.findOne({ email: decode.email });
        if (!data) {
            res.status(401).json({
                status: 401,
                message: "Failed to authenticate token."
            })
        }
        next()
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: "Failed to authenticate token."
        })
    }
}

const mongoose = require('mongoose');

// name , email , phone , age , gender , password

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })
// UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('user', UserSchema) 

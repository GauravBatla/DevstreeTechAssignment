const mongoose = require('mongoose');

// name , email , phone , age , gender , password

const StudentSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    subject: [
        {
            name: {
                type: String,
                enum: ['English', 'Hindi', 'Maths'],
                required: true
            },
            marks: {
                type: Number,
                default: 0,
            }
        }
    ],

}, { timestamps: true })
// StudentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('user', StudentSchema) 

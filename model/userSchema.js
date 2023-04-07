import mongoose from 'mongoose';

const { Schema } = mongoose

const userSchema = new Schema({
    firstName : {
        type: String,
        required : [true, 'Please enter your First name']
    },
    lastName : {
        type : String,
        required : [true,'Please enter your Last name']
    },
    email : {
        type : String,
        required : [true , 'Please enter you Email address'],
        unique : true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid Email address']
    },
    password : {
        type: String,
        required : [true , 'Please enter a Password']
    }
},{
    timestamps : true
})

export const User =  mongoose.model('user', userSchema)


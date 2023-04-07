import { User } from "../model/userSchema.js";
import bycrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken";



export const regsiterUser = async(req, res, next)=> {
    const user = req.body

    user.password
    user.password = await bycrypt.hash(user.passwor, 23)

    try {
        await User.create(user)
        res.json({
            message : 'The user has been registered'
        })
    } catch (error) {
        next(error)
    }
}

export const loginUser = async(req, res, next)=>{

    const {email , password} = req.body

    try {
        if (!email) {
            next(new Error('Please enter your Email address'))
        }
    
        if (!password) {
            next(new Error('Please Enter Your Password'))
        }
    
        const user = await User.findOne(email)
    
        if (!user) {
            next(new Error('Your Email is incorrect'))
        }
    
        const isPasswordMatched =  await bycrypt.compare(password, user.password)
    
        if (!isPasswordMatched) {
            next(new Error(' Password is incorrect'))
        }
    
        const loginToken = jwt.sign({user : user}, 'OuJ_jm9MQB2oLSX3KBpCEszkh3TtbFGS57xFaAQhUGo')
    
        res.cookie("Login Token", loginToken , { httpOnly : true }).json({
            user : user,
            message : 'You have been Logged in'
        })
    } catch (error) {
        next(error)
    }
    
}

export const logoutUser = async()=>{
    res.cookie("Login Token", { expires: new Date(Date.now())}).json({
        message : 'You have been Logged out'
    })
}
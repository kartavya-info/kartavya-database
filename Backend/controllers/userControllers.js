const User = require('../models/Users')
const Student = require('../models/Students')
const Sponsors = require('../models/Child_Sponsors')

const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
//const Users = require('../models/Users')

//@desc Get all Users
//@route GET/Users
//@access Private
const getallUsers = asyncHandler(async (req,res) => {
    const users = await User.find().select('-password').lean()
    if (!users?.length){
        return res.status(400).json({message: 'No user found'})
    }
    res.json(users)
})

//@desc Create New Users
//@route POST/Users
//@access Private
const createNewUser = asyncHandler(async (req,res) => {
    const {username, password, roles} = req.body

    //confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({message: "All fields are required"})
    }

    //Check for Duplicates
    const Duplicates= await User.findOne({username}).lean().exec()
    if(Duplicates){
        return res.status(400).json({message: "Duplicate username"})
    }

    const userObject = {username, password, roles}

    const user = await User.create(userObject)
    if(user){
        res.status(201).json({message: 'New user ${username} created'})
    }else{
        res.status(400).json({message: 'Unable to create user'})
    }
})

//@desc Update Users
//@route PATCH/Users
//@access Private

const updateUser = asyncHandler(async (req,res) => {
    const {username, password, roles}= req.body
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({message: 'All fields required'})
    }

    const user = await User.findOne({username}).exec()

    if(!user){
        return res.json({message: 'User not found'})
    }

    user.password = password
    user.roles = roles

    const updatedUser = await user.save()
    res.json({message: '${updatedUser.username} updated'})
})
//@desc delete User
//@route DELETE/Users
//@access Private
const deleteUser = asyncHandler(async (req,res) => {
    const {username} = req.body
    
    if(!username){
        return res.status(400).json({message: 'Username required'})
    }

    const user = await User.findOne({username}).exec()
    if(!user){
        return res.status(400).json({message: 'User not found'})
    }

    const result = await user.deleteOne()
    res.json({message: 'User Deleted'})
})

module.exports = {
    getallUsers,
    createNewUser,
    updateUser,
    deleteUser
}
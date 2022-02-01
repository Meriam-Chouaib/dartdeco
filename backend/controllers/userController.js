import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST api/users/login
// @access   public 
const authUser = asyncHandler(async (req, res) => { //asyncHandler for display errors if there is some problems in routing express
   
    const {email, password} = req.body //recupere data from the req.body (data created in postman)

   const user = await User.findOne({email})

   if (user && (await user.matchPassword(password))) {
        res.json({
             _id: user._id,
             name: user.name,
             email: user.email,
             isAdmin: user.isAdmin,
             token: generateToken(user._id),
        })
   }else{
     res.status(401)
     throw new Error('Invalid email or password')
   }

})

 // @desc    Register a new user 
// @route   POST api/users
// @access   public 
const registerUSer = asyncHandler(async (req, res) => { //asyncHandler for display errors if there is some problems in routing express
   
     const {name, email, password} = req.body //recupere data from the req.body (data created in postman)
 
    const userExists = await User.findOne({email})
    if( userExists ){

         res.status(400)
         throw new Error('user already exists')
    }
    const user = await User.create({
         name,
         email,
         password,//will be encrypted because f the middleware created in the model userSchema.pre('save', async function (next){
    })
 
    if(user) { //if user is created then gone send the data that defined that user
         res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
     })
    }
    else {
     res.status(400)
     throw new Error('Invalid user data')
    }
 })

// @desc    Get user profile
// @route   GET api/users/profile
// @access   private 
const getUserProfile = asyncHandler(async (req, res) => { //asyncHandler for display errors if there is some problems in routing express  
    
     const user = await User.findById(req.user._id) 
    //use req.user._id for any protected route you want

    if (user) { //return that loggin user

          res.json({ 
               _id: user._id,
               name: user.name,
               email: user.email,
               isAdmin: user.isAdmin,
          })
    } else {
         res.status(404)
         throw new Error('user not found')
    }
 
 })

 
// @desc     Update user profile
// @route    PUT api/users/profile
// @access   private 
const updateUserProfile = asyncHandler(async (req, res) => { //asyncHandler for display errors if there is some problems in routing express  
    
     const user = await User.findById(req.user._id) 
    //use req.user._id for any protected route you want

    if (user) { //return that loggin user

      user.name = req.body.name || user.name   
      user.email = req.body.email || user.email 
      if(req.body.password){
          user.password = req.body.password    
      }  

      const updatedUser = await user.save()

      res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser._id),
     })

    } else {
         res.status(404)
         throw new Error('user not found')
    }
 
 })




export{authUser,getUserProfile,registerUSer,updateUserProfile}
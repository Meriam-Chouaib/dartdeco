import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import AsyncHandler from 'express-async-handler'

const protect = AsyncHandler (async (req, res, next) => {
    let token 

    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {

       try {

           token = req.headers.authorization.split(' ')[1]
           //we get the token who have the indice 1 (separe with ' ' so bearer indice 0 and whole token indice 1)
           
           const decoded =jwt.verify(token, process.env.JWT_SECRET)
           //with decoded we can see this result { id: '61e6e4c1d1682fec6e2e37fb', iat: 1643103183, exp: 1645695183 } user's id, issue date, experassion
           
           req.user = await User.findById(decoded.id).select('-password')
           //for having access to another protected routes
           
           next()

       } catch (error) {
           console.error(error)
            res.status(401)
            throw new Error('not authorized, token failed')
       } 
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
   
})
export {protect}
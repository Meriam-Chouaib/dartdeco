
import express from 'express';
const router= express.Router();
import {authUser,registerUSer,getUserProfile,updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authmiddleware.js' 


router.route('/').post(registerUSer)
router.post('/login', authUser)
router.route('/profile')
    .get(protect,getUserProfile)
    .put(protect, updateUserProfile) //getUserProfile and updateUserProfile... we defind they in the usercontroller

//to protect this route we add the protect as first argument

export default router
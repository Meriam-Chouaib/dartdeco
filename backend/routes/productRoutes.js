
import express from 'express';
const router= express.Router();
import {getProducts, getProductById} from '../controllers/productController.js'
 

// we can whrite this router.get('/', getProducts) or this router.route('/').get(getProducts)
router.route('/').get(getProducts)
//we write '/' instead of /api/products from the path because we gona add it when the call of this file
 
router.route('/:id').get(getProductById)

//getProducts and getProductById called from the productController file 
export default router
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'; 
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config()

connectDB()

//async because we use mongodb at the same time
const importData = async () => {
    try{

       //clear all because we dont want to import anything except men database 
       await Order.deleteMany() //delete everything because we dont put parameter to delete
       await Product.deleteMany()
       await User.deleteMany()

       //array of the created users
       const createdUsers = await User.insertMany(users)

       const adminUser = createdUsers[0]._id //because the first user in file user.js find in data folder is the admin for that we put [0]
        
       //add the admin user to each product in the products.js
       const sampleProducts = products.map(product => {
           return { ...product, user: adminUser} //return ...product means all the product information there w adding to that put the user:adminUSer
     
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported!'.green.inverse)
        process.exit()

    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try{

       //clear all because we dont want to import anything except men database 
       await Order.deleteMany() //delete everything because we dont put parameter to delete
       await Product.deleteMany()
       await User.deleteMany()

      
     
    
        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){ //test sur l'option ajouter dans la commande dans le terminal "node backend/seeder -d" si -d on va destroy else import
  
    destroyData()

}else{
 
    importData()

}
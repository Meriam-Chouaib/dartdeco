//imports
import  express from 'express'
//Express provides methods to specify what function is called for a particular HTTP verb ( GET , POST , SET , etc.) 
import colors from 'colors'
//Les variables d'environnements
import dotenv  from 'dotenv'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

import userRoutes from './routes/userRoutes.js'

import {notFound , errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

//app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/',(req,res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes) //call of the productRoutes file where we find the gets of products only
app.use('/api/users', userRoutes) 

app.use(notFound)
app.use(errorHandler)
   
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)
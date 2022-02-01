
import  mongoose  from "mongoose"; //pour traduction de ce code a mongodb

const reviewSchema = mongoose.Schema({
    name:{ type:String, required:true },
    rating:{ type:Number, required:true },
    comment:{ type:String, required:true },

}, {
    timestamps:true //updated and added at
});

const productSchema = mongoose.Schema(
    {
        //a relashionship between ^product and the user
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        name:{
            type: 'string',
            required: true
        },
        image:{
            type:String,
            required: true,
           
        },
        brand:{
            type:String,
            required: true,
        
        },
        category:{
            type:String,
            required: true,
          
        },
        description:{
            type:String,
            required: true,
          
        },

        reviews:[reviewSchema], //reviewSchema {name,comment,rating} declared Up

        rating:{
            type:Number,
            required: true,
            default: 0
          
        },
        numReviews:{
            type:Number,
            required: true,
            default: 0
    
        },
        price:{
            type:Number,
            required: true,
            default: 0
    
        },
        countInStock:{
            type:Number,
            required: true,
            default: 0
    
        }
    },{
    timestamps: true // creation this fields updated at and added automatically
})

const Product = mongoose.model('Product', productSchema)

export default Product
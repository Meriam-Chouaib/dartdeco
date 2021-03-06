import  mongoose  from "mongoose"; //pour traduction de ce code a mongodb
const orderSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        oderItems:[
            {
                name:{type:String, required:true},
                qty:{type:Number, required:true},
                image:{type:String, required:true},
                price:{type:Number, required:true},

                //reference to the product like "clé étrangére"
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    required:true,
                    ref: 'Product'
                }
            }
        ],
        shippingAddress:{
            address: {type:String, required:true},
            city: {type:String, required:true},
            postalCode: {type:String, required:true},
            country: {type:String, required:true}

        },
        paymentMethod:{
            type:String,
            required: true,
        },
        //coming from paypal response of paypal email using in paypal here
        paymentResult:{
         id:{ type: String},
         status:{ type: String},
         update_time:{ type: String},
         email_address:{ type: String},
        },
        taxPrice:{
            type:Number,
            required: true,
            default:0.0
        },
        shippingPrice:{
            type:Number,
            required: true,
            default:0.0
        },
        totalPrice:{
            type:Number,
            required: true,
            default:0.0
        },
        isPaid:{
            type:Boolean,
            required: true,
            default:false,
        },
        paidAt:{
            type:Date
        },
        isDelivered:{
            type:Boolean,
            required: true,
            default:false,
        },
        delivredAt:{
            type:Date
        },

    },
    {
        timestamps: true // creation this fields updated at and added automatically
    })

const Order = mongoose.model('Order', orderSchema)

export default Order
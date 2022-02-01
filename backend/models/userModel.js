import  mongoose  from "mongoose"; //pour traduction de ce code a mongodb
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
     
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true // creation this fields updated at and added automatically
})

userSchema.methods.matchPassword = async function(entredPassword) {
   
    return await bcrypt.compare(entredPassword, this.password)
}

//middleware for encryption password
userSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next()
    }


    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
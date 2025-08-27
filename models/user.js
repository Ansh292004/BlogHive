const mongoose=require('mongoose');
const {createHmac,randomBytes}=require('crypto');
const { createToken } = require('../service/auth');

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    salt:{
        type:String,
    },

    password:{
        type:String,
        required:true,
    },
    profileImageUrl:{
        type:String,
        default:"/images/default.png"
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER',
    },
},
{timestamps:true});


//PASSWORD HASHING MIDDLEWARE
userSchema.pre('save', function (next){
    const user=this;

    if(!user.isModified('password')) return next();
    const salt=randomBytes(16).toString();
    const hashedPassword=createHmac('sha256',salt)
        .update(user.password)
        .digest('hex');

    this.salt=salt;
    this.password=hashedPassword;
    next();
});

//DOCUMENT FUNCTION FOR HANDLING SIGNIN(PASSWORD REHASHING AND FINDING USER IN DB)
userSchema.static('matchPassword',async function(email,password){
    const user=await User.findOne({email});
    if(!user) throw new Error('User not found.....');

    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedHash=createHmac('sha256',salt)
        .update(password)
        .digest('hex');
    if(hashedPassword!==userProvidedHash)
        throw new Error('Incorrect password');

    const token=createToken(user);
    return token;
});


const User=mongoose.model('user',userSchema);



//ALL EXPORTS OF THIS PAGE------------------------------------------
module.exports=User;